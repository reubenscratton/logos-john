# Headless Blender reference extractor for the purchased Jerusalem model.
# Usage:
#   Blender -b <file.blend> --python jref_extract.py -- <outdir> [inventory|render|all]
# Produces:
#   inventory.txt  — collections, objects, poly counts, world-space bounding boxes
#   ortho_top.png, orbit_{ne,se,sw,nw}.png — solid-shaded overviews (Workbench)
#   beauty_se.png  — one EEVEE/Cycles attempt with materials (best effort)
import bpy, sys, os, math
from mathutils import Vector

argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
OUT = argv[0] if argv else "/tmp/jref"
MODE = argv[1] if len(argv) > 1 else "all"
# focus mode: <outdir> focus <cx> <cy> <cz> <radius> <prefix>
FOCUS = [float(a) for a in argv[2:6]] if MODE == "focus" else None
PREFIX = argv[6] if MODE == "focus" and len(argv) > 6 else "focus"
os.makedirs(OUT, exist_ok=True)

scene = bpy.context.scene

# ---------- scene bounds ----------
lo = Vector((1e18, 1e18, 1e18)); hi = Vector((-1e18, -1e18, -1e18))
meshes = []
for ob in scene.objects:
    if ob.type != 'MESH' or not ob.visible_get():
        continue
    meshes.append(ob)
    for c in ob.bound_box:
        w = ob.matrix_world @ Vector(c)
        lo = Vector(map(min, lo, w)); hi = Vector(map(max, hi, w))
ctr = (lo + hi) / 2
size = hi - lo
radius = max(size.x, size.y, size.z) / 2 or 1.0

# ---------- inventory ----------
if MODE in ("inventory", "all"):
    lines = [f"scene: {scene.name}  objects:{len(scene.objects)}  meshes:{len(meshes)}",
             f"bounds lo=({lo.x:.1f},{lo.y:.1f},{lo.z:.1f}) hi=({hi.x:.1f},{hi.y:.1f},{hi.z:.1f}) size=({size.x:.1f},{size.y:.1f},{size.z:.1f})",
             ""]
    def walk(coll, depth=0):
        lines.append("  " * depth + f"[{coll.name}] ({len(coll.objects)} objects)")
        for ob in sorted(coll.objects, key=lambda o: o.name):
            if ob.type == 'MESH':
                nv = len(ob.data.vertices)
                bb = [ob.matrix_world @ Vector(c) for c in ob.bound_box]
                bl = Vector(map(min, *[(v.x, v.y, v.z) for v in bb])) if False else None
                xs = [v.x for v in bb]; ys = [v.y for v in bb]; zs = [v.z for v in bb]
                lines.append("  " * depth + f"  {ob.name}  verts:{nv}  "
                             f"x[{min(xs):.0f},{max(xs):.0f}] y[{min(ys):.0f},{max(ys):.0f}] z[{min(zs):.0f},{max(zs):.0f}]")
            else:
                lines.append("  " * depth + f"  {ob.name}  <{ob.type}>")
        for ch in coll.children:
            walk(ch, depth + 1)
    walk(scene.collection)
    with open(os.path.join(OUT, "inventory.txt"), "w") as f:
        f.write("\n".join(lines))
    print("inventory written:", len(lines), "lines")

if FOCUS:
    ctr = Vector(FOCUS[:3])
    radius = FOCUS[3]

# ---------- rendering ----------
if MODE in ("render", "all", "focus"):
    cam_data = bpy.data.cameras.new("jref_cam")
    cam_data.clip_start = max(0.01, radius * 0.001)
    cam_data.clip_end = radius * 30
    cam = bpy.data.objects.new("jref_cam", cam_data)
    scene.collection.objects.link(cam)
    scene.camera = cam
    scene.render.resolution_x = 1600
    scene.render.resolution_y = 1100
    scene.render.image_settings.file_format = 'PNG'

    def aim(from_pt, at):
        cam.location = from_pt
        d = at - from_pt
        cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()

    def solid():
        scene.render.engine = 'BLENDER_WORKBENCH'
        sh = scene.display.shading
        sh.light = 'MATCAP'
        sh.color_type = 'MATERIAL'
        sh.show_cavity = True

    def shot(name, azim_deg, elev_deg, dist_mul=1.0):
        a = math.radians(azim_deg); e = math.radians(elev_deg)
        dist = radius * 2.2 * dist_mul
        p = ctr + Vector((dist * math.cos(e) * math.cos(a), dist * math.cos(e) * math.sin(a), dist * math.sin(e)))
        aim(p, ctr)
        cam_data.lens = 40
        scene.render.filepath = os.path.join(OUT, name)
        bpy.ops.render.render(write_still=True)
        print("rendered", name)

    solid()
    # top-down (near-ortho feel via long lens)
    cam_data.lens = 80
    aim(ctr + Vector((0, -radius * 0.01, radius * 3.4)), ctr)
    scene.render.filepath = os.path.join(OUT, f"{PREFIX}_top.png" if FOCUS else "ortho_top.png")
    bpy.ops.render.render(write_still=True)
    print("rendered top")
    pre = PREFIX if FOCUS else "orbit"
    for name, az in ((f"{pre}_ne.png", 45), (f"{pre}_se.png", -45), (f"{pre}_sw.png", -135), (f"{pre}_nw.png", 135)):
        shot(name, az, 32)

    # one beauty render with materials (EEVEE, fall back to Cycles CPU few samples)
    try:
        scene.render.engine = 'BLENDER_EEVEE'
        scene.eevee.taa_render_samples = 16
        shot(f"{pre}_beauty.png", -45, 30)
    except Exception as ex:
        print("EEVEE failed:", ex)
        try:
            scene.render.engine = 'CYCLES'
            scene.cycles.samples = 24
            scene.cycles.device = 'CPU'
            shot("beauty_se.png", -45, 30)
        except Exception as ex2:
            print("Cycles failed too:", ex2)

print("done ->", OUT)
