# Dump the reference model's house instances (positions, sizes, rotations) to JSON.
import bpy, json, sys
argv = sys.argv[sys.argv.index("--") + 1:]
OUT = argv[0]
data = []
for coll in bpy.data.collections:
    if not (coll.name.startswith("CASAS") or coll.name == "Casas deserticas"):
        continue
    for ob in coll.objects:
        if ob.type != 'MESH':
            continue
        loc = ob.matrix_world.translation
        d = ob.dimensions
        data.append({
            "c": coll.name, "x": round(loc.x, 1), "y": round(loc.y, 1),
            "dx": round(d.x, 1), "dy": round(d.y, 1), "dz": round(d.z, 1),
            "r": round(ob.rotation_euler.z, 3),
        })
with open(OUT, "w") as f:
    json.dump(data, f)
print("houses dumped:", len(data))
