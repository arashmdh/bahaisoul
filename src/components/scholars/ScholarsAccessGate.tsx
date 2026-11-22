"use client";

import { FormEvent, useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "scholars-preview-unlocked";

const copy = {
  en: {
    title: "Scholars — preview access",
    lead: "This section is still being completed. Enter the preview username and password to continue.",
    user: "Username",
    pass: "Password",
    submit: "Enter",
    error: "Incorrect username or password.",
    pending: "Checking…",
  },
  sv: {
    title: "Forskare — förhandsåtkomst",
    lead: "Detta avsnitt färdigställs fortfarande. Ange användarnamn och lösenord för förhandsvisning.",
    user: "Användarnamn",
    pass: "Lösenord",
    submit: "Gå in",
    error: "Fel användarnamn eller lösenord.",
    pending: "Kontrollerar…",
  },
  fa: {
    title: "پژوهشگران — دسترسی پیش‌نمایش",
    lead: "این بخش هنوز در حال تکمیل است. برای ورود، نام کاربری و رمز پیش‌نمایش را وارد کنید.",
    user: "نام کاربری",
    pass: "رمز عبور",
    submit: "ورود",
    error: "نام کاربری یا رمز نادرست است.",
    pending: "در حال بررسی…",
  },
} as const;

export function ScholarsAccessGate({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();
  const t = copy[locale] ?? copy.en;
  const isFa = locale === "fa";

  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setUnlocked(true);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(false);
    try {
      const res = await fetch("/api/scholars/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        setError(true);
        return;
      }
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setUnlocked(true);
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  if (!ready) {
    return (
      <div className="flex min-h-[60svh] items-center justify-center bg-alabaster">
        <NinePointedStar size={40} className="animate-pulse text-gold/70" />
      </div>
    );
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="relative flex min-h-[100svh] items-center justify-center bg-[#0B1126] px-5 py-24">
      <div className="pointer-events-none absolute inset-0 dome-glow opacity-40" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="scholars-gate-title"
        className={cn(
          "relative z-10 w-full max-w-md rounded-2xl border border-gold/25 bg-alabaster/95 p-7 shadow-[0_24px_80px_rgba(5,8,20,0.45)] backdrop-blur-md",
          isFa && "prose-fa"
        )}
        dir={isFa ? "rtl" : "ltr"}
      >
        <NinePointedStar size={44} className="mx-auto text-gold" />
        <h1
          id="scholars-gate-title"
          className={cn(
            "mt-5 text-center text-ink",
            isFa
              ? "font-display text-2xl"
              : "font-display text-2xl tracking-tight"
          )}
        >
          {t.title}
        </h1>
        <p
          className={cn(
            "mt-3 text-center text-ink/70",
            isFa ? "text-base leading-relaxed" : "font-sans text-sm leading-relaxed"
          )}
        >
          {t.lead}
        </p>

        <form onSubmit={onSubmit} className="mt-7 space-y-4">
          <label className="block">
            <span
              className={cn(
                "mb-1.5 block text-ink/60",
                isFa ? "text-sm" : "font-sans text-xs uppercase tracking-[0.18em]"
              )}
            >
              {t.user}
            </span>
            <input
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-ink/15 bg-white px-3 py-2.5 text-ink outline-none ring-gold/40 focus:ring-2"
              required
            />
          </label>
          <label className="block">
            <span
              className={cn(
                "mb-1.5 block text-ink/60",
                isFa ? "text-sm" : "font-sans text-xs uppercase tracking-[0.18em]"
              )}
            >
              {t.pass}
            </span>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-ink/15 bg-white px-3 py-2.5 text-ink outline-none ring-gold/40 focus:ring-2"
              required
            />
          </label>

          {error && (
            <p className="text-center text-sm text-red-700" role="alert">
              {t.error}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-ink px-4 py-3 font-sans text-sm text-alabaster transition hover:bg-ink/90 disabled:opacity-60"
          >
            {busy ? t.pending : t.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
