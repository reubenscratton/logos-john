// Procedural diorama of Herodian Jerusalem, c. 30 AD — in the spirit of the
// Holyland Model: white limestone, red-tiled public buildings, schematic housing.
//
// Everything is generated in METERS in a local frame centred on the Temple
// Mount (x east, z south, y up), then the whole group is scaled to the map's
// kilometre units with a gentle 1.5× vertical relief.
//
// This is a *schematic reconstruction*: topography is analytic (gaussian hills
// and valley trenches fitted to real elevations), building placement is seeded
// pseudo-random within historically-shaped quarters. It aims for honest
// overall shape, not archaeological precision.

import * as THREE from 'three';

export interface JerusalemCity {
  group: THREE.Group;
  /** Group-space anchor points (post-scale, pre-position) keyed by place id. */
  anchors: Record<string, THREE.Vector3>;
  /** Group-space height of the Temple-Mount esplanade — the vertical glue point. */
  deckY: number;
  /** Diorama footprint in local metres (x east, z south, origin at the Temple Mount). */
  extent: { x0: number; x1: number; z0: number; z1: number };
  /** Fade the whole diorama (0 hidden … 1 opaque). */
  setOpacity: (t: number) => void;
  dispose: () => void;
}

// deterministic rng
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const g = (x: number, z: number, cx: number, cz: number, sx: number, sz: number, a: number) =>
  a * Math.exp(-(((x - cx) / sx) ** 2 + ((z - cz) / sz) ** 2));

/** Ground height in metres above the diorama datum (~600 m ASL). */
function groundH(x: number, z: number): number {
  let h = 0;
  h += g(x, z, -650, 150, 430, 620, 150);   // Western Hill (Upper City)
  h += g(x, z, -450, -550, 460, 430, 105);  // north-west shoulder
  h += g(x, z, 20, -150, 270, 430, 135);    // Temple-Mount ridge
  h += g(x, z, 120, 600, 170, 520, 85);     // City of David ridge (south)
  h += g(x, z, 980, 30, 340, 700, 205);     // Mount of Olives
  h += g(x, z, -520, -680, 55, 45, 20);     // Golgotha knoll
  // valleys
  h -= g(x, z, 470 + 0.06 * z, 100, 115, 1400, 70);   // Kidron
  h -= g(x, z, -200 + 0.04 * z, 350, 95, 1200, 32);   // Tyropoeon
  h -= g(x, z, -1030, 100, 140, 1200, 55);            // Hinnom (west)
  h -= g(x, z, 0, 1160, 1400, 160, 55);               // Hinnom (south)
  // keep the natural ridge from poking through the Temple-Mount deck
  if (x > -175 && x < 175 && z > -260 && z < 260) h = Math.min(h, 143);
  return Math.max(6, h);
}

// palette
const C = {
  stone: new THREE.Color('#ded7c4'),
  stoneDark: new THREE.Color('#c9c0a9'),
  temple: new THREE.Color('#f3efe2'),
  gold: new THREE.Color('#c9a227'),
  roof: new THREE.Color('#a8674f'),
  water: new THREE.Color('#7892a0'),
  olive: new THREE.Color('#5c6b48'),
  scrubLo: new THREE.Color('#9aa878'),
  scrubHi: new THREE.Color('#c4b48c'),
  rock: new THREE.Color('#b7a98c'),
};

