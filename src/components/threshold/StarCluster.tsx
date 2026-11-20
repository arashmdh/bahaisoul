"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

type ClusterStar = {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  gold: boolean;
  opacity: number;
};

function seeded(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/** Dense star cluster in a ring OUTSIDE the door labels (no overlap with text) */
export function StarCluster({ className }: { className?: string }) {
  const stars = useMemo(() => {
    const list: ClusterStar[] = [];
    for (let i = 0; i < 64; i++) {
      const t = seeded(i + 1);
      const u = seeded(i + 40);
      const angle = t * Math.PI * 2;
      // Outer band only — clear of door planets/labels at ~36%
      const radius = 44 + u * 12;
      const left = 50 + radius * Math.cos(angle);
      const top = 50 + radius * Math.sin(angle);

      list.push({
        left,
        top,
        size: 1 + seeded(i + 300) * 2.2,
        delay: seeded(i + 400) * 5,
        duration: 3.5 + seeded(i + 500) * 4,
        gold: seeded(i + 600) > 0.62,
        opacity: 0.3 + seeded(i + 700) * 0.5,
      });
    }
    return list;
  }, []);

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      aria-hidden
    >
      <div
        className="absolute left-1/2 top-1/2 h-[96%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, transparent 40%, rgba(197,160,89,0.06) 55%, rgba(120,150,210,0.04) 68%, transparent 82%)",
        }}
      />

      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            marginLeft: -s.size / 2,
            marginTop: -s.size / 2,
            opacity: s.opacity,
            background: s.gold
              ? "radial-gradient(circle, #fff6d8 0%, #c5a059 55%, transparent 75%)"
              : "radial-gradient(circle, #fff 0%, #c8d4f0 55%, transparent 75%)",
            boxShadow: s.gold
              ? "0 0 6px rgba(197,160,89,0.55)"
              : "0 0 5px rgba(220,230,255,0.45)",
            animation: `cluster-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
