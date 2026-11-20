"use client";

import { useEffect, useRef } from "react";
import { useSoundPreference } from "@/components/providers/SoundProvider";

const SRC = "/audio/temple-ambiance.wav";
const TARGET_VOLUME = 0.18;
const FADE_MS = 2800;

function rampVolume(
  audio: HTMLAudioElement,
  to: number,
  durationMs: number,
  onDone?: () => void
) {
  const from = audio.volume;
  const start = performance.now();
  let cancelled = false;

  const step = (now: number) => {
    if (cancelled) return;
    const t = Math.min(1, (now - start) / durationMs);
    const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    audio.volume = Math.max(0, Math.min(1, from + (to - from) * eased));
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      audio.volume = to;
      onDone?.();
    }
  };

  requestAnimationFrame(step);
  return () => {
    cancelled = true;
  };
}

/**
 * Sanctuary temple ambiance — plays only when candle is lit AND global sound is on.
 * Respects the shared mute button (AudioAmbience / SoundProvider).
 */
export function useTempleAmbiance(isLit: boolean) {
  const { enabled: soundOn } = useSoundPreference();
  const active = isLit && soundOn;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cancelFadeRef = useRef<(() => void) | null>(null);
  const wantedRef = useRef(active);

  useEffect(() => {
    wantedRef.current = active;
  }, [active]);

  useEffect(() => {
    const audio = new Audio(SRC);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;
    audioRef.current = audio;

    return () => {
      cancelFadeRef.current?.();
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    cancelFadeRef.current?.();
    cancelFadeRef.current = null;

    if (active) {
      const start = async () => {
        try {
          if (audio.paused) {
            audio.volume = 0;
            await audio.play();
          }
          if (!wantedRef.current) return;
          cancelFadeRef.current = rampVolume(audio, TARGET_VOLUME, FADE_MS);
        } catch {
          /* autoplay blocked until user gesture */
        }
      };
      void start();
    } else if (!audio.paused || audio.volume > 0) {
      cancelFadeRef.current = rampVolume(audio, 0, FADE_MS, () => {
        audio.pause();
        audio.currentTime = 0;
      });
    }

    return () => {
      cancelFadeRef.current?.();
      cancelFadeRef.current = null;
    };
  }, [active]);
}
