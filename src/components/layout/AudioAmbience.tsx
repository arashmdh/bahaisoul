"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

/**
 * Minimal ambient pad generated with Web Audio API —
 * no external audio file required for the foundation.
 */
export function AudioAmbience() {
  const { t } = useLocale();
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ osc: OscillatorNode; gain: GainNode }[]>([]);

  useEffect(() => {
    return () => {
      nodesRef.current.forEach(({ osc, gain }) => {
        try {
          gain.gain.exponentialRampToValueAtTime(0.0001, ctxRef.current!.currentTime + 0.4);
          osc.stop();
        } catch {
          /* ignore */
        }
      });
      void ctxRef.current?.close();
    };
  }, []);

  const toggle = async () => {
    if (on) {
      nodesRef.current.forEach(({ osc, gain }) => {
        const ctx = ctxRef.current!;
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
        setTimeout(() => {
          try {
            osc.stop();
          } catch {
            /* ignore */
          }
        }, 900);
      });
      nodesRef.current = [];
      setOn(false);
      return;
    }

    const ctx = new AudioContext();
    ctxRef.current = ctx;
    const master = ctx.createGain();
    master.gain.value = 0.035;
    master.connect(ctx.destination);

    const freqs = [110, 164.81, 196]; // soft sanctuary triad
    nodesRef.current = freqs.map((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = i === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;
      gain.gain.value = 0.0001;
      osc.connect(gain);
      gain.connect(master);
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.4 / (i + 1), ctx.currentTime + 2.5);
      return { osc, gain };
    });

    setOn(true);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "fixed bottom-6 end-6 z-40 flex items-center gap-2 rounded-sm border border-gold/30",
        "bg-indigo/80 px-3 py-2 text-xs tracking-wide text-gold backdrop-blur-md",
        "transition hover:border-gold/55"
      )}
      aria-pressed={on}
      aria-label={on ? t.audio.on : t.audio.off}
    >
      {on ? <Volume2 size={14} /> : <VolumeX size={14} />}
      <span className="hidden sm:inline">{on ? t.audio.on : t.audio.off}</span>
    </button>
  );
}
