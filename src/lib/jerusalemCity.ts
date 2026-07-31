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
import { JERUSALEM_HOUSES } from '../data/jerusalemHouses';

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

const ss = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/** Ground height in metres above the diorama datum (~600 m ASL).
 *  Jerusalem is not an isolated hill: it sits at the edge of the Judean
 *  plateau, which continues at city height to the north and west. The drama
 *  is in the valleys cut into it (Kidron, Hinnom, Tyropoeon), the desert
 *  drop east of Olivet, and the ridge descending south to Siloam. */
function groundH(x: number, z: number): number {
  let h = 88;                               // the plateau itself
  h += g(x, z, -650, 150, 430, 620, 55);    // Western Hill (Upper City)
  h += g(x, z, -450, -550, 460, 430, 30);   // north-west shoulder
  h += g(x, z, 20, -150, 270, 430, 42);     // Temple-Mount ridge
  h += g(x, z, 120, 600, 170, 520, 22);     // City of David ridge (south)
  h += g(x, z, 980, 30, 340, 700, 100);     // Mount of Olives
  h += g(x, z, -520, -680, 55, 45, 15);     // Golgotha knoll
  h *= 1 - 0.55 * ss(1020, 1250, x);        // fall-away to the desert, east of Olivet
  h *= 1 - 0.3 * ss(760, 1200, z);          // the spur's southward descent
  // valleys
  h -= g(x, z, 470 + 0.06 * z, 100, 115, 1400, 70);   // Kidron
  h -= g(x, z, -200 + 0.04 * z, 350, 95, 1200, 32);   // Tyropoeon
  h -= g(x, z, -1030, 100, 140, 1200, 55);            // Hinnom (west)
  h -= g(x, z, 0, 1160, 1400, 160, 55);               // Hinnom (south)
  // keep the natural ridge from poking through the Temple-Mount deck
  if (x > -175 && x < 175 && z > -260 && z < 260) h = Math.min(h, 143);
  // level terraced apron for the Pool of Siloam (the hillside would otherwise
  // bury the basin's uphill side)
  const pd = Math.max(Math.abs(x - 92) / 62, Math.abs(z - 950) / 52);
  if (pd < 1.5) h = Math.min(h, 58 + Math.max(0, pd - 1) * 50);
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
    rock: mat(new THREE.MeshStandardMaterial({ color: C.rock, roughness: 1, flatShading: true })),
    dark: mat(new THREE.MeshStandardMaterial({ color: '#3a352c', roughness: 1 })),
    bronze: mat(new THREE.MeshStandardMaterial({ color: '#8a6d3f', roughness: 0.55, metalness: 0.4 })),
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
  // perimeter colonnades (N/E/W): stylobate, real column rows, architrave
  {
    box(0, P.z0 + 12, P.x1 - P.x0 - 30, 12, 1.5, M.temple, P.top);
    box(P.x0 + 12, 8, 12, P.z1 - P.z0 - 60, 1.5, M.temple, P.top);
    box(P.x1 - 12, 8, 12, P.z1 - P.z0 - 60, 1.5, M.temple, P.top);
    box(0, P.z0 + 12, P.x1 - P.x0 - 30, 12, 2.2, M.temple, P.top + 11);
    box(P.x0 + 12, 8, 12, P.z1 - P.z0 - 60, 2.2, M.temple, P.top + 11);
    box(P.x1 - 12, 8, 12, P.z1 - P.z0 - 60, 2.2, M.temple, P.top + 11);
    const col = track(new THREE.CylinderGeometry(1.7, 1.9, 9.5, 7));
    col.translate(0, 4.75, 0);
    const pts: [number, number][] = [];
    for (let x = -138; x <= 138; x += 12) pts.push([x, P.z0 + 12]);
    for (let z = -200; z <= 216; z += 12) { pts.push([P.x0 + 12, z]); pts.push([P.x1 - 12, z]); }
    const im = new THREE.InstancedMesh(col, M.temple, pts.length);
    const mtx = new THREE.Matrix4();
    pts.forEach(([x, z], i) => { mtx.makeTranslation(x, P.top + 1.5, z); im.setMatrixAt(i, mtx); });
    group.add(im);
  }
  // Royal Stoa along the south edge + red roof
  box(0, P.z1 - 26, 296, 34, 15, M.temple, P.top);
  gable(0, P.z1 - 26, P.top + 15 + 5, 296, 34);
  // western viaduct (Wilson's Arch causeway) striding over the Tyropoeon
  {
    const deckTop = P.top - 2;
    box(-260, -20, 200, 14, 3, M.stone, deckTop - 3);
    box(-260, -26.5, 200, 1.5, 4.5, M.stone, deckTop);
    box(-260, -13.5, 200, 1.5, 4.5, M.stone, deckTop);
    const mDark = M.stone;
    for (const px2 of [-190, -225, -260, -295, -330]) {
      const gy = groundH(px2, -20) - 2;
      box(px2, -20, 11, 13, deckTop - 3 - gy, mDark, gy);
    }
  }
  // ---------- the sanctuary complex (after Josephus & Mishnah Middot) ----------
  // Two courts on an east-west axis: the inner court (Israel + Priests, with
  // the sanctuary and altar) on a higher terrace west, the Court of Women on a
  // lower terrace east, joined by the Nicanor Gate and its semicircular steps.
  const Tz = -35; // the sanctuary's east-west axis
  const IC = { x0: -140, x1: 110, z0: -122, z1: 52 };
  // terraces
  box(-75, Tz, 130, IC.z1 - IC.z0, 5, M.stone, P.top);      // inner court (higher)
  box(50, Tz, 120, IC.z1 - IC.z0, 3, M.stone, P.top);       // Court of Women
  // perimeter walls, stepping down with the terraces
  box(-75, IC.z0 + 3.5, 130, 7, 9, M.temple, P.top + 5);    // N (inner)
  box(50, IC.z0 + 3.5, 120, 7, 9, M.temple, P.top + 3);     // N (women)
  box(-75, IC.z1 - 3.5, 130, 7, 9, M.temple, P.top + 5);    // S (inner)
  box(50, IC.z1 - 3.5, 120, 7, 9, M.temple, P.top + 3);     // S (women)
  box(IC.x0 + 3.5, Tz, 7, IC.z1 - IC.z0, 9, M.temple, P.top + 5);  // W
  box(IC.x1 - 3.5, Tz, 7, IC.z1 - IC.z0, 9, M.temple, P.top + 3);  // E
  // gatehouses (Middot counts seven gates on the inner court), each with
  // gold-sheathed doors — every gate was gold-covered except Nicanor's bronze
  for (const gx of [-115, -75, -38]) {
    box(gx, IC.z0 + 3.5, 12, 12, 15, M.temple, P.top + 5);  // north gates
    box(gx, IC.z0 - 3.2, 6.5, 1.2, 9, M.gold, P.top + 5);
    box(gx, IC.z1 - 3.5, 12, 12, 15, M.temple, P.top + 5);  // south gates
    box(gx, IC.z1 + 3.2, 6.5, 1.2, 9, M.gold, P.top + 5);
  }
  box(50, IC.z0 + 3.5, 12, 12, 15, M.temple, P.top + 3);    // women's court N gate
  box(50, IC.z0 - 3.2, 6.5, 1.2, 9, M.gold, P.top + 3);
  box(50, IC.z1 - 3.5, 12, 12, 15, M.temple, P.top + 3);    // women's court S gate
  box(50, IC.z1 + 3.2, 6.5, 1.2, 9, M.gold, P.top + 3);
  // the Beautiful (Shushan) Gate, east
  box(IC.x1 - 3.5, Tz, 10, 18, 18, M.temple, P.top + 3);
  box(IC.x1 + 1.6, Tz, 1.2, 12, 2.5, M.gold, P.top + 16);
  box(IC.x1 + 1.8, Tz, 1, 9, 12, M.gold, P.top + 3);
  // corner towers on the enclosure (the fortress-like ring of the reference)
  for (const [tx, tz, ty] of [
    [IC.x0 + 5, IC.z0 + 5, 5], [IC.x0 + 5, IC.z1 - 5, 5],
    [IC.x1 - 5, IC.z0 + 5, 3], [IC.x1 - 5, IC.z1 - 5, 3],
    [-10, IC.z0 + 5, 3], [-10, IC.z1 - 5, 3],
  ] as const) {
    box(tx, tz, 13, 13, 17, M.temple, P.top + ty);
  }
  // crenellated parapets along the enclosure walls
  {
    const merlon = track(new THREE.BoxGeometry(2.1, 1.9, 1.7));
    merlon.translate(0, 0.95, 0);
    const pts: [number, number, number][] = [];
    for (let x = IC.x0 + 4; x <= IC.x1 - 4; x += 4.5) {
      const topY = x < -10 ? P.top + 14 : P.top + 12;
      pts.push([x, IC.z0 + 3.5, topY]);
      pts.push([x, IC.z1 - 3.5, topY]);
    }
    for (let z = IC.z0 + 8; z <= IC.z1 - 8; z += 4.5) {
      pts.push([IC.x0 + 3.5, z, P.top + 14]);
      pts.push([IC.x1 - 3.5, z, P.top + 12]);
    }
    const im = new THREE.InstancedMesh(merlon, M.temple, pts.length);
    const mtx = new THREE.Matrix4();
    pts.forEach(([x, z, y], i) => { mtx.makeTranslation(x, y, z); im.setMatrixAt(i, mtx); });
    group.add(im);
  }
  // chambers lining the inner court walls
  box(-80, IC.z0 + 14, 100, 10, 8, M.stone, P.top + 5);
  box(-80, IC.z1 - 14, 100, 10, 8, M.stone, P.top + 5);
  // Court of Women corner chambers (Nazirites, lepers, wood, oil)
  for (const [cx2, cz2] of [[0, IC.z0 + 14], [100, IC.z0 + 14], [0, IC.z1 - 14], [100, IC.z1 - 14]] as const) {
    box(cx2, cz2, 16, 16, 9, M.stone, P.top + 3);
  }
  // Nicanor Gate (Corinthian bronze) astride the terrace step
  box(-10, Tz, 12, 20, 20, M.temple, P.top + 3);
  box(-3.4, Tz, 1.4, 9, 12, M.bronze, P.top + 3);
  box(-10, Tz, 13.5, 22, 2, M.temple, P.top + 23); // parapet cap
  // the fifteen semicircular steps, fanning east into the Court of Women
  {
    for (const [r, h] of [[18, 0.7], [14, 1.4], [10, 2.0]] as const) {
      const geo = track(new THREE.CylinderGeometry(r, r, h, 14, 1, false, 0, Math.PI));
      const mesh = new THREE.Mesh(geo, M.stone);
      mesh.position.set(-4, P.top + 3 + h / 2, Tz);
      group.add(mesh);
    }
  }
  // the sanctuary house: 100-cubit facade, narrower hall behind ("like a lion,
  // narrow behind and broad in front"), on a stepped podium
  box(-82, Tz, 92, 64, 4, M.temple, P.top + 5);             // podium
  box(-33, Tz, 4, 34, 3, M.temple, P.top + 5);              // steps up (12 steps)
  box(-30, Tz, 4, 34, 1.5, M.temple, P.top + 5);
  box(-50, Tz, 12, 52, 52, M.temple, P.top + 9);            // facade (100 x 100 cubits)
  box(-88, Tz, 64, 36, 46, M.temple, P.top + 9);            // heikhal + Holy of Holies
  box(-44.6, Tz, 1.4, 48, 3.5, M.gold, P.top + 57.5);       // upper gold cornice
  box(-44.7, Tz, 1.2, 50, 2, M.gold, P.top + 47);           // lower gold tier
  // vertical pilaster striping on the facade (subtle fluting, per reference)
  for (const pz of [-21, -15, 15, 21] as const) {
    box(-44.2, Tz + pz, 0.9, 1.6, 38, M.stone, P.top + 9);
  }
  box(-44.5, Tz, 1.5, 9, 16, M.dark, P.top + 9);            // open doorway (unveiled)
  box(-43.9, Tz - 6.2, 1, 1.8, 17, M.gold, P.top + 9);      // gold pilasters
  box(-43.9, Tz + 6.2, 1, 1.8, 17, M.gold, P.top + 9);
  box(-43.7, Tz, 1, 14, 2.4, M.gold, P.top + 26);           // the golden vine
  // arched portal crown over the great doorway
  {
    const arch = new THREE.Mesh(track(new THREE.CylinderGeometry(7, 7, 1.8, 14, 1, false, 0, Math.PI)), M.gold);
    arch.position.set(-43.8, P.top + 25, Tz);
    arch.rotation.z = Math.PI / 2;
    group.add(arch);
  }
  // gold roof spikes ("scarecrows", Josephus) ringing every parapet
  {
    const cone = track(new THREE.ConeGeometry(1.1, 3.2, 5));
    cone.translate(0, 1.6, 0);
    const spikes: [number, number, number][] = [];
    const ring = (x0: number, x1: number, z0: number, z1: number, y: number, step: number) => {
      for (let x = x0; x <= x1; x += step) { spikes.push([x, z0, y]); spikes.push([x, z1, y]); }
      for (let z = z0 + step; z <= z1 - step; z += step) { spikes.push([x0, z, y]); spikes.push([x1, z, y]); }
    };
    ring(-55, -45, Tz - 25, Tz + 25, P.top + 61, 5);        // facade parapet
    ring(-118, -58, Tz - 17, Tz + 17, P.top + 55, 6);       // sanctuary hall parapet
    const im = new THREE.InstancedMesh(cone, M.gold, spikes.length);
    const mtx = new THREE.Matrix4();
    spikes.forEach(([sx, sz, sy], i) => {
      mtx.makeTranslation(sx, sy, sz);
      im.setMatrixAt(i, mtx);
    });
    group.add(im);
  }
  // the altar of burnt offering (stepped, horned) with its southern ascent ramp
  const AL = { x: -20, z: -10 };
  box(AL.x, AL.z, 24, 24, 3.5, M.rock, P.top + 5);
  box(AL.x, AL.z, 19, 19, 3, M.rock, P.top + 8.5);
  box(AL.x, AL.z, 15, 15, 3, M.rock, P.top + 11.5);
  for (const [hx, hz] of [[AL.x - 6.5, AL.z - 6.5], [AL.x + 6.5, AL.z - 6.5], [AL.x - 6.5, AL.z + 6.5], [AL.x + 6.5, AL.z + 6.5]] as const) {
    box(hx, hz, 2.2, 2.2, 2, M.rock, P.top + 14.5); // horns
  }
  {
    const ramp = new THREE.Mesh(track(new THREE.BoxGeometry(11, 2, 27)), M.rock);
    ramp.position.set(AL.x, P.top + 9.6, AL.z + 24);
    ramp.rotation.x = 0.36; // rises northward to the altar top
    group.add(ramp);
  }
  // the laver, between porch and altar, displaced south
  {
    const base = new THREE.Mesh(track(new THREE.CylinderGeometry(4, 4.6, 3, 10)), M.stone);
    base.position.set(-38, P.top + 6.5, Tz + 23);
    group.add(base);
    const wtr = new THREE.Mesh(track(new THREE.CylinderGeometry(3.2, 3.2, 0.6, 10)), M.water);
    wtr.position.set(-38, P.top + 8.3, Tz + 23);
    group.add(wtr);
  }

  // ---------- monumental stairs in and out of the Mount ----------
  // A long flight reads as a ramp slab with fine tread striations — real
  // 30 cm risers are sub-pixel at diorama scale, and chunky steps read as
  // giants' terraces.
  const stoneDarkM = mat(new THREE.MeshStandardMaterial({ color: C.stoneDark, roughness: 0.95, flatShading: true }));
  const treadPts: { x: number; y: number; z: number; rx: number; rz: number; ns: boolean; w: number }[] = [];
  const stairs = (
    x: number, z: number, w: number, yTop: number, yBot: number,
    run: number, dir: 'N' | 'S' | 'E' | 'W', material: THREE.Material = M.stone,
  ) => {
    const drop = yTop - yBot;
    const len = Math.hypot(run, drop);
    const ang = Math.atan2(drop, run);
    const ns = dir === 'N' || dir === 'S';
    const slab = new THREE.Mesh(track(new THREE.BoxGeometry(ns ? w : len, 1.6, ns ? len : w)), material);
    const cx = dir === 'E' ? x + run / 2 : dir === 'W' ? x - run / 2 : x;
    const cz = dir === 'S' ? z + run / 2 : dir === 'N' ? z - run / 2 : z;
    slab.position.set(cx, (yTop + yBot) / 2 - 0.4, cz);
    if (dir === 'S') slab.rotation.x = ang;
    else if (dir === 'N') slab.rotation.x = -ang;
    else if (dir === 'E') slab.rotation.z = -ang;
    else slab.rotation.z = ang;
    group.add(slab);
    const n = Math.max(3, Math.round(run / 3.4));
    for (let s = 0; s < n; s++) {
      const t = (s + 0.5) / n;
      treadPts.push({
        x: dir === 'E' ? x + run * t : dir === 'W' ? x - run * t : x,
        y: yTop - drop * t + 0.55,
        z: dir === 'S' ? z + run * t : dir === 'N' ? z - run * t : z,
        rx: dir === 'S' ? ang : dir === 'N' ? -ang : 0,
        rz: dir === 'E' ? -ang : dir === 'W' ? ang : 0,
        ns, w,
      });
    }
  };
  /** Called once, after every flight has been laid out. */
  const buildTreads = () => {
    if (!treadPts.length) return;
    const im = new THREE.InstancedMesh(unitBox, stoneDarkM, treadPts.length);
    const q = new THREE.Quaternion(), p = new THREE.Vector3(), s2 = new THREE.Vector3();
    const e = new THREE.Euler(), mtx = new THREE.Matrix4();
    treadPts.forEach((tp, i) => {
      e.set(tp.rx, 0, tp.rz);
      q.setFromEuler(e);
      p.set(tp.x, tp.y, tp.z);
      s2.set(tp.ns ? tp.w - 2 : 1.7, 0.55, tp.ns ? 1.7 : tp.w - 2);
      mtx.compose(p, q, s2);
      im.setMatrixAt(i, mtx);
    });
    group.add(im);
  };
  {
    // Tadi Gate, north wall ("served no purpose", says Middot — but it was there)
    box(40, P.z0, 16, 22, 18, M.temple, P.top);
    box(40, P.z0 - 9.5, 8, 2, 11, M.dark, P.top);
    stairs(40, P.z0 - 8, 14, P.top, groundH(40, -272) - 1, 26, 'N');
    // Shushan Gate, east wall — the causeway route to the Mount of Olives
    box(P.x1, Tz, 22, 20, 18, M.temple, P.top);
    box(P.x1 + 9.5, Tz, 2, 9, 12, M.dark, P.top);
    stairs(P.x1 + 8, Tz, 15, P.top, groundH(P.x1 + 70, Tz) - 1, 62, 'E');
    // Barclay & Coponius gates: street-level doorways in the west wall
    box(-166.5, 62, 3, 10, 10, M.dark, groundH(-170, 62) - 1);
    box(-166.5, -64, 3, 10, 10, M.dark, groundH(-170, -64) - 1);
  }
  {
    // the Southern Steps up to the Double and Triple (Hulda) Gates — the
    // pilgrim entrance excavated south of the platform
    const gy = groundH(-45, 300) - 1;
    box(-45, 254, 95, 16, 20, M.stone, gy);                // landing before the gates
    stairs(-45, 262, 95, gy + 20, gy, 52, 'S');
    box(-70, 250.5, 14, 6, 13, M.dark, gy + 20);           // Double Gate
    box(-16, 250.5, 18, 6, 13, M.dark, gy + 20);           // Triple Gate
    // Robinson's Arch: stair over an arch at the SW corner, turning south
    const gy2 = groundH(-185, 285) - 1;
    box(-185, 212, 54, 13, 3, M.stone, P.top - 3);         // deck springing from the wall
    const pgy = groundH(-197, 212) - 2;
    box(-197, 212, 12, 13, P.top - 3 - pgy, M.stone, pgy); // pier
    stairs(-191, 219, 13, P.top - 3, gy2, 62, 'S');
  }

  // ---------- Antonia Fortress (NW corner, north of the platform) ----------
  // Josephus: a fortress on a rock scarp, palace-like within, four towers —
  // three of fifty cubits, the south-east tower of seventy, overlooking the
  // whole temple. Built as a hollow ring of halls around a court.
  const A = { x: -105, z: -285 };
  {
    const scarp = mat(new THREE.MeshStandardMaterial({ color: C.rock, roughness: 1, flatShading: true }));
    box(A.x, A.z, 120, 86, 12, scarp, P.top - 10);          // the rock scarp
    // ring of halls around an inner court
    box(A.x, A.z - 28.5, 104, 15, 24, M.stone, P.top + 2);  // north range
    box(A.x, A.z + 28.5, 104, 15, 24, M.stone, P.top + 2);  // south range
    box(A.x - 44.5, A.z, 15, 42, 24, M.stone, P.top + 2);   // west range
    box(A.x + 44.5, A.z, 15, 42, 24, M.stone, P.top + 2);   // east range
    box(A.x, A.z, 74, 42, 3, M.stone, P.top + 2);           // court floor
    // gate toward the temple courts, south face
    box(A.x, A.z + 36.8, 10, 3, 13, M.dark, P.top + 2);
    // four corner towers, the SE one dominant
    const towers: [number, number, number, number][] = [
      [A.x - 44, A.z - 27, 22, 38], [A.x + 44, A.z - 27, 22, 36],
      [A.x - 44, A.z + 27, 22, 36], [A.x + 44, A.z + 27, 26, 54],
    ];
    for (const [tx, tz, tw, th] of towers) {
      box(tx, tz, tw, tw, th, M.stone, P.top - 4);
      // battlement merlons around each tower top
      const half = tw / 2 - 1.2;
      for (const [mx, mz] of [
        [-half, -half], [0, -half], [half, -half], [-half, 0], [half, 0],
        [-half, half], [0, half], [half, half],
      ] as const) {
        box(tx + mx, tz + mz, 2.4, 2.4, 2.2, M.stone, P.top - 4 + th);
      }
    }
  }
  // steps from the fortress down onto the esplanade (the cohort's route)
  stairs(-105, -249, 22, P.top + 12, P.top, 15, 'S');
  buildTreads();

  // ---------- civic centre at the western bridgehead ----------
  // The Xystus assembly plaza with its colonnades, the Council House, the
  // Archives, and the old Hasmonean Palace on the slope above.
  {
    const gx = groundH(-420, -60);
    box(-420, -60, 110, 88, 2.5, M.stone, gx - 1);              // the Xystus
    box(-420, -100, 104, 8, 9, M.temple, gx + 1.5);
    box(-420, -20, 104, 8, 9, M.temple, gx + 1.5);
    box(-470, -60, 8, 72, 9, M.temple, gx + 1.5);
    box(-500, -135, 55, 42, 14, M.temple, groundH(-500, -135)); // Council House
    gable(-500, -135, groundH(-500, -135) + 18, 55, 42);
    box(-400, -140, 40, 32, 12, M.temple, groundH(-400, -140)); // Archives
    box(-560, -70, 68, 54, 20, M.temple, groundH(-560, -70));   // Hasmonean Palace
    box(-560, -70, 74, 60, 2.5, M.stone, groundH(-560, -70) + 20);
  }

  // ---------- the named city gates ----------
  const cityGate = (x: number, z: number, alongX: boolean) => {
    const gy = groundH(x, z) - 2;
    box(x, z, alongX ? 18 : 13, alongX ? 13 : 18, 18, M.stone, gy);
    box(x + (alongX ? 0 : 5.4), z + (alongX ? 5.4 : 0), alongX ? 7 : 2.6, alongX ? 2.6 : 7, 10, M.dark, gy);
    box(x - (alongX ? 0 : 5.4), z - (alongX ? 5.4 : 0), alongX ? 7 : 2.6, alongX ? 2.6 : 7, 10, M.dark, gy);
  };
  cityGate(-770, -185, true);   // Gennath (Garden) Gate — the road out to Golgotha
  cityGate(-535, -560, true);   // North Gate, in the Second Wall
  cityGate(-888, 368, false);   // Gate of the Essenes
  cityGate(-62, 893, true);     // Dung Gate
  cityGate(185, 955, false);    // Fountain Gate, by Siloam

  // ---------- Herod's Palace + the three towers (western edge) ----------
  // Josephus: two great wings (Caesareum and Agrippeum) around courts, amid
  // groves and water channels, guarded on the north by the three towers.
  const H = { x: -860, z: 0 };
  const palY = groundH(H.x, H.z) + 2;
  box(H.x, H.z, 190, 310, 10, M.stone, palY - 10);
  {
    // twin wings as hollow courtyard rings (per the reference model)
    const wing = (cz: number) => {
      const cw = 150, cd = 110, t = 30;
      box(H.x, cz - (cd - t) / 2, cw, t, 17, M.temple, palY);
      box(H.x, cz + (cd - t) / 2, cw, t, 17, M.temple, palY);
      box(H.x - (cw - t) / 2, cz, t, cd - 2 * t, 17, M.temple, palY);
      box(H.x + (cw - t) / 2, cz, t, cd - 2 * t, 17, M.temple, palY);
      // parapets on the outer edges
      box(H.x, cz - cd / 2 + 1.5, cw + 4, 3, 2.5, M.stone, palY + 17);
      box(H.x, cz + cd / 2 - 1.5, cw + 4, 3, 2.5, M.stone, palY + 17);
      box(H.x - cw / 2 + 1.5, cz, 3, cd, 2.5, M.stone, palY + 17);
      box(H.x + cw / 2 - 1.5, cz, 3, cd, 2.5, M.stone, palY + 17);
      box(H.x, cz, cw - 2 * t, cd - 2 * t, 1.2, M.stone, palY); // court paving
    };
    wing(H.z - 75);
    wing(H.z + 75);
    // the garden court between the wings: canal and grove
    box(H.x, H.z, 150, 38, 1, mat(new THREE.MeshStandardMaterial({ color: '#7f905e', roughness: 1 })), palY);
    box(H.x, H.z, 110, 5, 0.8, M.water, palY + 1);
    const grove = track(new THREE.IcosahedronGeometry(3.6, 0));
    for (let g2 = 0; g2 < 10; g2++) {
      const gm = new THREE.Mesh(grove, M.olive);
      gm.position.set(H.x - 66 + g2 * 14.6, palY + 3.4, H.z + (g2 % 2 ? 11 : -11));
      gm.scale.setScalar(0.8 + (g2 % 3) * 0.2);
      group.add(gm);
    }
    // round towers on the west enclosure wall
    const rt = track(new THREE.CylinderGeometry(7, 7.6, 20, 8));
    rt.translate(0, 10, 0);
    for (const tz of [-140, -47, 47, 140]) {
      const tm = new THREE.Mesh(rt, M.stone);
      tm.position.set(H.x - 92, palY - 2, H.z + tz);
      group.add(tm);
    }
  }
  {
    // Hippicus, Phasael (tallest, stepped), Mariamne — square bases, shafts
    const shaft = track(new THREE.CylinderGeometry(1, 1, 1, 9));
    shaft.translate(0, 0.5, 0);
    const tower = (x: number, z: number, base: number, bh: number, r: number, sh: number) => {
      box(x, z, base, base, bh, M.stone, palY);
      const m2 = new THREE.Mesh(shaft, M.stone);
      m2.position.set(x, palY + bh, z);
      m2.scale.set(r, sh, r);
      group.add(m2);
    };
    tower(-922, -178, 22, 20, 8.6, 27);                 // Hippicus (47 m, the tallest)
    box(-868, -180, 26, 26, 22, M.stone, palY);         // Phasael (42 m): stepped tiers
    box(-868, -180, 18, 18, 12, M.stone, palY + 22);
    box(-868, -180, 11, 11, 8, M.stone, palY + 34);
    tower(-814, -176, 18, 14, 6.8, 14);                 // Mariamne (29 m)
  }

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
  pool(108, -272, 50, 20); // Pool of Israel, against the platform's north wall
  // Pool of Siloam: the excavated stepped basin — broad tiers descending
  // into the water from the north side (John 9's washing place)
  {
    const x = 90, z = 952;
    const gy = groundH(x, z);
    box(x, z, 96, 68, 4, M.stone, gy - 1);              // surrounding plaza
    box(x - 38, z, 6, 62, 3, M.stone, gy + 3);          // west wall
    box(x + 38, z, 6, 62, 3, M.stone, gy + 3);          // east wall
    box(x, z + 30, 76, 6, 3, M.stone, gy + 3);          // south wall
    box(x, z - 21, 68, 6, 2.4, M.stone, gy + 3);        // stepped tiers down…
    box(x, z - 15, 68, 6, 1.6, M.stone, gy + 3);
    box(x, z - 9, 68, 6, 0.8, M.stone, gy + 3);
    box(x, z + 6, 68, 42, 0.9, M.water, gy + 3.3);      // …into the water
    // the old (lower) reservoir and its dam, below the wall in the valley mouth
    const gy2 = groundH(70, 1065);
    box(70, 1032, 116, 10, 8, M.stone, gy2 - 2);        // the dam
    box(70, 1070, 104, 58, 2.5, M.stone, gy2 - 1);
    box(70, 1070, 94, 48, 1, M.water, gy2 + 1.6);
  }
  // the Palatial Mansion in the Upper City — the high priest's house
  // (Annas and Caiaphas; the courtyard of Peter's denial, John 18)
  {
    const my = groundH(-430, 240);
    box(-430, 240, 56, 46, 12, M.temple, my);
    box(-430, 240, 60, 50, 2, M.stone, my + 12);
    box(-441, 231, 30, 26, 9, M.temple, my + 14);
    box(-441, 231, 33, 29, 1.8, M.stone, my + 23);
  }

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
  // Wall circuits refitted to the mined town-plan (the reference model's own
  // outline), except at the southern tip, extended to take in Siloam as
  // Josephus describes ("above the fountain of Siloam", War 5.145).
  // First Wall: north stretch (palace → Temple Mount), then the southern circuit
  wallRun([[-955, -185], [-160, -185]]);
  const FIRST_WALL: [number, number][] = [
    [-955, -185], [-1010, -40], [-985, 140], [-930, 300], [-850, 430],
    [-745, 545], [-610, 635], [-450, 700], [-280, 745], [-120, 850],
    [-10, 940], [40, 1010], [140, 1020], [215, 900], [190, 620], [175, 380], [162, 250],
  ];
  wallRun(FIRST_WALL);
  // Second Wall: the northern market quarter (Golgotha stays outside it)
  const SECOND_WALL: [number, number][] = [
    [-780, -195], [-745, -420], [-720, -535], [-350, -560],
    [-262, -450], [-255, -260], [-180, -248],
  ];
  wallRun(SECOND_WALL);
  // The walled city as polygons — housing is confined to these
  const inPoly = (x: number, z: number, ring: [number, number][]) => {
    let inside = false;
    for (let i2 = 0, j2 = ring.length - 1; i2 < ring.length; j2 = i2++) {
      const xi = ring[i2][0], zi = ring[i2][1], xj = ring[j2][0], zj = ring[j2][1];
      if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
    }
    return inside;
  };
  const CITY_POLY: [number, number][] = [...FIRST_WALL, [-160, 245], [-160, -185]];
  const QUARTER_POLY: [number, number][] = [...SECOND_WALL, [-180, -185], [-780, -185]];
  const insideCity = (x: number, z: number) => inPoly(x, z, CITY_POLY) || inPoly(x, z, QUARTER_POLY);
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

  // ---------- housing quarters ----------
  // Primary placement comes from the mined reference town-plan; a small
  // procedural zone fills the City of David tip its city doesn't reach.
  interface Zone { x0: number; x1: number; z0: number; z1: number; n: number; s: [number, number]; h: [number, number]; rot: number }
  const zones: Zone[] = [
    { x0: -60, x1: 225, z0: 740, z1: 930, n: 70, s: [10, 18], h: [6, 10], rot: 0.1 },  // lower City of David
  ];
  const excluded = (x: number, z: number) =>
    (x > P.x0 - 40 && x < P.x1 + 40 && z > A.z - 60 && z < P.z1 + 40) || // mount + antonia
    (x > H.x - 120 && x < H.x + 120 && z > H.z - 210 && z < H.z + 175) || // palace
    Math.hypot(x + 560, z - 380) < 90 ||  // theatre
    (x > -10 && x < 145 && z > -470 && z < -375) || // Bethesda
    (x > 40 && x < 145 && z > 905 && z < 1000) ||   // Siloam
    (x > -368 && x < -152 && z > -34 && z < -6) ||  // western viaduct
    (x > -100 && x < 10 && z > 240 && z < 330) ||   // Southern Steps
    (x > -215 && x < -155 && z > 195 && z < 290) || // Robinson's Arch stair
    (x > -605 && x < -355 && z > -170 && z < -5) || // Xystus civic centre
    (x > -475 && x < -385 && z > 200 && z < 280);   // the high priest's house
  {
    // compound houses, after the reference model's clusters: many carry a
    // second storey or a lower annex (L-shaped), some a rooftop cistern/oven
    const total = JERUSALEM_HOUSES.length / 6 + zones.reduce((a, zn) => a + zn.n, 0);
    const houseMat = mat(new THREE.MeshStandardMaterial({ roughness: 0.95, flatShading: true }));
    const im = new THREE.InstancedMesh(unitBox, houseMat, total);
    const imUp = new THREE.InstancedMesh(unitBox, houseMat, total);
    const imAnnex = new THREE.InstancedMesh(unitBox, houseMat, total);
    const cis = track(new THREE.CylinderGeometry(2.4, 2.6, 3.2, 7));
    cis.translate(0, 1.6, 0);
    const imCis = new THREE.InstancedMesh(cis, M.stone, total);
    const rng = mulberry32(42);
    const q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
    const mtx = new THREE.Matrix4();
    const col = new THREE.Color();
    const Y = new THREE.Vector3(0, 1, 0);
    let i = 0, iu = 0, ia = 0, ic = 0;
    const placeHouse = (x: number, z: number, w: number, d: number, h: number, rot: number) => {
      {
        const cosr = Math.cos(rot), sinr = Math.sin(rot);
        const gy = groundH(x, z) - 1.5;
        p.set(x, gy, z);
        q.setFromAxisAngle(Y, rot);
        s.set(w, h + 1.5, d);
        mtx.compose(p, q, s);
        im.setMatrixAt(i, mtx);
        col.setHSL(0.105 + rng() * 0.02, 0.16 + rng() * 0.1, 0.74 + rng() * 0.1);
        im.setColorAt(i, col);
        // second storey, set back to a corner of the roof
        if (rng() < 0.34) {
          const w2 = w * (0.5 + rng() * 0.15), d2 = d * (0.5 + rng() * 0.15);
          const ox = ((w - w2) / 2) * 0.85 * (rng() < 0.5 ? 1 : -1);
          const oz = ((d - d2) / 2) * 0.85 * (rng() < 0.5 ? 1 : -1);
          p.set(x + ox * cosr + oz * sinr, gy + h + 1.5, z - ox * sinr + oz * cosr);
          s.set(w2, h * 0.6, d2);
          mtx.compose(p, q, s);
          imUp.setMatrixAt(iu, mtx);
          imUp.setColorAt(iu, col);
          iu++;
        }
        // lower annex making the compound L-shaped
        if (rng() < 0.28) {
          const aw = w * (0.45 + rng() * 0.2), ad = d * (0.55 + rng() * 0.2);
          const ox = ((w + aw) / 2) * 0.95 * (rng() < 0.5 ? 1 : -1);
          const oz = (rng() - 0.5) * d * 0.4;
          const ax2 = x + ox * cosr + oz * sinr, az2 = z - ox * sinr + oz * cosr;
          if (!excluded(ax2, az2)) {
            p.set(ax2, groundH(ax2, az2) - 1.5, az2);
            s.set(aw, h * 0.55 + 1.5, ad);
            mtx.compose(p, q, s);
            imAnnex.setMatrixAt(ia, mtx);
            imAnnex.setColorAt(ia, col);
            ia++;
          }
        }
        // courtyard cistern / rooftop oven
        if (rng() < 0.15) {
          const ox = (w / 2 + 3) * (rng() < 0.5 ? 1 : -1);
          const oz = (rng() - 0.5) * d;
          const cx2 = x + ox * cosr + oz * sinr, cz2 = z - ox * sinr + oz * cosr;
          if (!excluded(cx2, cz2)) {
            p.set(cx2, groundH(cx2, cz2) - 0.5, cz2);
            q.identity();
            const sc = 0.8 + rng() * 0.5;
            s.set(sc, sc, sc);
            mtx.compose(p, q, s);
            imCis.setMatrixAt(ic, mtx);
            ic++;
            q.setFromAxisAngle(Y, rot);
          }
        }
        i++;
      }
    };
    // the mined town-plan, confined to the walled city
    for (let k = 0; k < JERUSALEM_HOUSES.length; k += 6) {
      const x = JERUSALEM_HOUSES[k], z = JERUSALEM_HOUSES[k + 1];
      if (excluded(x, z) || !insideCity(x, z)) continue;
      placeHouse(x, z, JERUSALEM_HOUSES[k + 2], JERUSALEM_HOUSES[k + 3], JERUSALEM_HOUSES[k + 4], JERUSALEM_HOUSES[k + 5]);
    }
    // procedural fill zones
    for (const zn of zones) {
      for (let k = 0; k < zn.n; k++) {
        let x = 0, z = 0, ok = false;
        for (let tries = 0; tries < 8 && !ok; tries++) {
          x = zn.x0 + rng() * (zn.x1 - zn.x0);
          z = zn.z0 + rng() * (zn.z1 - zn.z0);
          ok = !excluded(x, z) && insideCity(x, z);
        }
        if (!ok) continue;
        placeHouse(
          x, z,
          zn.s[0] + rng() * (zn.s[1] - zn.s[0]),
          zn.s[0] + rng() * (zn.s[1] - zn.s[0]),
          zn.h[0] + rng() * (zn.h[1] - zn.h[0]),
          zn.rot + (rng() - 0.5) * 0.5,
        );
      }
    }
    im.count = i; imUp.count = iu; imAnnex.count = ia; imCis.count = ic;
    group.add(im, imUp, imAnnex, imCis);
  }

  // ---------- olive groves (Mount of Olives & Kidron slopes) ----------
  // Gethsemane: the walled olive garden across the Kidron (John 18:1)
  box(640, -70, 62, 52, 2.5, M.stone, groundH(640, -70) - 1);
  {
    const geo = track(new THREE.IcosahedronGeometry(4.6, 0));
    const im = new THREE.InstancedMesh(geo, M.olive, 188);
    const rng = mulberry32(99);
    const q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
    const mtx = new THREE.Matrix4();
    let i = 0;
    const put = (x: number, z: number) => {
      p.set(x, groundH(x, z) + 3.5, z);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rng() * Math.PI);
      const sc = 0.75 + rng() * 0.7;
      s.set(sc, sc * (0.8 + rng() * 0.4), sc);
      mtx.compose(p, q, s);
      im.setMatrixAt(i, mtx);
      i++;
    };
    while (i < 18) put(616 + rng() * 48, -92 + rng() * 44);   // dense in Gethsemane
    while (i < 188) {
      const x = 480 + rng() * 640;
      const z = -420 + rng() * 1050;
      if (groundH(x, z) < 24) continue;
      put(x, z);
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
    temple: anchor(-82, Tz, P.top + 70),
    'solomons-colonnade': anchor(P.x1 - 12, 0, P.top + 14),
    antonia: anchor(A.x, A.z, P.top + 56),
    bethesda: anchor(66, -422),
    siloam: anchor(90, 952),
    'herods-palace': anchor(H.x, H.z, palY + 26),
    gabbatha: anchor(H.x + 118, H.z - 40, palY + 4),
    golgotha: anchor(-520, -680),
    kidron: anchor(455, 180),
    'mount-of-olives': anchor(960, 30),
    gethsemane: anchor(640, -70),
    'high-priests-house': anchor(-430, 240, groundH(-430, 240) + 26),
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
