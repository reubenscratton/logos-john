#!/usr/bin/env python3
"""Fetch real DEM (AWS Terrain Tiles, terrarium encoding) for the Holy Land and
build the logos-john 3D map assets:
  holyland-dem.bin     Int16 height grid for the mesh
  holyland-color.png   naturalistic land-cover texture (moisture/rain-shadow model)
  holyland-normal.png  tangent-space normal map baked from the full-res DEM
  holyland-veg.png     vegetation density (R = broadleaf/olive, G = palm)
  holyland-meta.json   georeferencing metadata
"""
import io, json, math, os, sys, urllib.request
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

# --- bounding box (lon/lat) covering John's geography ---
WEST, EAST = 34.80, 35.95
SOUTH, NORTH = 31.25, 33.10
ZOOM = 11           # ~65 m/px at this latitude
EXAG_BAKE = 2.0     # relief exaggeration the normal map is baked for
OUT = os.path.join(os.path.dirname(__file__), "out_map")
os.makedirs(OUT, exist_ok=True)
TILE = "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png"

def lon2x(lon, n): return (lon + 180.0) / 360.0 * n
def lat2y(lat, n):
    r = math.radians(lat)
    return (1.0 - math.asinh(math.tan(r)) / math.pi) / 2.0 * n

n = 2 ** ZOOM
x0f, x1f = lon2x(WEST, n), lon2x(EAST, n)
y0f, y1f = lat2y(NORTH, n), lat2y(SOUTH, n)   # NORTH -> smaller y
xt0, xt1 = int(math.floor(x0f)), int(math.floor(x1f))
yt0, yt1 = int(math.floor(y0f)), int(math.floor(y1f))
nxt, nyt = xt1 - xt0 + 1, yt1 - yt0 + 1

CACHE = os.path.join(OUT, f"dem_z{ZOOM}.npy")
if os.path.exists(CACHE):
    dem = np.load(CACHE)
    print(f"DEM loaded from cache {CACHE}")
else:
    print(f"tiles x {xt0}..{xt1} ({nxt}), y {yt0}..{yt1} ({nyt}) = {nxt*nyt} tiles @ z{ZOOM}")
    mosaic = np.zeros((nyt * 256, nxt * 256), dtype=np.float32)
    for j, yt in enumerate(range(yt0, yt1 + 1)):
        for i, xt in enumerate(range(xt0, xt1 + 1)):
            url = TILE.format(z=ZOOM, x=xt, y=yt)
            for attempt in range(4):
                try:
                    with urllib.request.urlopen(url, timeout=30) as r:
                        im = Image.open(io.BytesIO(r.read())).convert("RGB")
                    break
                except Exception:
                    if attempt == 3: raise
            a = np.asarray(im, dtype=np.float32)
            ele = a[:, :, 0] * 256.0 + a[:, :, 1] + a[:, :, 2] / 256.0 - 32768.0
            mosaic[j*256:(j+1)*256, i*256:(i+1)*256] = ele
        print(f"  row {j+1}/{nyt} fetched")
    # crop to exact bbox (pixel-precise)
    left  = (x0f - xt0) * 256.0
    right = (x1f - xt0) * 256.0
    top   = (y0f - yt0) * 256.0
    bot   = (y1f - yt0) * 256.0
    dem = mosaic[int(round(top)):int(round(bot)), int(round(left)):int(round(right))].copy()
    np.save(CACHE, dem)
H, W = dem.shape
print(f"cropped DEM: {W} x {H} px, ele min {dem.min():.0f} max {dem.max():.0f}")

# physical size (km)
midlat = (SOUTH + NORTH) / 2.0
phys_w = (EAST - WEST) * 111.320 * math.cos(math.radians(midlat))
phys_h = (NORTH - SOUTH) * 110.574
dx = phys_w * 1000.0 / W
dy = phys_h * 1000.0 / H
print(f"physical: {phys_w:.1f} km x {phys_h:.1f} km  ({dx:.0f} m/px)")

# ---- water mask (Mediterranean + Sea of Galilee + Dead Sea) ----
lon = np.linspace(WEST, EAST, W)[None, :]
lat = np.linspace(NORTH, SOUTH, H)[:, None]
med = (dem <= 2.0) & (lon < 35.05)

def ll2px(lo, la):
    return ((lo - WEST) / (EAST - WEST) * (W - 1),
            (NORTH - la) / (NORTH - SOUTH) * (H - 1))

