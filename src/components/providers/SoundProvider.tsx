"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "bahaisoul-sound-enabled";

type SoundContextValue = {
  /** Master switch for site ambience + page-specific music FX */
  enabled: boolean;
  ready: boolean;
  setEnabled: (value: boolean) => void;
  toggle: () => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabledState] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw === "1") setEnabledState(true);
      else if (raw === "0") setEnabledState(false);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const setEnabled = useCallback((value: boolean) => {
    setEnabledState(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setEnabledState((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ enabled, ready, setEnabled, toggle }),
    [enabled, ready, setEnabled, toggle]
  );

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}

export function useSoundPreference() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    throw new Error("useSoundPreference must be used within SoundProvider");
  }
  return ctx;
}
