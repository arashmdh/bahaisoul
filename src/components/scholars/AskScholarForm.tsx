"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/dictionaries";

const copy = {
  en: {
    title: "Ask a Question",
    sub: "Send a respectful spiritual or research question to this scholar.",
    name: "Your name",
    email: "Email (optional)",
    message: "Your question…",
    send: "Send Inquiry",
    sending: "Sending…",
    sent: "Your question was received with gratitude.",
    error: "Could not send. Please try again.",
  },
  sv: {
    title: "Ställ en fråga",
    sub: "Skicka en respektfull andlig eller forskningsfråga till denna forskare.",
    name: "Ditt namn",
    email: "E-post (valfritt)",
    message: "Din fråga…",
    send: "Skicka fråga",
    sending: "Skickar…",
    sent: "Din fråga har mottagits med tacksamhet.",
    error: "Kunde inte skicka. Försök igen.",
  },
  fa: {
    title: "گفت‌وگو با پژوهشگر",
    sub: "پرسشی روحانی یا پژوهشی را با احترام برای این پژوهشگر بفرستید.",
    name: "نام شما",
    email: "ایمیل (اختیاری)",
    message: "پرسش شما…",
    send: "ارسال پرسش",
    sending: "در حال ارسال…",
    sent: "پرسش شما با سپاس دریافت شد.",
    error: "ارسال نشد. دوباره تلاش کنید.",
  },
} as const;

type Props = {
  locale: Locale;
  scholarSlug: string;
  scholarName: string;
};

export function AskScholarForm({ locale, scholarSlug, scholarName }: Props) {
  const t = copy[locale];
  const isFa = locale === "fa";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim() || !name.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/scholars/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scholarSlug,
          scholarName,
          name: name.trim(),
          email: email.trim() || null,
          message: message.trim(),
          locale,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("sent");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-amber-400/25 bg-slate-950/50 p-5 backdrop-blur-md md:p-6"
      dir={isFa ? "rtl" : "ltr"}
    >
      <h3 className="font-sans text-[11px] uppercase tracking-[0.22em] text-amber-300/90">
        {t.title}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm text-white/60",
          isFa ? "prose-fa" : "font-sans"
        )}
      >
        {t.sub}
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder={t.name}
          className="rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 font-sans text-sm text-white outline-none placeholder:text-white/35 focus:border-amber-300/40"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.email}
          className="rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 font-sans text-sm text-white outline-none placeholder:text-white/35 focus:border-amber-300/40"
        />
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={4}
        placeholder={t.message}
        className={cn(
          "mt-3 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-amber-300/40",
          isFa ? "prose-fa" : "font-sans"
        )}
      />
      <button
        type="submit"
        disabled={status === "sending" || !message.trim() || !name.trim()}
        className="mt-4 w-full rounded-xl border border-amber-400/40 bg-amber-500/15 px-4 py-2.5 font-sans text-xs uppercase tracking-wider text-amber-100 transition hover:bg-amber-500/25 disabled:opacity-40 sm:w-auto"
      >
        {status === "sending" ? t.sending : t.send}
      </button>
      {status === "sent" && (
        <p className={cn("mt-3 text-sm text-amber-200/90", isFa && "prose-fa")}>
          {t.sent}
        </p>
      )}
      {status === "error" && (
        <p className={cn("mt-3 text-sm text-red-300/90", isFa && "prose-fa")}>
          {t.error}
        </p>
      )}
    </form>
  );
}
