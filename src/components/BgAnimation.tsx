type BlobCfg = {
  w: number;
  h: number;
  left: number;
  top: number;
  rotate: number; // degrees
  opacity: number;
  bg: string;     // rgba(...)
  anim?: string;  // optional animation string
};

type ClusterCfg = {
  top: number;
  left: number;
  w: number;
  h: number;
  blobs: BlobCfg[];
};

const clusters: ClusterCfg[] = [
  {
    left: 20,
    top: 20,
    w: 1373.41,
    h: 1324.45,
    blobs: [
      {
        w: 448.51,
        h: 634,
        left: 596.88,
        top: 965.61,
        rotate: -56,
        opacity: 0.79,
        bg: "rgba(77, 158, 255, 0.20)",
        anim: "floatA 12s ease-in-out infinite alternate",
      },
      {
        w: 618,
        h: 607,
        left: 0,
        top: 301.53,
        rotate: -29,
        opacity: 0.44,
        bg: "rgba(77, 158, 255, 0.30)",
        anim: "floatB 14s ease-in-out infinite alternate",
      },
    ],
  },
  {
    left: 20,
    top: 1364.45,
    w: 1373.41,
    h: 1324.45,
    blobs: [
      {
        w: 448.51,
        h: 634,
        left: 396.75,
        top: 535.59,
        rotate: 42,
        opacity: 0.79,
        bg: "rgba(77, 158, 255, 0.20)",
        anim: "floatB 12s ease-in-out infinite alternate",
      },
      {
        w: 618,
        h: 607,
        left: 1129.51,
        top: 25.37,
        rotate: 68,
        opacity: 0.44,
        bg: "rgba(77, 158, 255, 0.30)",
        anim: "floatA 15s ease-in-out infinite alternate",
      },
    ],
  },
  {
    left: 20,
    top: 4053.35,
    w: 1373.41,
    h: 1324.45,
    blobs: [
      {
        w: 448.51,
        h: 634,
        left: 396.75,
        top: 535.59,
        rotate: 42,
        opacity: 0.79,
        bg: "rgba(77, 158, 255, 0.20)",
        anim: "floatA 13s ease-in-out infinite alternate",
      },
      {
        w: 618,
        h: 607,
        left: 1129.51,
        top: 25.37,
        rotate: 68,
        opacity: 0.44,
        bg: "rgba(77, 158, 255, 0.30)",
        anim: "floatB 16s ease-in-out infinite alternate",
      },
    ],
  },
  {
    left: 20,
    top: 2708.9,
    w: 1373.41,
    h: 1324.45,
    blobs: [
      {
        w: 448.51,
        h: 634,
        left: 1369.96,
        top: 275.84,
        rotate: 116,
        opacity: 0.79,
        bg: "rgba(77, 158, 255, 0.20)",
        anim: "floatB 11s ease-in-out infinite alternate",
      },
      {
        w: 618,
        h: 607,
        left: 798.52,
        top: 1141.11,
        rotate: 142,
        opacity: 0.44,
        bg: "rgba(77, 158, 255, 0.30)",
        anim: "floatA 17s ease-in-out infinite alternate",
      },
    ],
  },
];

export default function BgAnimation() {
  return (
    <div
      className="
        pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-md
      "
      style={{ background: "transparent" }}
    >
      {clusters.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: c.left,
            top: c.top,
            width: c.w,
            height: c.h,
          }}
        >
          {c.blobs.map((b, j) => (
            <div
              key={j}
              style={{
                position: "absolute",
                width: b.w,
                height: b.h,
                left: b.left,
                top: b.top,
                opacity: b.opacity,
                filter: "blur(187px)",
                // rotate on inner element; translation handled by animation
                transform: `rotate(${b.rotate}deg)`,
                transformOrigin: "top left",
                background: b.bg,
                // give a soft outer glow (optional – tweak or remove):
                boxShadow: "0 0 374px rgba(77,158,255,0.25)",
                animation: b.anim,
                willChange: "transform, opacity",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