export function buildJerusalem(): JerusalemCity {
  const group = new THREE.Group();
  const geos: THREE.BufferGeometry[] = [];
  const mats: THREE.Material[] = [];
  const track = <T extends THREE.BufferGeometry>(geo: T): T => (geos.push(geo), geo);
  const mat = (m: THREE.MeshStandardMaterial) => (mats.push(m), m);

  const M = {
    stone: mat(new THREE.MeshStandardMaterial({ color: C.stone, roughness: 0.95, flatShading: true })),
    temple: mat(new THREE.MeshStandardMaterial({ color: C.temple, roughness: 0.85, flatShading: true })),
    gold: mat(new THREE.MeshStandardMaterial({ color: C.gold, roughness: 0.45, metalness: 0.55 })),
    roof: mat(new THREE.MeshStandardMaterial({ color: C.roof, roughness: 0.9, flatShading: true })),
    water: mat(new THREE.MeshStandardMaterial({ color: C.water, roughness: 0.3 })),
    olive: mat(new THREE.MeshStandardMaterial({ color: C.olive, roughness: 0.95, flatShading: true })),
  };

  // ---------- ground ----------
  const EXT = { x0: -1250, x1: 1250, z0: -950, z1: 1350 };
  {
    const nx = 112, nz = 100;
    const geo = track(new THREE.PlaneGeometry(EXT.x1 - EXT.x0, EXT.z1 - EXT.z0, nx, nz));
    geo.rotateX(-Math.PI / 2);
    geo.translate((EXT.x0 + EXT.x1) / 2, 0, (EXT.z0 + EXT.z1) / 2);
    const pos = geo.getAttribute('position') as THREE.BufferAttribute;
    const colors = new Float32Array(pos.count * 3);
    const rng = mulberry32(7);
    const c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const h = groundH(x, z);
      pos.setY(i, h);
      const t = Math.min(1, Math.max(0, (h - 10) / 190));
      c.copy(C.scrubLo).lerp(C.scrubHi, t);
      if (h < 26) c.lerp(new THREE.Color('#8da076'), 0.4); // greener valley floors
      const n = (rng() - 0.5) * 0.06;
      colors[i * 3] = c.r + n; colors[i * 3 + 1] = c.g + n; colors[i * 3 + 2] = c.b + n;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const m = mat(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }));
    group.add(new THREE.Mesh(geo, m));
  }

  // helpers
  const unitBox = track(new THREE.BoxGeometry(1, 1, 1));
  unitBox.translate(0, 0.5, 0); // origin at base centre
  const box = (
    x: number, z: number, sx: number, sz: number, h: number,
    material: THREE.Material, yBase?: number, rotY = 0,
  ) => {
    const mesh = new THREE.Mesh(unitBox, material);
    mesh.position.set(x, yBase ?? groundH(x, z) - 1, z);
    mesh.scale.set(sx, h, sz);
    mesh.rotation.y = rotY;
    group.add(mesh);
    return mesh;
  };
  /** Gabled red roof as a 45°-rotated slab (stylized). */
  const gable = (x: number, z: number, y: number, len: number, wid: number, rotY = 0) => {
    const geo = track(new THREE.BoxGeometry(len, wid * 0.72, wid * 0.72));
    const mesh = new THREE.Mesh(geo, M.roof);
    mesh.position.set(x, y, z);
    mesh.rotation.set(Math.PI / 4, rotY, 0, 'YXZ');
    mesh.scale.y = 0.55;
    group.add(mesh);
  };

  // ---------- Temple Mount platform ----------
  const P = { x0: -160, x1: 160, z0: -245, z1: 245, top: 150 };
  // retaining walls (slightly darker), sunk deep into the hill
  {
    const m = mat(new THREE.MeshStandardMaterial({ color: C.stoneDark, roughness: 0.95, flatShading: true }));
    const wall = (x: number, z: number, sx: number, sz: number) => box(x, z, sx, sz, P.top + 70, m, P.top - (P.top + 70));
    wall((P.x0 + P.x1) / 2, P.z0, P.x1 - P.x0 + 14, 14); // north
    wall((P.x0 + P.x1) / 2, P.z1, P.x1 - P.x0 + 14, 14); // south
    wall(P.x0, 0, 14, P.z1 - P.z0); // west (the Western Wall)
    wall(P.x1, 0, 14, P.z1 - P.z0); // east
    // deck
    box(0, 0, P.x1 - P.x0, P.z1 - P.z0, 3, M.stone, P.top - 3);
  }
  // perimeter colonnades (N/E/W) as low white strips
  box(0, P.z0 + 12, P.x1 - P.x0 - 30, 12, 10, M.temple, P.top);
  box(P.x0 + 12, 8, 12, P.z1 - P.z0 - 60, 10, M.temple, P.top);
  box(P.x1 - 12, 8, 12, P.z1 - P.z0 - 60, 10, M.temple, P.top);
  // Royal Stoa along the south edge + red roof
  box(0, P.z1 - 26, 296, 34, 15, M.temple, P.top);
  gable(0, P.z1 - 26, P.top + 15 + 5, 296, 34);
  // inner sacred court (raised terrace + wall ring)
  const IC = { x: -15, z: -35, sx: 250, sz: 175 };
  box(IC.x, IC.z, IC.sx, IC.sz, 5, M.stone, P.top);
  box(IC.x, IC.z - IC.sz / 2 + 4, IC.sx, 8, 9, M.temple, P.top + 5);
  box(IC.x, IC.z + IC.sz / 2 - 4, IC.sx, 8, 9, M.temple, P.top + 5);
  box(IC.x - IC.sx / 2 + 4, IC.z, 8, IC.sz, 9, M.temple, P.top + 5);
  box(IC.x + IC.sx / 2 - 4, IC.z, 8, IC.sz, 9, M.temple, P.top + 5);
  // the Temple: stepped base, tall facade (east-facing), hall behind, gold trim
  const T = { x: -30, z: -35 };
  box(T.x, T.z, 105, 80, 6, M.temple, P.top + 5);
  box(T.x, T.z, 90, 66, 5, M.temple, P.top + 11);
  const FACADE_X = T.x + 32;
  box(FACADE_X, T.z, 14, 50, 50, M.temple, P.top + 16); // facade block
  box(T.x - 8, T.z, 66, 26, 40, M.temple, P.top + 16); // long hall (holy place)
  box(FACADE_X + 7.2, T.z, 1.6, 46, 3.5, M.gold, P.top + 16 + 46); // gold cornice
  box(FACADE_X + 7.4, T.z, 1.2, 10, 18, M.gold, P.top + 16); // gold doorway
  // altar, south-east of the facade
  box(T.x + 62, T.z + 28, 22, 22, 6, mat(new THREE.MeshStandardMaterial({ color: C.rock, roughness: 1, flatShading: true })), P.top + 5);

  // ---------- Antonia Fortress (NW corner, north of the platform) ----------
  const A = { x: -105, z: -285 };
  box(A.x, A.z, 105, 72, 20, M.stone, P.top - 6);
  for (const [dx, dz, h] of [[-46, -30, 34], [46, -30, 32], [-46, 30, 32], [46, 30, 38]] as const) {
    box(A.x + dx, A.z + dz, 20, 20, h, M.stone, P.top - 6);
  }

  // ---------- Herod's Palace + the three towers (western edge) ----------
  const H = { x: -860, z: 0 };
  const palY = groundH(H.x, H.z) + 2;
  box(H.x, H.z, 190, 310, 10, M.stone, palY - 10);
  // twin palace halls (flat-roofed, as in the Holyland Model) with low parapets
  box(H.x, H.z - 75, 150, 110, 17, M.temple, palY);
  box(H.x, H.z - 75, 156, 116, 2.5, M.stone, palY + 17);
  box(H.x, H.z + 75, 150, 110, 17, M.temple, palY);
  box(H.x, H.z + 75, 156, 116, 2.5, M.stone, palY + 17);
  // towers north of the palace: Hippicus, Phasael (tallest), Mariamne
  box(H.x - 62, H.z - 178, 20, 20, 34, M.stone, palY);
  box(H.x - 8, H.z - 180, 24, 24, 46, M.stone, palY);
  box(H.x + 46, H.z - 176, 17, 17, 28, M.stone, palY);

  // ---------- theatre (Upper City, stylized) ----------
  {
    const geo = track(new THREE.CylinderGeometry(58, 66, 14, 20, 1, false, 0, Math.PI));
    const mesh = new THREE.Mesh(geo, M.stone);
    const y = groundH(-560, 380);
    mesh.position.set(-560, y, 380);
    mesh.rotation.y = Math.PI;
    group.add(mesh);
  }

  // ---------- pools ----------
  const pool = (x: number, z: number, sx: number, sz: number) => {
    const y = groundH(x, z);
    box(x, z, sx + 10, sz + 10, 2.5, M.stone, y - 0.5); // rim
    box(x, z, sx, sz, 1.2, M.water, y + 1.2);
  };
  pool(38, -422, 52, 44); // Bethesda (twin)
  pool(94, -422, 48, 44);
  pool(90, 952, 62, 40);  // Siloam

  // ---------- city walls ----------
  const wallSegs: { x: number; z: number; len: number; rot: number }[] = [];
  const towerPts: { x: number; z: number }[] = [];
  const wallRun = (pts: [number, number][]) => {
    for (let i = 0; i < pts.length - 1; i++) {
      const [x0, z0] = pts[i], [x1, z1] = pts[i + 1];
      const dx = x1 - x0, dz = z1 - z0;
      const len = Math.hypot(dx, dz);
      const steps = Math.max(1, Math.round(len / 90));
      for (let s = 0; s < steps; s++) {
        const t0 = s / steps, t1 = (s + 1) / steps;
        const mx = x0 + dx * (t0 + t1) / 2, mz = z0 + dz * (t0 + t1) / 2;
        wallSegs.push({ x: mx, z: mz, len: (len / steps) + 3, rot: Math.atan2(-dz, dx) });
        if (s % 2 === 0) towerPts.push({ x: x0 + dx * t0, z: z0 + dz * t0 });
      }
      towerPts.push({ x: x1, z: z1 });
    }
  };
  // First Wall: north stretch (palace → Temple Mount), then the long southern circuit
  wallRun([[-955, -172], [-160, -172]]);
  wallRun([
    [-955, -172], [-1005, 120], [-940, 420], [-620, 560], [-300, 760],
    [-60, 960], [90, 1012], [232, 948], [242, 600], [228, 252],
  ]);
  // Second Wall: enclosing the northern market quarter (Golgotha lies outside it)
  wallRun([[-780, -186], [-724, -420], [-540, -592], [-300, -644], [-172, -540], [-166, -332]]);
  {
    const im = new THREE.InstancedMesh(unitBox, M.stone, wallSegs.length);
    const q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
    const mtx = new THREE.Matrix4();
    wallSegs.forEach((seg, i) => {
      p.set(seg.x, groundH(seg.x, seg.z) - 3, seg.z);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), seg.rot);
      s.set(seg.len, 15, 8);
      mtx.compose(p, q, s);
      im.setMatrixAt(i, mtx);
    });
    group.add(im);
    const tw = new THREE.InstancedMesh(unitBox, M.stone, towerPts.length);
    towerPts.forEach((t, i) => {
      p.set(t.x, groundH(t.x, t.z) - 3, t.z);
      q.identity();
      s.set(16, 22, 16);
      mtx.compose(p, q, s);
      tw.setMatrixAt(i, mtx);
    });
    group.add(tw);
  }

  // ---------- housing quarters (instanced) ----------
  interface Zone { x0: number; x1: number; z0: number; z1: number; n: number; s: [number, number]; h: [number, number]; rot: number }
  const zones: Zone[] = [
    { x0: -880, x1: -330, z0: -150, z1: 420, n: 240, s: [17, 32], h: [8, 14], rot: 0.25 },  // Upper City villas
    { x0: -300, x1: 30, z0: 260, z1: 900, n: 200, s: [11, 20], h: [6, 10], rot: -0.15 },    // Lower City (Tyropoeon)
    { x0: 40, x1: 225, z0: 280, z1: 920, n: 130, s: [10, 18], h: [6, 10], rot: 0.1 },       // City of David
    { x0: -740, x1: -210, z0: -560, z1: -215, n: 150, s: [13, 24], h: [7, 12], rot: 0.05 }, // Second-Wall quarter
    { x0: -140, x1: 250, z0: -560, z1: -340, n: 46, s: [12, 20], h: [6, 9], rot: 0 },       // Bezetha (sparse, outside)
  ];
  const excluded = (x: number, z: number) =>
    (x > P.x0 - 40 && x < P.x1 + 40 && z > A.z - 60 && z < P.z1 + 40) || // mount + antonia
    (x > H.x - 120 && x < H.x + 120 && z > H.z - 210 && z < H.z + 175) || // palace
    Math.hypot(x + 560, z - 380) < 90 ||  // theatre
    (x > -10 && x < 145 && z > -470 && z < -375) || // Bethesda
    (x > 40 && x < 145 && z > 905 && z < 1000);     // Siloam
  {
    const total = zones.reduce((a, zn) => a + zn.n, 0);
    const im = new THREE.InstancedMesh(unitBox, mat(new THREE.MeshStandardMaterial({ roughness: 0.95, flatShading: true })), total);
    const rng = mulberry32(42);
    const q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
    const mtx = new THREE.Matrix4();
    const col = new THREE.Color();
    let i = 0;
    for (const zn of zones) {
      for (let k = 0; k < zn.n; k++) {
        let x = 0, z = 0, ok = false;
        for (let tries = 0; tries < 8 && !ok; tries++) {
          x = zn.x0 + rng() * (zn.x1 - zn.x0);
          z = zn.z0 + rng() * (zn.z1 - zn.z0);
          ok = !excluded(x, z);
        }
        if (!ok) continue;
        const w = zn.s[0] + rng() * (zn.s[1] - zn.s[0]);
        const d = zn.s[0] + rng() * (zn.s[1] - zn.s[0]);
        const h = zn.h[0] + rng() * (zn.h[1] - zn.h[0]);
        p.set(x, groundH(x, z) - 1.5, z);
        q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), zn.rot + (rng() - 0.5) * 0.5);
        s.set(w, h + 1.5, d);
        mtx.compose(p, q, s);
        im.setMatrixAt(i, mtx);
        col.setHSL(0.105 + rng() * 0.02, 0.16 + rng() * 0.1, 0.74 + rng() * 0.1);
        im.setColorAt(i, col);
        i++;
      }
    }
    im.count = i;
    group.add(im);
  }

  // ---------- olive groves (Mount of Olives & Kidron slopes) ----------
  {
    const geo = track(new THREE.IcosahedronGeometry(4.6, 0));
    const im = new THREE.InstancedMesh(geo, M.olive, 170);
    const rng = mulberry32(99);
    const q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
    const mtx = new THREE.Matrix4();
    let i = 0;
    while (i < 170) {
      const x = 480 + rng() * 640;
      const z = -420 + rng() * 1050;
      if (groundH(x, z) < 24) continue;
      p.set(x, groundH(x, z) + 3.5, z);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rng() * Math.PI);
      const sc = 0.75 + rng() * 0.7;
      s.set(sc, sc * (0.8 + rng() * 0.4), sc);
      mtx.compose(p, q, s);
      im.setMatrixAt(i, mtx);
      i++;
    }
    group.add(im);
  }

  // ---------- scale to map units (km, ×1.5 relief) ----------
  const SX = 0.001, SY = 0.0015, SZ = 0.001;
  group.scale.set(SX, SY, SZ);

  const anchor = (x: number, z: number, y?: number) =>
    new THREE.Vector3(x * SX, (y ?? groundH(x, z)) * SY, z * SZ);
  const anchors: Record<string, THREE.Vector3> = {
    jerusalem: anchor(-250, 100, 165),
    temple: anchor(T.x, T.z, P.top + 70),
    'solomons-colonnade': anchor(P.x1 - 12, 0, P.top + 14),
    antonia: anchor(A.x, A.z, P.top + 34),
    bethesda: anchor(66, -422),
    siloam: anchor(90, 952),
    'herods-palace': anchor(H.x, H.z, palY + 26),
    gabbatha: anchor(H.x + 118, H.z - 40, palY + 4),
    golgotha: anchor(-520, -680),
    kidron: anchor(455, 180),
    'mount-of-olives': anchor(960, 30),
  };

  const setOpacity = (t: number) => {
    const tt = Math.max(0, Math.min(1, t));
    for (const m of mats) {
      m.transparent = tt < 1;
      m.opacity = tt;
    }
  };

  const dispose = () => {
    geos.forEach((g2) => g2.dispose());
    mats.forEach((m) => m.dispose());
  };

  // the group is drawn whole; per-object culling with unit-geometry bounds
  // would wrongly cull the instanced meshes
  group.traverse((o) => { o.frustumCulled = false; });

  return { group, anchors, deckY: P.top * SY, extent: EXT, setOpacity, dispose };
}