# Sea of Galilee: a real shoreline polygon (lon, lat), not a bbox — a bare
# `dem < -150` box would leak down the Jordan valley and get sliced off flat.
# Harp-shaped ("kinnor"): broad north, near-straight west shore, southern taper.
KINNERET = [
    (35.588, 32.709), (35.573, 32.713), (35.551, 32.729), (35.536, 32.766),
    (35.531, 32.800), (35.531, 32.827), (35.533, 32.844), (35.552, 32.867),
    (35.577, 32.880), (35.600, 32.886), (35.623, 32.885), (35.632, 32.880),
    (35.648, 32.865), (35.657, 32.833), (35.655, 32.805), (35.640, 32.783),
    (35.632, 32.760), (35.618, 32.735),
]

def chaikin(pts, iters=2):
    for _ in range(iters):
        out = []
        for i in range(len(pts)):
            a, b = pts[i], pts[(i + 1) % len(pts)]
            out.append((0.75 * a[0] + 0.25 * b[0], 0.75 * a[1] + 0.25 * b[1]))
            out.append((0.25 * a[0] + 0.75 * b[0], 0.25 * a[1] + 0.75 * b[1]))
        pts = out
    return pts

# rasterize at 4x and downsample for an antialiased shoreline
SS = 4
poly_im = Image.new("L", (W * SS, H * SS), 0)
ImageDraw.Draw(poly_im).polygon(
    [(x * SS, y * SS) for lo, la in chaikin(KINNERET) for x, y in [ll2px(lo, la)]], fill=255)
gal_alpha = np.asarray(poly_im.resize((W, H), Image.BOX), dtype=np.float32) / 255.0
# feathered elevation gate: where the polygon overshoots onto rising shore
# ground, fade the water out smoothly instead of biting staircase notches
gal_alpha *= np.clip((-dem - 60.0) / 80.0, 0, 1)
galilee = gal_alpha > 0.5
dead = (lon > 35.37) & (lon < 35.60) & (lat > 31.25) & (lat < 31.85) & (dem < -370)
water = med | galilee | dead

# clean spurious bathymetry / nodata extremes, flatten the water surfaces
dem = np.clip(dem, -450.0, None)
dem[med] = 0.0
dem[galilee] = -210.0   # Sea of Galilee surface
dem[dead] = -430.0      # Dead Sea surface

# ---- River Jordan: trace the valley-floor channel from the DEM ----
def trace_river(lat_hi, lat_lo, lon_lo, lon_hi, stop_mask):
    """Walk south row by row following the minimum-elevation column
    (the channel), constrained to the valley window and to +-10 px of the
    previous position so it can't jump between side-wadis."""
    y0 = int(round(ll2px(lon_lo, lat_hi)[1]))
    y1 = int(round(ll2px(lon_lo, lat_lo)[1]))
    x_lo = int(round(ll2px(lon_lo, 0)[0]))
    x_hi = int(round(ll2px(lon_hi, 0)[0]))
    pts, prev = [], None
    for y in range(max(0, y0), min(H, y1 + 1)):
        a = x_lo if prev is None else max(x_lo, prev - 10)
        b = x_hi if prev is None else min(x_hi, prev + 10)
        row = dem[y, a:b + 1]
        x = a + int(np.argmin(row))
        if stop_mask[y, x]:
            break
        if not (galilee[y, x] or med[y, x]):
            pts.append((x, y))
        prev = x
    if len(pts) > 9:
        xs_ = np.array([p[0] for p in pts], dtype=np.float32)
        k = np.ones(9, dtype=np.float32) / 9.0
        xs_s = np.convolve(xs_, k, mode="same")
        xs_s[:4], xs_s[-4:] = xs_[:4], xs_[-4:]
        pts = [(float(x), float(p[1])) for x, p in zip(xs_s, pts)]
    return pts

jordan_upper = trace_river(NORTH, 32.895, 35.55, 35.70, galilee)
jordan_lower = trace_river(32.705, 31.90, 35.42, 35.62, dead)
print(f"jordan trace: upper {len(jordan_upper)} px, lower {len(jordan_lower)} px")

river_im = Image.new("L", (W, H), 0)
rdraw = ImageDraw.Draw(river_im)
for seg in (jordan_upper, jordan_lower):
    if len(seg) > 1:
        rdraw.line(seg, fill=255, width=2, joint="curve")
river = (np.asarray(river_im) > 0) & ~water
# riparian ribbon (the "Zor" thicket) — a dilated band around the river
riparian = (np.asarray(river_im.filter(ImageFilter.MaxFilter(19))) > 0) & ~water

# ---- helpers ----
def boxblur(a, r, passes=3):
    a = a.astype(np.float32)
    for _ in range(passes):
        c = np.cumsum(np.pad(a, ((r + 1, r), (0, 0)), "edge"), axis=0)
        a = (c[2*r+1:, :] - c[:-2*r-1, :]) / (2 * r + 1)
        c = np.cumsum(np.pad(a, ((0, 0), (r + 1, r)), "edge"), axis=1)
        a = (c[:, 2*r+1:] - c[:, :-2*r-1]) / (2 * r + 1)
    return a

