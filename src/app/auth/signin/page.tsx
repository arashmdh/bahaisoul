"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    title: "Enter the Temple",
    sub: "Sign in as a Seeker. Scholar verification is granted by Stewards.",
    name: "Name",
    namePh: "Your name",
    email: "Email",
    emailPh: "you@example.com",
    enter: "Enter",
    entering: "Entering…",
  },
  sv: {
    title: "Stig in i templet",
    sub: "Logga in som sökare. Forskarverifiering beviljas av förvaltare.",
    name: "Namn",
    namePh: "Ditt namn",
    email: "E-post",
    emailPh: "du@exempel.com",
    enter: "Stig in",
    entering: "Stiger in…",
  },
  fa: {
    title: "ورود به معبد",
    sub: "به‌عنوان جوینده وارد شوید. تأیید پژوهشگر را امینان معبد می‌بخشند.",
    name: "نام",
    namePh: "نام شما",
    email: "رایانامه",
    emailPh: "you@example.com",
    enter: "ورود",
    entering: "در حال ورود…",
  },
} as const;

export default function SignInPage() {
  const { locale } = useLocale();
  const isFa = locale === "fa";
  const t = copy[locale];
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await signIn("credentials", {
      email,
      name,
      callbackUrl: "/dashboard",
    });
    setLoading(false);
  };

  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-indigo px-5 pt-20">
      <div className="w-full max-w-md text-center" dir={isFa ? "rtl" : "ltr"}>
        <NinePointedStar size={56} className="mx-auto text-gold" />
        <h1
          className={cn(
            "mt-6 font-display text-3xl text-alabaster",
            isFa && "prose-fa"
          )}
        >
          {t.title}
        </h1>
        <p
          className={cn(
            "mt-3 text-sm text-alabaster/60",
            isFa ? "prose-fa" : "font-sans"
          )}
        >
          {t.sub}
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-4 text-start">
          <label className="block">
            <span className="font-sans text-xs uppercase tracking-widest text-gold/80">
              {t.name}
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full border border-gold/25 bg-alabaster/5 px-4 py-3 font-sans text-sm text-alabaster focus:border-gold/50 focus:outline-none"
              placeholder={t.namePh}
            />
          </label>
          <label className="block">
            <span className="font-sans text-xs uppercase tracking-widest text-gold/80">
              {t.email}
            </span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full border border-gold/25 bg-alabaster/5 px-4 py-3 font-sans text-sm text-alabaster focus:border-gold/50 focus:outline-none"
              placeholder={t.emailPh}
              dir="ltr"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold py-3 font-sans text-sm tracking-wide text-indigo transition hover:bg-gold-soft disabled:opacity-60"
          >
            {loading ? t.entering : t.enter}
          </button>
        </form>
      </div>
    </div>
  );
}
