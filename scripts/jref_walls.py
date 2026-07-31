import bpy, json, sys
argv = sys.argv[sys.argv.index("--") + 1:]
OUT = argv[0]
pts = []
for ob in bpy.data.objects:
    if not ob.name.startswith("Muros De ciudad") or ob.type != 'MESH':
        continue
    mw = ob.matrix_world
    vs = ob.data.vertices
    step = max(1, len(vs) // 5000)
    for i in range(0, len(vs), step):
        co = mw @ vs[i].co
        pts.append((round(co.x, 1), round(co.y, 1)))
json.dump(pts, open(OUT, "w"))
print("wall verts:", len(pts))
