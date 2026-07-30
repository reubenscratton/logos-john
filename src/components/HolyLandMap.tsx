import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PLACES, PLACE_BY_ID, type Place } from '../data/places';
import { buildJerusalem } from '../lib/jerusalemCity';
import { buildVegetation } from '../lib/vegetation';
import type { Lang } from '../data/ui';

type Meta = {
  west: number; east: number; south: number; north: number;
  nx: number; ny: number; minEle: number; maxEle: number;
  physWidthKm: number; physHeightKm: number; seaLevel: number;
  exagBake?: number;
};

const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v);
const smoothstep = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

function inRing(lon: number, lat: number, ring: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

// The Temple Mount, to which the diorama is glued.
const JLM = { lon: 35.2354, lat: 31.778 };
// Relief exaggeration (fixed; eases toward natural near the city).
const BASE_EXAG = 2;
// Camera-to-city distances (km) governing the continuous level-of-detail.
const CITY_FAR = 34;   // beyond this the diorama is gone
const CITY_NEAR = 9;   // within this it is fully present, relief eased to 1.5×
const CITY_RELIEF = 1.5;

/** Camera pull-back distance (km) per city site. */
const CITY_DIST: Record<string, number> = {
  temple: 0.6, 'solomons-colonnade': 0.45, antonia: 0.45, bethesda: 0.4,
  siloam: 0.4, gabbatha: 0.5, 'herods-palace': 0.55, golgotha: 0.45,
  kidron: 0.85, 'mount-of-olives': 1.15,
};

export default function HolyLandMap({
  focus = null,
  lang = 'en',
  onGoChapter,
  onClose,
}: {
  focus?: string | null;
  lang?: Lang;
  onGoChapter?: (chapter: number) => void;
  onClose?: () => void;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const labelWrapRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<string>('Loading terrain…');
  const [focusId, setFocusId] = useState<string | null>(focus);
  const [panelOpen, setPanelOpen] = useState(true);
  const [nearCity, setNearCity] = useState(false);

  const applyFocusRef = useRef<((id: string | null) => void) | null>(null);
  const focusIdRef = useRef(focusId);
  focusIdRef.current = focusId;

  useEffect(() => applyFocusRef.current?.(focusId), [focusId]);

  const focusPlace = focusId ? PLACE_BY_ID.get(focusId) ?? null : null;

  useEffect(() => {
    const el = mountRef.current;
    const labelWrap = labelWrapRef.current;
    if (!el || !labelWrap) return;
    const base = import.meta.env.BASE_URL;
    let raf = 0;
    let disposed = false;
    const cleanups: (() => void)[] = [];

    async function init() {
      const el = mountRef.current;
      const labelWrap = labelWrapRef.current;
      if (!el || !labelWrap) return;
      let meta: Meta, demBuf: ArrayBuffer, texture: THREE.Texture, normalTex: THREE.Texture, vegImg: HTMLImageElement;
      const loadImage = (src: string) =>
        new Promise<HTMLImageElement>((res, rej) => {
          const im = new Image();
          im.onload = () => res(im);
          im.onerror = rej;
          im.src = src;
        });
      try {
        const [m, d, t, nt, vi] = await Promise.all([
          fetch(base + 'map/holyland-meta.json').then((r) => r.json() as Promise<Meta>),
          fetch(base + 'map/holyland-dem.bin').then((r) => r.arrayBuffer()),
          new THREE.TextureLoader().loadAsync(base + 'map/holyland-color.jpg'),
          new THREE.TextureLoader().loadAsync(base + 'map/holyland-normal.jpg'),
          loadImage(base + 'map/holyland-veg.png'),
        ]);
        meta = m; demBuf = d; texture = t; normalTex = nt; vegImg = vi;
      } catch {
        if (!disposed) setStatus('Could not load the map data.');
        return;
      }
      if (disposed) return;

      const { nx, ny } = meta;
      const W = meta.physWidthKm;
      const H = meta.physHeightKm;
      const dem = new Int16Array(demBuf);

      const dark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      const scene = new THREE.Scene();
      // sky gradient + distance haze — the "looking out of a window" feel
      {
        const cv = document.createElement('canvas');
        cv.width = 2; cv.height = 512;
        const g = cv.getContext('2d')!;
        const grad = g.createLinearGradient(0, 0, 0, 512);
        if (dark) {
          grad.addColorStop(0, '#151c26'); grad.addColorStop(0.55, '#242a30');
          grad.addColorStop(0.8, '#37342c'); grad.addColorStop(1, '#14110b');
        } else {
          grad.addColorStop(0, '#8fb2cf'); grad.addColorStop(0.5, '#b8ccd6');
          grad.addColorStop(0.78, '#e2d9c2'); grad.addColorStop(1, '#e7e0d0');
        }
        g.fillStyle = grad; g.fillRect(0, 0, 2, 512);
        const sky = new THREE.CanvasTexture(cv);
        sky.colorSpace = THREE.SRGBColorSpace;
        scene.background = sky;
        cleanups.push(() => sky.dispose());
      }
      scene.fog = new THREE.Fog(dark ? 0x2c2a24 : 0xd9cfb8, 150, 640);

      const camera = new THREE.PerspectiveCamera(42, 1, 0.01, 6000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      el.appendChild(renderer.domElement);

      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      normalTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      const exagBake = meta.exagBake ?? 6;

      // effective relief: BASE_EXAG far out, easing to natural 1.5× at the city
      let effExag = BASE_EXAG;

      // ---- terrain geometry ----
      const positions = new Float32Array(nx * ny * 3);
      const uvs = new Float32Array(nx * ny * 2);
      const eleAt = (lon: number, lat: number) => {
        const u = clamp((lon - meta.west) / (meta.east - meta.west), 0, 1);
        const v = clamp((lat - meta.north) / (meta.south - meta.north), 0, 1);
        const i = Math.round(u * (nx - 1));
        const j = Math.round(v * (ny - 1));
        return dem[j * nx + i];
      };
      const worldAt = (lon: number, lat: number, ele?: number) => {
        const u = (lon - meta.west) / (meta.east - meta.west);
        const v = (lat - meta.north) / (meta.south - meta.north);
        const e = ele ?? eleAt(lon, lat);
        return new THREE.Vector3((u - 0.5) * W, (e / 1000) * effExag, (v - 0.5) * H);
      };
      // Mask of terrain vertices under the Jerusalem diorama footprint (with a
      // feathered rim). Where the mask is 1, the terrain is carved down below
      // the diorama's ground plate so the model seats into the landscape.
      const cityMask = new Float32Array(nx * ny);
      const eleJ0 = eleAt(JLM.lon, JLM.lat);
      {
        const mPerLon = 111320 * Math.cos((JLM.lat * Math.PI) / 180);
        const mPerLat = 110870;
        const ext = { x0: -1250, x1: 1250, z0: -950, z1: 1350 }; // metres (matches the builder)
        const feather = 500; // metres
        const axis = (v2: number, lo: number, hi: number) =>
          Math.min(smoothstep(lo - feather, lo, v2), 1 - smoothstep(hi, hi + feather, v2));
        for (let j = 0; j < ny; j++) {
          const lat = meta.north + (j / (ny - 1)) * (meta.south - meta.north);
          const zm = (JLM.lat - lat) * mPerLat; // +z = south
          for (let i = 0; i < nx; i++) {
            const lon = meta.west + (i / (nx - 1)) * (meta.east - meta.west);
            const xm = (lon - JLM.lon) * mPerLon;
            cityMask[j * nx + i] = axis(xm, ext.x0, ext.x1) * axis(zm, ext.z0, ext.z1);
          }
        }
      }
      let builtExag = 0;
      const buildPositions = (ex: number) => {
        // terrain floor under the diorama, safely beneath its ground plate
        const floorY = (eleJ0 / 1000) * ex - 0.225 + 0.03 - 0.015;
        for (let j = 0; j < ny; j++) {
          for (let i = 0; i < nx; i++) {
            const idx = j * nx + i;
            let y = (dem[idx] / 1000) * ex;
            const m = cityMask[idx];
            if (m > 0 && y > floorY) y -= m * (y - floorY);
            positions[idx * 3] = (i / (nx - 1) - 0.5) * W;
            positions[idx * 3 + 1] = y;
            positions[idx * 3 + 2] = (j / (ny - 1) - 0.5) * H;
            uvs[idx * 2] = i / (nx - 1);
            uvs[idx * 2 + 1] = 1 - j / (ny - 1);
          }
        }
        builtExag = ex;
      };
      buildPositions(effExag);
      const indices: number[] = [];
      for (let j = 0; j < ny - 1; j++) {
        for (let i = 0; i < nx - 1; i++) {
          const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
          indices.push(a, c, b, b, c, d);
        }
      }
      const geo = new THREE.BufferGeometry();
      const posAttr = new THREE.BufferAttribute(positions, 3);
      geo.setAttribute('position', posAttr);
      geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
      geo.setIndex(indices);
      geo.computeVertexNormals();

      const material = new THREE.MeshStandardMaterial({
        map: texture, normalMap: normalTex, roughness: 0.96, metalness: 0,
      });
      material.normalScale.set(1, 1);
      const mesh = new THREE.Mesh(geo, material);
      scene.add(mesh);

      // ---- Jerusalem diorama, seated in the world at its true location ----
      const city = buildJerusalem();
      const eleJ = eleAt(JLM.lon, JLM.lat); // DEM elevation of the esplanade (m)
      const jXZ = worldAt(JLM.lon, JLM.lat); // horizontal placement (x/z constant)
      const cityGroupY = () => (eleJ / 1000) * effExag - city.deckY + 0.03;
      city.group.position.set(jXZ.x, cityGroupY(), jXZ.z);
      city.group.visible = false;
      city.setOpacity(0);
      scene.add(city.group);
      cleanups.push(() => city.dispose());
      const cityCenter = new THREE.Vector3();
      const updateCityCenter = () => cityCenter.set(city.group.position.x, city.group.position.y + city.deckY, city.group.position.z);
      updateCityCenter();

      // ---- regional vegetation (groves + palms from the density map) ----
      const vcv = document.createElement('canvas');
      vcv.width = vegImg.width; vcv.height = vegImg.height;
      vcv.getContext('2d')!.drawImage(vegImg, 0, 0);
      const vdat = vcv.getContext('2d')!.getImageData(0, 0, vcv.width, vcv.height).data;
      const eleAtWorld = (x: number, z: number) => {
        const fu = clamp(x / W + 0.5, 0, 1) * (nx - 1);
        const fv = clamp(z / H + 0.5, 0, 1) * (ny - 1);
        const i0 = Math.floor(fu), j0 = Math.floor(fv);
        const i1 = Math.min(i0 + 1, nx - 1), j1 = Math.min(j0 + 1, ny - 1);
        const a2 = fu - i0, b2 = fv - j0;
        return dem[j0 * nx + i0] * (1 - a2) * (1 - b2) + dem[j0 * nx + i1] * a2 * (1 - b2)
          + dem[j1 * nx + i0] * (1 - a2) * b2 + dem[j1 * nx + i1] * a2 * b2;
      };
      const veg = buildVegetation({
        W, H, eleAt: eleAtWorld,
        vegMap: { data: vdat, w: vcv.width, h: vcv.height },
        exclude: { x: jXZ.x, z: jXZ.z, rKm: 2.2 },
      });
      let vegExag = effExag;
      veg.rebuild(effExag);
      scene.add(veg.group);
      cleanups.push(() => veg.dispose());

      // ---- region highlight overlay (rebuilt on demand) ----
      const overlayMat = new THREE.MeshBasicMaterial({
        color: 0xc79a3a, transparent: true, opacity: 0.34,
        depthWrite: false, side: THREE.DoubleSide,
      });
      let overlay: THREE.Mesh | null = null;
      const buildOverlay = (ring: [number, number][]) => {
        if (overlay) { scene.remove(overlay); overlay.geometry.dispose(); overlay = null; }
        const pos: number[] = [];
        const idx: number[] = [];
        const map = new Map<number, number>();
        const off = 0.35;
        const inside = (i: number, j: number) => {
          const lon = meta.west + (i / (nx - 1)) * (meta.east - meta.west);
          const lat = meta.north + (j / (ny - 1)) * (meta.south - meta.north);
          return inRing(lon, lat, ring);
        };
        const vert = (i: number, j: number) => {
          const key = j * nx + i;
          let vi = map.get(key);
          if (vi === undefined) {
            vi = pos.length / 3;
            pos.push(positions[key * 3], positions[key * 3 + 1] + off, positions[key * 3 + 2]);
            map.set(key, vi);
          }
          return vi;
        };
        for (let j = 0; j < ny - 1; j++) {
          for (let i = 0; i < nx - 1; i++) {
            if (inside(i, j) && inside(i + 1, j) && inside(i, j + 1) && inside(i + 1, j + 1)) {
              idx.push(vert(i, j), vert(i, j + 1), vert(i + 1, j), vert(i + 1, j), vert(i, j + 1), vert(i + 1, j + 1));
            }
          }
        }
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        g.setIndex(idx);
        overlay = new THREE.Mesh(g, overlayMat);
        scene.add(overlay);
      };

      // ---- lighting ----
      scene.add(new THREE.HemisphereLight(0xfdf7ea, 0x6b6250, 0.75));
      const sun = new THREE.DirectionalLight(0xfff1da, 1.15);
      sun.position.set(-W * 0.6, H * 0.7, -H * 0.5);
      scene.add(sun);
      scene.add(new THREE.AmbientLight(0xffffff, 0.18));

      // ---- camera / controls ----
      const DEFAULT_POS = new THREE.Vector3(0, H * 0.62, H * 0.72);
      const DEFAULT_TGT = new THREE.Vector3(0, 0, 0);
      camera.position.copy(DEFAULT_POS);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.copy(DEFAULT_TGT);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.minDistance = 0.25;
      controls.maxDistance = H * 2.2;
      // never let the view drop below 15° elevation above the map plane
      controls.maxPolarAngle = Math.PI * (75 / 180);
      // map-style controls: drag pans; right-drag / two-finger drag rotates
      controls.screenSpacePanning = false;
      controls.mouseButtons = { LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.ROTATE };
      controls.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_ROTATE };
      controls.update();

      // ---- smooth camera flights (destination re-evaluated each frame) ----
      type Dest = () => { pos: THREE.Vector3; tgt: THREE.Vector3 };
      let flight: { dest: Dest; t0: number; dur: number; fromPos: THREE.Vector3; fromTgt: THREE.Vector3 } | null = null;
      const flyTo = (dest: Dest, dur = 1.6) => {
        flight = { dest, t0: performance.now(), dur: dur * 1000, fromPos: camera.position.clone(), fromTgt: controls.target.clone() };
      };
      const cancelFlight = () => { flight = null; };
      renderer.domElement.addEventListener('pointerdown', cancelFlight);

      // Custom wheel handling on the whole map card (capture phase, so it also
      // covers the HTML labels and pre-empts OrbitControls' own wheel zoom):
      //   · trackpad pinch (ctrl+wheel) → dolly — and never browser page-zoom
      //   · discrete mouse wheel       → dolly
      //   · trackpad two-finger scroll → rotate/tilt
      const root = el.parentElement as HTMLElement;
      const sphTmp = new THREE.Spherical();
      const wheelTmp = new THREE.Vector3();
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
        cancelFlight();
        const offset = wheelTmp.copy(camera.position).sub(controls.target);
        const isMouseWheel = e.deltaMode !== 0 || (Math.abs(e.deltaY) >= 100 && e.deltaX === 0);
        if (e.ctrlKey || e.metaKey || isMouseWheel) {
          const px = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
          const k = e.ctrlKey || e.metaKey ? 0.01 : 0.0012;
          offset.setLength(clamp(offset.length() * Math.exp(px * k), controls.minDistance, controls.maxDistance));
        } else {
          sphTmp.setFromVector3(offset);
          sphTmp.theta -= e.deltaX * 0.005;
          sphTmp.phi += e.deltaY * 0.005;
          sphTmp.phi = clamp(sphTmp.phi, 0.05, controls.maxPolarAngle);
          sphTmp.makeSafe();
          offset.setFromSpherical(sphTmp);
        }
        camera.position.copy(controls.target).add(offset);
      };
      root.addEventListener('wheel', onWheel, { capture: true, passive: false });
      // Safari fires proprietary gesture events for trackpad pinch — block page zoom
      const stopGesture = (e: Event) => e.preventDefault();
      const GESTURES = ['gesturestart', 'gesturechange', 'gestureend'];
      for (const t of GESTURES) root.addEventListener(t, stopGesture);
      cleanups.push(() => {
        root.removeEventListener('wheel', onWheel, { capture: true });
        for (const t of GESTURES) root.removeEventListener(t, stopGesture);
      });

      // ---- labels & focus marker ----
      type L = {
        place: Place; space: 'land' | 'city'; el: HTMLButtonElement;
        txt: HTMLElement; tw: number; th: number;
        lon?: number; lat?: number; ele?: number; local?: THREE.Vector3;
      };
      const makeLabel = (place: Place, space: 'land' | 'city', extra: Partial<L>): L => {
        const btn = document.createElement('button');
        btn.className = 'hlmap__label hlmap__label--' + place.type;
        btn.dataset.place = place.id;
        btn.innerHTML =
          place.type === 'site'
            ? `<span class="hlmap__dot"></span><span class="hlmap__ltext">${place.name[lang]}</span>`
            : `<span class="hlmap__ltext">${place.name[lang]}</span>`;
        btn.addEventListener('click', () => {
          setFocusId(place.id);
          setPanelOpen(true);
        });
        labelWrap!.appendChild(btn);
        const txt = btn.querySelector('.hlmap__ltext') as HTMLElement;
        // measure the text box now, while the element is still un-hidden
        return { place, space, el: btn, txt, tw: txt.offsetWidth, th: txt.offsetHeight, ...extra };
      };
      const labels: L[] = [];
      for (const place of PLACES) {
        if (!place.within) {
          labels.push(makeLabel(place, 'land', { lon: place.lon, lat: place.lat, ele: eleAt(place.lon, place.lat) }));
        } else if (place.within === 'jerusalem' && city.anchors[place.id]) {
          labels.push(makeLabel(place, 'city', { local: city.anchors[place.id] }));
        }
      }
      // re-measure label text once webfonts have settled (visible labels only)
      document.fonts?.ready.then(() => {
        if (disposed) return;
        for (const l of labels) {
          l.tw = l.txt.offsetWidth || l.tw;
          l.th = l.txt.offsetHeight || l.th;
        }
      });
      const marker = document.createElement('div');
      marker.className = 'hlmap__marker';
      marker.style.display = 'none';
      labelWrap!.appendChild(marker);
      type MarkerState =
        | { mode: 'none' }
        | { mode: 'land'; lon: number; lat: number; ele: number }
        | { mode: 'city'; local: THREE.Vector3 };
      let markerState: MarkerState = { mode: 'none' };
      cleanups.push(() => { labels.forEach((l) => l.el.remove()); marker.remove(); });

      // ---- apply focus: everything is a flight in one continuous world ----
      const applyFocus = (id: string | null) => {
        const p = id ? PLACE_BY_ID.get(id) ?? null : null;
        if (overlay) { scene.remove(overlay); overlay.geometry.dispose(); overlay = null; }
        markerState = { mode: 'none' };
        marker.style.display = 'none';
        labelWrap!.classList.toggle('is-focused', !!p && p.id !== 'jerusalem');
        for (const l of labels) l.el.classList.toggle('is-active', !!p && l.place.id === id);

        if (!p) {
          flyTo(() => ({ pos: DEFAULT_POS.clone(), tgt: DEFAULT_TGT.clone() }), 1.6);
          return;
        }

        if (p.id === 'jerusalem') {
          // dive to a street-level overview of the diorama
          flyTo(() => {
            const tgt = city.anchors.jerusalem.clone().add(city.group.position);
            return { pos: tgt.clone().add(new THREE.Vector3(0.4, 1.5, 2.1)), tgt };
          }, 2.1);
          return;
        }
        if (p.within === 'jerusalem') {
          const local = city.anchors[p.id] ?? city.anchors.jerusalem;
          markerState = { mode: 'city', local };
          const dist = CITY_DIST[p.id] ?? 0.5;
          flyTo(() => {
            const a = local.clone().add(city.group.position);
            return { pos: a.clone().add(new THREE.Vector3(dist * 0.1, dist * 0.7, dist * 0.85)), tgt: a };
          }, 2.1);
          return;
        }

        if (p.type === 'region' && p.ring) {
          buildOverlay(p.ring);
          const lons = p.ring.map((r) => r[0]);
          const lats = p.ring.map((r) => r[1]);
          flyTo(() => {
            const corners: THREE.Vector3[] = [
              worldAt(Math.min(...lons), Math.min(...lats)),
              worldAt(Math.min(...lons), Math.max(...lats)),
              worldAt(Math.max(...lons), Math.min(...lats)),
              worldAt(Math.max(...lons), Math.max(...lats)),
            ];
            let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
            for (const c of corners) { minX = Math.min(minX, c.x); maxX = Math.max(maxX, c.x); minZ = Math.min(minZ, c.z); maxZ = Math.max(maxZ, c.z); }
            const tgt = worldAt(p.lon, p.lat);
            const span = Math.max(maxX - minX, maxZ - minZ);
            const dist = span * 1.25 + 20;
            return { pos: new THREE.Vector3(tgt.x, tgt.y + dist * 0.72, tgt.z + dist * 0.78), tgt };
          }, 1.6);
        } else {
          markerState = { mode: 'land', lon: p.lon, lat: p.lat, ele: eleAt(p.lon, p.lat) };
          const dist = p.focusKm ?? 45;
          flyTo(() => {
            const w = worldAt(p.lon, p.lat);
            return { pos: new THREE.Vector3(w.x + dist * 0.05, w.y + dist * 0.7, w.z + dist * 0.78), tgt: w };
          }, 1.6);
        }
      };
      applyFocusRef.current = applyFocus;
      cleanups.push(() => { applyFocusRef.current = null; });

      // ---- resize ----
      const resize = () => {
        const w = el.clientWidth || 1;
        const h = el.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(el);
      cleanups.push(() => ro.disconnect());

      setStatus('');
      applyFocus(focusIdRef.current);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__hl = { camera, controls, city, mesh, get effExag() { return effExag; }, get builtExag() { return builtExag; }, cityCenter, get flight() { return flight; }, applyFocus, step: (now: number) => step(now) };

      // ---- render loop: continuous level-of-detail ----
      const v = new THREE.Vector3();
      const project = (p: THREE.Vector3, w: number, h: number) => {
        v.copy(p).project(camera);
        return { x: (v.x * 0.5 + 0.5) * w, y: (-v.y * 0.5 + 0.5) * h, vis: v.z <= 1 && v.x > -1.1 && v.x < 1.1 && v.y > -1.1 && v.y < 1.1 };
      };
      const tmp = new THREE.Vector3();
      let frame = 0;
      let wasNear = false;
      const step = (now: number) => {
        frame++;

        // camera flight
        if (flight) {
          const s = clamp((now - flight.t0) / flight.dur, 0, 1);
          const e = s * s * s * (s * (s * 6 - 15) + 10); // smootherstep
          const d = flight.dest();
          camera.position.lerpVectors(flight.fromPos, d.pos, e);
          controls.target.lerpVectors(flight.fromTgt, d.tgt, e);
          if (s >= 1) flight = null;
        }
        controls.update();

        // never let the camera (or the orbit target) sink beneath the ground
        const groundYAt = (x: number, z: number) => {
          const i = clamp(Math.round((x / W + 0.5) * (nx - 1)), 0, nx - 1);
          const j = clamp(Math.round((z / H + 0.5) * (ny - 1)), 0, ny - 1);
          return (dem[j * nx + i] / 1000) * effExag;
        };
        const camFloor = groundYAt(camera.position.x, camera.position.z) + 0.05;
        if (camera.position.y < camFloor) camera.position.y = camFloor;
        const tgtFloor = groundYAt(controls.target.x, controls.target.z) + 0.01;
        if (controls.target.y < tgtFloor) controls.target.y = tgtFloor;

        // proximity to Jerusalem drives relief easing + diorama fade
        const dCity = camera.position.distanceTo(cityCenter);
        const prox = 1 - smoothstep(CITY_NEAR, CITY_FAR, dCity);
        effExag = BASE_EXAG + (CITY_RELIEF - BASE_EXAG) * prox;
        if (Math.abs(effExag - builtExag) > 0.02 && frame % 2 === 0) {
          buildPositions(effExag);
          posAttr.needsUpdate = true;
          geo.computeVertexNormals();
        }
        material.normalScale.set(effExag / exagBake, effExag / exagBake);
        if (Math.abs(effExag - vegExag) > 0.02 && frame % 2 === 1) {
          veg.rebuild(effExag);
          vegExag = effExag;
        }
        // groves fade in as you come down, and yield to the diorama's own
        // trees only right at the city (the outer prox radius spans 34 km —
        // Jericho and Bethlehem must keep their vegetation)
        const viewDist = camera.position.distanceTo(controls.target);
        veg.setFade((1 - smoothstep(45, 75, viewDist)) * (1 - smoothstep(0.72, 0.92, prox)));
        city.group.position.y = cityGroupY();
        updateCityCenter();
        const cityOn = prox > 0.02;
        if (city.group.visible !== cityOn) city.group.visible = cityOn;
        if (cityOn) city.setOpacity(Math.min(1, prox * 1.6));
        if (overlay) overlay.visible = prox < 0.6;

        // panel state (slider vs schematic note)
        const near = prox > 0.5;
        if (near !== wasNear) { wasNear = near; if (!disposed) setNearCity(near); }

        renderer.render(scene, camera);

        // labels — project, then place greedily in priority order (focused
        // first, then nearest). Each label tries its own spot, sliding
        // vertically past already-placed labels; if it would need to move
        // more than about a line height, its text hides instead (the site
        // dot stays visible), so crowded clusters thin out rather than
        // scattering text far from its anchor.
        const w = el.clientWidth, h = el.clientHeight;
        type Vis = { l: L; sx: number; sy: number; dist: number; active: boolean; x0: number; y0: number; x1: number; y1: number; dy: number; hide: boolean };
        const vis: Vis[] = [];
        for (const l of labels) {
          let show: boolean;
          if (l.space === 'city') {
            show = prox > 0.45;
            if (show && l.local) tmp.copy(l.local).add(city.group.position);
          } else {
            show = !(l.place.id === 'jerusalem' && prox > 0.55);
            if (show) tmp.copy(worldAt(l.lon!, l.lat!, l.ele));
          }
          if (!show) { l.el.style.display = 'none'; continue; }
          const s = project(tmp, w, h);
          if (!s.vis) { l.el.style.display = 'none'; continue; }
          // collidable rect = the text box, slightly padded (dots stay pinned)
          const x0 = (l.place.type === 'site' ? s.x + 6.5 : s.x - l.tw / 2) - 2;
          const y0 = s.y - l.th / 2 - 1.5;
          vis.push({
            l, sx: s.x, sy: s.y, dist: camera.position.distanceTo(tmp),
            active: l.el.classList.contains('is-active'),
            x0, y0, x1: x0 + l.tw + 4, y1: y0 + l.th + 3, dy: 0, hide: false,
          });
        }
        // stable priority order: quantise distance and tie-break on id so
        // tiny per-frame distance changes can't reshuffle (and flicker) it
        vis.sort((a, b) =>
          (b.active ? 1 : 0) - (a.active ? 1 : 0)
          || Math.round(a.dist) - Math.round(b.dist)
          || (a.l.place.id < b.l.place.id ? -1 : 1));
        const GAP = 3;
        const accepted: Vis[] = [];
        for (const A of vis) {
          let dy = 0, guard = 0, blocked = false;
          for (;;) {
            const ay0 = A.y0 + dy, ay1 = A.y1 + dy;
            let hit: Vis | null = null;
            for (const B of accepted) {
              if (A.x0 < B.x1 && A.x1 > B.x0 && ay0 < B.y1 + B.dy && ay1 > B.y0 + B.dy) { hit = B; break; }
            }
            if (!hit) break;
            if (++guard > 4) { blocked = true; break; }
            const down = hit.y1 + hit.dy - A.y0 + GAP;
            const up = hit.y0 + hit.dy - A.y1 - GAP;
            dy = Math.abs(down) <= Math.abs(up) ? down : up;
          }
          if (blocked || Math.abs(dy) > A.l.th + GAP + 2) {
            A.hide = true;
            A.dy = 0;
          } else {
            A.dy = dy;
            accepted.push(A);
          }
        }
        for (let i = 0; i < vis.length; i++) {
          const vb = vis[i];
          const l = vb.l;
          const isSite = l.place.type === 'site';
          // hidden non-site labels vanish entirely; hidden sites keep the dot
          l.el.style.display = vb.hide && !isSite ? 'none' : '';
          l.el.style.left = vb.sx.toFixed(1) + 'px';
          l.el.style.top = vb.sy.toFixed(1) + 'px';
          l.el.style.zIndex = String(300 - i); // higher priority stacks on top
          const dy = Math.round(vb.dy);
          if (isSite) {
            l.txt.style.visibility = vb.hide ? 'hidden' : '';
            l.txt.style.transform = dy ? `translateY(calc(-50% + ${dy}px))` : '';
          } else {
            l.el.style.transform = dy ? `translate(-50%, calc(-50% + ${dy}px))` : '';
          }
        }

        // marker
        if (markerState.mode === 'none') {
          marker.style.display = 'none';
        } else {
          if (markerState.mode === 'city') tmp.copy(markerState.local).add(city.group.position);
          else tmp.copy(worldAt(markerState.lon, markerState.lat, markerState.ele));
          const s = project(tmp, w, h);
          marker.style.display = s.vis ? '' : 'none';
          marker.style.left = s.x.toFixed(1) + 'px';
          marker.style.top = s.y.toFixed(1) + 'px';
        }
      };
      const tick = () => {
        step(performance.now());
        raf = requestAnimationFrame(tick);
      };
      tick();

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        renderer.domElement.removeEventListener('pointerdown', cancelFlight);
        controls.dispose();
        geo.dispose();
        material.dispose();
        overlayMat.dispose();
        if (overlay) overlay.geometry.dispose();
        texture.dispose();
        normalTex.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      });
    }

    init();
    return () => {
      disposed = true;
      cleanups.forEach((c) => c());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cityFocus = !!focusPlace && focusPlace.within === 'jerusalem';
  const jerusalemFocus = focusPlace?.id === 'jerusalem';

  return (
    <div className="hlmap">
      <div className="hlmap__stage" ref={mountRef} />
      <div className="hlmap__labels" ref={labelWrapRef} />
      {status ? <div className="hlmap__status">{status}</div> : null}

      {panelOpen ? (
      <div className="hlmap__panel">
        <button
          type="button"
          className="hlmap__pclose"
          aria-label={lang === 'sv' ? 'Stäng' : 'Close'}
          onClick={() => setPanelOpen(false)}
        >
          ✕
        </button>
        {focusPlace ? (
          <>
            <button
              type="button"
              className="hlmap__back"
              onClick={() => setFocusId(cityFocus ? 'jerusalem' : null)}
            >
              {cityFocus
                ? '‹ Jerusalem'
                : jerusalemFocus
                  ? lang === 'sv' ? '‹ Det heliga landet' : '‹ The Holy Land'
                  : lang === 'sv' ? '‹ Hela kartan' : '‹ Whole map'}
            </button>
            <div className="hlmap__title">{focusPlace.name[lang]}</div>
            {focusPlace.blurb ? <p className="hlmap__blurb">{focusPlace.blurb[lang]}</p> : null}
            {focusPlace.ch && onGoChapter ? (
              <button type="button" className="hlmap__read" onClick={() => onGoChapter(focusPlace.ch!)}>
                {lang === 'sv' ? 'Läs Johannes' : 'Read John'} {focusPlace.ch} ›
              </button>
            ) : null}
          </>
        ) : (
          <>
            <div className="hlmap__title">The Holy Land</div>
            <div className="hlmap__hint">
              {lang === 'sv'
                ? 'Dra för att panorera · två fingrar roterar · nyp för att zooma · klicka en plats'
                : 'Drag to pan · two-finger drag to rotate · pinch to zoom · click a place'}
            </div>
          </>
        )}
        {nearCity ? (
          <div className="hlmap__schema">
            {lang === 'sv'
              ? 'Schematisk rekonstruktion av det herodianska Jerusalem, ca 30 e.Kr.'
              : 'A schematic reconstruction of Herodian Jerusalem, c. 30 AD.'}
          </div>
        ) : null}
        <div className="hlmap__credit">Elevation: SRTM / Copernicus via AWS Terrain Tiles (public domain)</div>
      </div>
      ) : null}

      {onClose ? (
        <button type="button" className="hlmap__close" aria-label="Close map" onClick={onClose}>
          ✕
        </button>
      ) : null}
    </div>
  );
}
