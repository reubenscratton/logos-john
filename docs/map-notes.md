# The Holy Land map & Jerusalem diorama — working notes

A record of what was built (July–August 2026), how it works, and where to
pick it up again. Everything described here is live at
https://reubenscratton.github.io/logos-john/.

## What it is

A lazy-loaded 3D map (three.js) opened from the Map button or from
place-name pins in the reading text. Real terrain for the whole Holy Land,
with a continuous Google-Earth-style zoom into a procedural diorama of
Herodian Jerusalem, c. 30 AD. Place gazetteer with EN/SV aliases; clicking
a name in the text flies the camera to it.

## Code map

| File | Role |
|---|---|
| `src/components/HolyLandMap.tsx` | The whole map: terrain mesh, LOD easing, camera flights, custom controls, HTML labels + decluttering, focus/marker logic, vegetation wiring, sky/fog |
| `src/lib/jerusalemCity.ts` | The Jerusalem diorama, entirely procedural (see below) |
| `src/lib/vegetation.ts` | Regional instanced vegetation (grove blobs + palms) |
| `src/lib/placematch.ts` | Longest-first alias matcher over translation tokens |
| `src/data/places.ts` | Gazetteer (regions, waters, land sites, Jerusalem micro-sites with `within: 'jerusalem'`) |
| `src/data/jerusalemHouses.ts` | 655 house footprints `[x, z, w, d, h, rotY]` mined from the reference model (positions only) |
| `scripts/build_terrain.py` | Regenerates ALL map assets in `public/map/` |
| `scripts/jref_*.py` | Headless-Blender scripts for studying the reference model |

## Terrain / data pipeline

`python3 scripts/build_terrain.py` (numpy + Pillow) produces into `out_map/`:
`holyland-dem.bin` (Int16 256×487), `holyland-color.jpg` (land cover),
`holyland-normal.jpg` (baked at `EXAG_BAKE = 1.0` — must match the map's
`BASE_EXAG`), `holyland-veg.png` (R broadleaf / G palm density),
`holyland-meta.json`. Copy those five to `public/map/`.

- Fetches AWS Terrain Tiles z11 (~65 m/px); the DEM is cached as
  `out_map/dem_z11.npy`, so reruns skip the network (~30 s).
- Colour is a **climate model**, not elevation tint: latitude rainfall +
  orographic bonus − rain shadow east of the per-row watershed ridge
  (recovering over the Transjordan highlands) − rift dryness; moisture
  forced high along the traced Jordan ribbon and at oases (Jericho,
  En-gedi, Hula). Desert/green palettes blended with noise; slope → rock;
  wadi cavity darkening; terracing bands (contour-following, on cultivable
  green slopes only); Mediterranean dune strip. April colours by intent.
- Sea of Galilee is a hand-authored harp-shaped shoreline polygon
  (Chaikin-smoothed, 4× supersampled, feathered elevation gate). The
  Jordan is traced from the DEM by walking the minimum-elevation column.

## Map component notes

- `BASE_EXAG = 1` (natural relief). Near Jerusalem it eases to
  `CITY_RELIEF = 1.5` to match the diorama's vertical presence
  (`SY = 0.0015`). `material.normalScale` tracks `effExag / meta.exagBake`.
- Terrain is carved under the diorama footprint (`cityMask`, feathered)
  so the plate seats into the landscape; diorama fades in over
  `CITY_FAR = 34 km → CITY_NEAR = 9 km`.
- Controls: drag pans, two-finger drag rotates (Y inverted), pinch/wheel
  dollies; a capture-phase wheel handler on the map root prevents browser
  page-zoom, including over labels. 15° minimum elevation
  (`maxPolarAngle 75°`); per-frame ground-collision clamp for camera and
  target sampled from the DEM.
- Labels: greedy placement in stable priority order (focused first, then
  quantised distance); a label may slide ≤ one line height past placed
  neighbours, else its text hides (site dots stay). Explicit z-index by
  rank. Webfont re-measure on `document.fonts.ready`.
- **Debug/testing**: `window.__hl` exposes camera/controls/city/applyFocus
  and `step(now)`. In the CC browser pane the tab is OS-hidden: rAF never
  fires — drive frames manually (`for(...){t+=16;h.step(t)}`). If all
  labels report position 0 the pane collapsed layout (stage 0×0):
  `resize_window`, reload. Never teleport camera≈target (degenerate state).

