import * as THREE from 'three';

// Regional vegetation for the Holy Land map: stylised grove-scale blobs
// (olive/oak scrub on the moist hills) and palms along the Jordan ribbon and
// oases. Instance positions are scattered once from the density map; only the
// matrices are recomposed when the relief exaggeration changes.

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Vegetation = {
  group: THREE.Group;
  rebuild: (effExag: number) => void;
  setFade: (o: number) => void;
  dispose: () => void;
};

export function buildVegetation(opts: {
  W: number;
  H: number;
  eleAt: (x: number, z: number) => number; // metres at world x/z
  vegMap: { data: Uint8ClampedArray; w: number; h: number }; // R broadleaf, G palm
  exclude: { x: number; z: number; rKm: number }; // the Jerusalem diorama
}): Vegetation {
  const { W, H, eleAt, vegMap, exclude } = opts;
  const rng = mulberry32(1917);
  const group = new THREE.Group();

  type Inst = { x: number; z: number; ele: number; s: number; yaw: number };
  const broad: Inst[] = [];
  const palms: Inst[] = [];
  const exR2 = exclude.rKm * exclude.rKm;

  const broadAt = (x: number, z: number) => {
    const cx = Math.min(vegMap.w - 1, Math.max(0, Math.round((x / W + 0.5) * (vegMap.w - 1))));
    const cy = Math.min(vegMap.h - 1, Math.max(0, Math.round((z / H + 0.5) * (vegMap.h - 1))));
    return vegMap.data[(cy * vegMap.w + cx) * 4] / 255;
  };
  for (let i = 0; i < 26000; i++) {
    const x = (rng() - 0.5) * W;
    const z = (rng() - 0.5) * H;
    if (rng() > broadAt(x, z) * 0.85) continue;
    const dx = x - exclude.x, dz = z - exclude.z;
    if (dx * dx + dz * dz < exR2) continue;
    broad.push({ x, z, ele: eleAt(x, z), s: 0.03 + rng() * 0.034, yaw: rng() * Math.PI * 2 });
  }
  // palms live in a narrow ribbon: spawn per density-map pixel so the whole
  // ribbon is populated (blind rejection over the map would barely hit it)
  const pxW = W / vegMap.w, pxH = H / vegMap.h;
  for (let py = 0; py < vegMap.h; py++) {
    for (let px = 0; px < vegMap.w; px++) {
      const d = vegMap.data[(py * vegMap.w + px) * 4 + 1] / 255;
      if (d < 0.05) continue;
      const n = d * 1.4;
      let cnt = Math.floor(n) + (rng() < n - Math.floor(n) ? 1 : 0);
      for (; cnt > 0; cnt--) {
        const x = (px + rng()) * pxW - W / 2;
        const z = (py + rng()) * pxH - H / 2;
        const dx = x - exclude.x, dz = z - exclude.z;
        if (dx * dx + dz * dz < exR2) continue;
        palms.push({ x, z, ele: eleAt(x, z), s: 0.75 + rng() * 0.5, yaw: rng() * Math.PI * 2 });
      }
    }
  }

  // grove blobs: squashed icosahedra sitting on the ground
  const broadGeo = new THREE.IcosahedronGeometry(1, 0);
  broadGeo.scale(1, 0.62, 1);
  const broadMat = new THREE.MeshStandardMaterial({
    roughness: 0.95, metalness: 0, flatShading: true, transparent: true,
  });
  const broadMesh = new THREE.InstancedMesh(broadGeo, broadMat, broad.length);
  // palms: slim trunk + frond cone
  const trunkGeo = new THREE.CylinderGeometry(0.06, 0.09, 1, 5);
  trunkGeo.translate(0, 0.5, 0);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8a7354, roughness: 1, transparent: true });
  const headGeo = new THREE.ConeGeometry(0.42, 0.3, 6);
  headGeo.translate(0, 1.02, 0);
  const headMat = new THREE.MeshStandardMaterial({
    color: 0x4f6f3a, roughness: 0.95, flatShading: true, transparent: true,
  });
  const trunkMesh = new THREE.InstancedMesh(trunkGeo, trunkMat, palms.length);
  const headMesh = new THREE.InstancedMesh(headGeo, headMat, palms.length);

  const olive = new THREE.Color(0x7f8f5c);
  const dark = new THREE.Color(0x5c7342);
  const c = new THREE.Color();
  for (let i = 0; i < broad.length; i++) {
    c.copy(olive).lerp(dark, rng()).offsetHSL(0, 0, (rng() - 0.5) * 0.05);
    broadMesh.setColorAt(i, c);
  }
  if (broadMesh.instanceColor) broadMesh.instanceColor.needsUpdate = true;

  for (const m of [broadMesh, trunkMesh, headMesh]) {
    m.frustumCulled = false;
    group.add(m);
  }

  const M = new THREE.Matrix4();
  const Q = new THREE.Quaternion();
  const P = new THREE.Vector3();
  const S = new THREE.Vector3();
  const Y = new THREE.Vector3(0, 1, 0);
  const rebuild = (effExag: number) => {
    for (let i = 0; i < broad.length; i++) {
      const t = broad[i];
      Q.setFromAxisAngle(Y, t.yaw);
      P.set(t.x, (t.ele / 1000) * effExag + t.s * 0.42, t.z);
      S.set(t.s, t.s, t.s);
      M.compose(P, Q, S);
      broadMesh.setMatrixAt(i, M);
    }
    broadMesh.instanceMatrix.needsUpdate = true;
    for (let i = 0; i < palms.length; i++) {
      const t = palms[i];
      Q.setFromAxisAngle(Y, t.yaw);
      const h = 0.085 * t.s; // stylised, sized to read at regional zoom
      P.set(t.x, (t.ele / 1000) * effExag, t.z);
      S.set(h, h, h);
      M.compose(P, Q, S);
      trunkMesh.setMatrixAt(i, M);
      headMesh.setMatrixAt(i, M);
    }
    trunkMesh.instanceMatrix.needsUpdate = true;
    headMesh.instanceMatrix.needsUpdate = true;
  };

  const setFade = (o: number) => {
    group.visible = o > 0.01;
    broadMat.opacity = o;
    trunkMat.opacity = o;
    headMat.opacity = o;
  };
  setFade(0);

  const dispose = () => {
    broadGeo.dispose(); trunkGeo.dispose(); headGeo.dispose();
    broadMat.dispose(); trunkMat.dispose(); headMat.dispose();
    broadMesh.dispose(); trunkMesh.dispose(); headMesh.dispose();
  };

  return { group, rebuild, setFade, dispose };
}
