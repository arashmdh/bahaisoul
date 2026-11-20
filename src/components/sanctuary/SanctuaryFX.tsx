"use client";

import { motion } from "framer-motion";

/**
 * Flame FX only — inside the same 16:9 stage as the photos.
 * Tune: style={{ top: "…" }} — larger % = lower on candle.
 */
export function SanctuaryFX() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[6] overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: "61%" }}
      >
        <motion.div
          className="absolute left-1/2 top-1 h-8 w-14 -translate-x-1/2 rounded-full bg-amber-400/45 blur-xl"
          animate={{ opacity: [0.4, 0.7, 0.45, 0.65, 0.4], scale: [1, 1.1, 0.95, 1.06, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-[75%] rounded-full bg-amber-300/35 blur-2xl md:h-24 md:w-24"
          animate={{
            scale: [1, 1.14, 0.95, 1.1, 1],
            opacity: [0.5, 0.88, 0.58, 0.8, 0.5],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative -translate-y-[100%]">
          <motion.div
            className="relative mx-auto"
            style={{ width: 16, height: 30 }}
            animate={{
              scaleX: [1, 0.9, 1.08, 0.94, 1],
              scaleY: [1, 1.1, 0.92, 1.06, 1],
              rotate: [0, -3, 2.5, -1.8, 0],
            }}
            transition={{ duration: 0.48, repeat: Infinity, ease: "easeInOut" }}
          >
            <span
              className="absolute inset-0"
              style={{
                borderRadius: "50% 50% 50% 50% / 55% 55% 45% 45%",
                background:
                  "radial-gradient(ellipse at 50% 85%, #fb923c 0%, #ea580c 40%, rgba(234,88,12,0) 72%)",
                filter: "blur(1.2px)",
                boxShadow: "0 0 20px 7px rgba(249,115,22,0.6)",
              }}
            />
            <span
              className="absolute left-1/2 top-[6%] h-[80%] w-[58%] -translate-x-1/2"
              style={{
                borderRadius: "50% 50% 45% 45% / 60% 60% 40% 40%",
                background:
                  "linear-gradient(to top, #f59e0b 0%, #facc15 40%, #fef9c3 78%, #fff 100%)",
                boxShadow: "0 0 16px 5px rgba(250,204,21,0.7)",
              }}
            />
            <motion.span
              className="absolute left-1/2 top-[30%] h-[40%] w-[26%] -translate-x-1/2 rounded-full"
              style={{
                background:
                  "linear-gradient(to top, #fdba74 0%, #ffffff 50%, #e0f2fe 100%)",
                boxShadow: "0 0 10px 3px rgba(255,255,255,0.85)",
              }}
              animate={{
                opacity: [0.8, 1, 0.7, 0.95, 0.8],
                scaleY: [1, 1.08, 0.95, 1.04, 1],
              }}
              transition={{ duration: 0.38, repeat: Infinity }}
            />
          </motion.div>
          <motion.div
            className="absolute left-1/2 top-full h-[2px] w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-100/85 to-transparent blur-[0.5px]"
            animate={{
              opacity: [0.25, 0.9, 0.35, 0.75, 0.25],
              scaleX: [0.7, 1.2, 0.8, 1.1, 0.7],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute left-1/2 h-[2px] w-[2px] -translate-x-1/2 rounded-full bg-amber-100"
            style={{
              top: 0,
              marginLeft: `${(i % 3) * 4 - 4}px`,
              boxShadow: "0 0 5px 1px rgba(253,224,71,0.7)",
            }}
            animate={{
              y: [0, -40 - i * 8, -85 - i * 10],
              opacity: [0, 0.8, 0],
              x: [0, i % 2 === 0 ? 4 : -5, 0],
            }}
            transition={{
              duration: 2.6 + (i % 3) * 0.35,
              delay: i * 0.32,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