## The Jerusalem diorama (`jerusalemCity.ts`)

Local metre frame centred on the Temple Mount (x east, z south), group
scaled ×0.001 (×0.0015 vertical). Everything samples analytic
`groundH(x, z)`:

- **Plateau model** (important — it replaced an isolated-hill look): base
  88 m + gentle swells (Upper City, Temple ridge, Olivet +100, Golgotha
  knoll…), ×falloffs east of Olivet (desert) and southward (spur), minus
  gaussian valley trenches (Kidron, Tyropoeon, Hinnom). Hard cap under the
  platform; feathered level apron under the Pool of Siloam.
- Temple complex after Josephus (*War* 5.184–247) and Mishnah *Middot*:
  two-terrace courts, Nicanor bronze + semicircular steps, gold-doored
  gatehouses, Beautiful Gate, "lion" facade with golden vine/arch/spike
  rings, horned altar + south ramp, laver. Esplanade: real instanced
  colonnades, Royal Stoa, crenellated enclosure + towers.
- Access: Southern Steps + Hulda gates, Robinson's Arch stair, Wilson
  viaduct → Xystus, Antonia steps, Tadi + Shushan + Barclay/Coponius.
  Long flights = sloped slab + instanced tread strips (`stairs()` helper +
  `buildTreads()` — chunky steps read as giant terraces, don't revert).
- City: houses from `JERUSALEM_HOUSES` (+ small procedural fill for the
  lower City of David), compound variation (storeys/annexes/cisterns),
  point-in-polygon **confined to the wall circuits** (`CITY_POLY`,
  `QUARTER_POLY`). Walls refitted to the reference outline except the
  southern tip (extended to Siloam per *War* 5.145). Bezetha/Third-Wall
  suburb deliberately omitted (post-30 AD; would swallow Golgotha).
- Monuments: twin-courtyard Herod's Palace + garden canal + three towers
  (Hippicus 47 m tallest, Phasael stepped 42, Mariamne 29), Antonia ring
  with dominant SE tower, Xystus/Council House/Archives/Hasmonean Palace,
  five named gates, stepped Siloam + reservoir/dam, Pool of Israel,
  Bethesda twins, theatre, Gethsemane walled grove, High Priest's House.
  No hippodrome (textual only; the Holyland Model removed theirs too).

## The reference model (licensing: reference ONLY)

`~/Downloads/Templo+de+Herodes.blend` (967 MB) + FBX + texture zip —
CGTrader "City of Jerusalem in the 1st century" (mundoart-animation, $30,
custom no-AI license). **Never import/redistribute its meshes or textures.**
We studied renders and mined *coordinate data only* (town-plan facts).

Headless Blender 5.2 (`/Applications/Blender.app/Contents/MacOS/Blender -b`):
- `scripts/jref_extract.py -- <outdir> [inventory|render|focus cx cy cz r prefix]`
  — object inventory, Workbench orbits, EEVEE beauty. Set camera
  `clip_end ≈ 30× scene radius` (default 100 blanks everything).
- `scripts/jref_houses.py -- houses.json`, `scripts/jref_walls.py -- walls.json`.
- **Coordinate mapping** (their frame → diorama frame): their +x = our
  west, their +y = our south, z up both. `ourX = −(tx − 4) × 1.356`,
  `ourZ = (ty − 16.5) × 1.273` (anchored on platform centres; their
  platform 236×385 m vs ours 320×490). Box yaw carries over unchanged
  (mod π). Their scale is 1 unit = 1 m.

## Parked ideas (the backlog)

- Water treatment: shore darkening, faint specular/sheen on lakes and sea.
- Snow on Hermon at the map's north edge.
- Capernaum harbour + village cluster at land-map scale.
- Mine the reference's Lower City lanes and gabled public buildings;
  wall-tower rhythm; upper-room/stair details on houses.
- Streets: mine or synthesize the main street grid (Tyropoeon street,
  upper market) as texture striping or low kerbs.
- Gennath Gate → Golgotha road (the Via Dolorosa of the narrative).
- Seasonal palette variant (late-summer gold) as an option.
- Theatre upgrade (colonnaded scaenae frons); Psephinus-like NW tower.
- Possible "tour" mode: scripted flight through John's Passion sites.