def vnoise(seed, cells_amps):
    rng = np.random.default_rng(seed)
    out = np.zeros((H, W), np.float32)
    for cell, amp in cells_amps:
        g = rng.random((H // cell + 2, W // cell + 2)).astype(np.float32)
        up = Image.fromarray(g).resize((W, H), Image.BILINEAR)
        out += amp * np.asarray(up)
    return out

def sstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0.0, 1.0)
    return t * t * (3.0 - 2.0 * t)

# ---- moisture model: latitude + orography − rain shadow − rift dryness ----
dem_s = boxblur(dem, 24, 2)   # regional smoothing

# central watershed ridge per row (the Judea/Samaria/Galilee spine)
xa = int(ll2px(34.95, 0)[0]); xb = int(ll2px(35.40, 0)[0])
ridge = (np.argmax(dem_s[:, xa:xb], axis=1) + xa).astype(np.float32)
rk = np.ones(151, np.float32) / 151.0
ridge = np.convolve(np.pad(ridge, 75, "edge"), rk, mode="valid")

base = 0.42 + 0.33 * np.clip((lat - SOUTH) / (NORTH - SOUTH), 0, 1)   # wetter north
oro = np.clip(dem_s, 0, None) / 1400.0 * 0.30                          # hills catch rain
east = np.clip((np.arange(W, dtype=np.float32)[None, :] - ridge[:, None]) / (W * 0.10), 0, 1)
shadow_amp = 0.20 + 0.30 * np.clip((32.55 - lat) / 0.8, 0, 1)          # strongest in Judea
# the shadow relents where the Transjordan highlands rise again (Gilead, Golan)
shadow = shadow_amp * east * (1 - np.clip(dem_s / 900.0, 0, 0.65))
rift = np.clip((-dem_s + 50.0) / 300.0, 0, 1) * 0.25 * (lon > 35.30)
moisture = np.clip(base + oro - shadow - rift, 0, 1)
moisture = np.where(riparian, np.maximum(moisture, 0.80), moisture)

# oases (Jericho, En-gedi) and the marshy Hula plain north of the lake
def blob(lo, la, r_px, boost):
    cx, cy = ll2px(lo, la)
    yy, xx = np.ogrid[:H, :W]
    d2 = ((xx - cx) ** 2 + (yy - cy) ** 2) / (r_px ** 2)
    np.copyto(moisture, np.maximum(moisture, boost * np.clip(1 - d2, 0, 1)), where=d2 < 1)
blob(35.45, 31.87, 26, 0.85)    # Jericho, "city of palms"
blob(35.385, 31.45, 10, 0.80)   # En-gedi
blob(35.60, 33.05, 46, 0.78)    # Hula marshes

# ---- naturalistic land-cover colour ----
nse = vnoise(7, [(96, 0.5), (24, 0.3), (6, 0.2)])           # biome-breakup noise
nse2 = vnoise(23, [(48, 0.6), (12, 0.4)])                   # brightness grain
m2 = sstep(0.34, 0.60, moisture + 0.24 * (nse - 0.5))

def palette(stops):
    xs = np.array([s[0] for s in stops], np.float32)
    cs = np.array([s[1] for s in stops], np.float32)
    out = np.empty((H, W, 3), np.float32)
    for c in range(3):
        out[:, :, c] = np.interp(dem, xs, cs[:, c])
    return out

desert = palette([(-430, (203, 186, 156)), (-150, (207, 190, 158)), (200, (197, 178, 143)),
                  (600, (188, 167, 131)), (1000, (180, 160, 128))])
green = palette([(-430, (152, 161, 112)), (0, (140, 158, 101)), (300, (124, 148, 93)),
                 (700, (110, 139, 89)), (1200, (122, 142, 99))])
col = desert * (1 - m2[:, :, None]) + green * m2[:, :, None]

# steep ground shows bare rock
gy, gx = np.gradient(dem, dy, dx)
slope = np.hypot(gx, gy)
rock = np.clip((slope - 0.18) / 0.50, 0, 1) * 0.45
ROCK = np.array([181, 168, 148], np.float32)
col = col * (1 - rock[:, :, None]) + ROCK[None, None, :] * rock[:, :, None]

# wadis and hollows sit a touch darker (collected shade + scrub)
cav = np.clip((boxblur(dem, 10, 2) - dem) / 30.0, 0, 1)
col *= (1 - 0.10 * cav)[:, :, None]

# agricultural terracing: faint contour-following bands on cultivated slopes
# (stone-terraced olive/vine hillsides of Judea, Samaria and Galilee)
dem_b = boxblur(dem, 2, 2)
band = np.sin(dem_b / 24.0 * 2.0 * np.pi)
band = np.sign(band) * (np.abs(band) ** 0.6)          # crisper tread/riser edges
nse3 = vnoise(41, [(64, 0.6), (16, 0.4)])              # patchy — not every hill is worked
tmask = (
    sstep(0.05, 0.10, slope) * (1 - sstep(0.30, 0.42, slope))   # cultivable gradients
    * sstep(0.45, 0.65, m2)                                      # settled green country
    * sstep(60, 180, dem)                                        # the hill country proper
    * sstep(0.42, 0.58, nse3)
)
col *= (1 + 0.075 * band * tmask)[:, :, None]

# fine brightness grain so flats aren't airbrushed
col *= (0.95 + 0.10 * (nse2 - 0.5))[:, :, None]

# sandy dune strip along the Mediterranean shore
coast_d = boxblur(med.astype(np.float32), 12, 2)   # distance-ish falloff from the sea
dune = np.clip(coast_d * 3.0, 0, 1) * (dem < 60) * (~med) * (lon < 35.1)
SAND = np.array([206, 194, 162], np.float32)
col = col * (1 - 0.6 * dune[:, :, None]) + SAND[None, None, :] * (0.6 * dune[:, :, None])

# ---- water & river ----
WATER_COL = np.array([107, 134, 152], np.float32)
RIVER_COL = np.array([104, 132, 148], np.float32)
col[med | dead] = WATER_COL
a = gal_alpha[:, :, None]
col = col * (1.0 - a) + WATER_COL[None, None, :] * a
col[river] = 0.25 * col[river] + 0.75 * RIVER_COL

tex_w = min(1536, W)
tex_h = int(round(tex_w * H / W))
col_u8 = np.clip(col, 0, 255).astype(np.uint8)
Image.fromarray(col_u8, "RGB").resize((tex_w, tex_h), Image.LANCZOS).save(
    os.path.join(OUT, "holyland-color.jpg"), quality=88, optimize=True)
print(f"color texture: {tex_w} x {tex_h}")

# ---- normal map (tangent space, baked for EXAG_BAKE relief) ----
nx_ = -gx * EXAG_BAKE
ny_ = gy * EXAG_BAKE
ln = np.sqrt(nx_ ** 2 + ny_ ** 2 + 1.0)
nrm = np.stack([nx_ / ln * 0.5 + 0.5, ny_ / ln * 0.5 + 0.5, 1.0 / ln * 0.5 + 0.5], axis=-1)
Image.fromarray((np.clip(nrm, 0, 1) * 255).astype(np.uint8), "RGB").resize(
    (tex_w, tex_h), Image.LANCZOS).save(os.path.join(OUT, "holyland-normal.jpg"), quality=90, optimize=True)
print("normal map baked")

# ---- vegetation density map (R broadleaf/olive, G palm) ----
broad = (m2 ** 1.2) * (1 - np.clip(rock * 1.8, 0, 1)) * (dem > -350) * ~water
palm_zone = (riparian | (moisture > 0.72)) & (dem < 100) & (lon > 35.25) & ~water
palm = np.where(palm_zone, np.clip(moisture, 0, 1), 0.0) * (1 - np.clip(rock * 2, 0, 1))
veg = np.zeros((H, W, 3), np.uint8)
veg[:, :, 0] = (np.clip(broad, 0, 1) * 255).astype(np.uint8)
veg[:, :, 1] = (np.clip(palm, 0, 1) * 255).astype(np.uint8)
vw, vh = W // 4, H // 4
Image.fromarray(veg, "RGB").resize((vw, vh), Image.BOX).save(
    os.path.join(OUT, "holyland-veg.png"), optimize=True)
print(f"vegetation density: {vw} x {vh}")

# ---- height grid (.bin, Int16 meters), mesh resolution ----
NX = 256
NY = int(round(NX * H / W))
grid = np.asarray(Image.fromarray(dem).resize((NX, NY), Image.BILINEAR), dtype=np.float32)
grid_i16 = np.clip(np.round(grid), -32000, 32000).astype("<i2")
grid_i16.tofile(os.path.join(OUT, "holyland-dem.bin"))
print(f"height grid: {NX} x {NY}  ({grid_i16.nbytes} bytes)")

meta = {
    "west": WEST, "east": EAST, "south": SOUTH, "north": NORTH,
    "nx": NX, "ny": NY,
    "minEle": float(np.floor(grid.min())), "maxEle": float(np.ceil(grid.max())),
    "physWidthKm": round(phys_w, 2), "physHeightKm": round(phys_h, 2),
    "seaLevel": 0, "exagBake": EXAG_BAKE,
}
with open(os.path.join(OUT, "holyland-meta.json"), "w") as f:
    json.dump(meta, f, indent=2)
print("meta:", json.dumps(meta))
print("done ->", OUT)
