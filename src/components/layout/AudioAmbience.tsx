"use client";

import { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useSoundPreference } from "@/components/providers/SoundProvider";
import { cn } from "@/lib/utils";

/**
 * Global sound toggle + soft site-wide ambient pad.
 * Also gates page-specific music (e.g. Sanctuary temple ambiance) via SoundProvider.
 */
export function AudioAmbience() {
  const { t } = useLocale();
  const { enabled, toggle } = useSoundPreference();
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ osc: OscillatorNode; gain: GainNode }[]>([]);
  const masterRef = useRef<GainNode | null>(null);

  useEffect(() => {
    return () => {
      stopPad();
      void ctxRef.current?.close();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopPad = () => {
    const ctx = ctxRef.current;
    nodesRef.current.forEach(({ osc, gain }) => {
      try {
        if (ctx) {
          gain.gain.cancelScheduledValues(ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(
            0.0001,
            ctx.currentTime + 0.6
          );
        }
        window.setTimeout(() => {
          try {
            osc.stop();
          } catch {
            /* ignore */
          }
        }, 700);
      } catch {
        /* ignore */
      }
    });
    nodesRef.current = [];
    masterRef.current = null;
  };

  const startPad = async () => {
    if (nodesRef.current.length > 0) return;

    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctx) return;

    const ctx = ctxRef.current ?? new Ctx();
    ctxRef.current = ctx;
    if (ctx.state === "suspended") {
      try {
        await ctx.resume();
      } catch {
        return;
      }
    }

    const master = ctx.createGain();
    master.gain.value = 0.035;
    master.connect(ctx.destination);
    masterRef.current = master;

    const freqs = [110, 164.81, 196];
    nodesRef.current = freqs.map((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = i === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;
      gain.gain.value = 0.0001;
      osc.connect(gain);
      gain.connect(master);
      osc.start();
      gain.gain.exponentialRampToValueAtTime(
        0.4 / (i + 1),
        ctx.currentTime + 2.2
      );
      return { osc, gain };
    });
  };

  useEffect(() => {
    if (enabled) {
      void startPad();
    } else {
      stopPad();
    }
  }, [enabled]);

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "fixed bottom-6 end-6 z-40 flex items-center gap-2 rounded-sm border border-gold/30",
        "bg-indigo/80 px-3 py-2 text-xs tracking-wide text-gold backdrop-blur-md",
        "transition hover:border-gold/55"
      )}
      aria-pressed={enabled}
      aria-label={enabled ? t.audio.on : t.audio.off}
      title={enabled ? t.audio.on : t.audio.off}
    >
      {enabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
      <span className="hidden sm:inline">
        {enabled ? t.audio.on : t.audio.off}
      </span>
    </button>
  );
}
