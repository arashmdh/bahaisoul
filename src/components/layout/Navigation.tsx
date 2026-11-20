"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { NinePointedStar } from "@/components/ui/NinePointedStar";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/about", label: t.nav.about },
    { href: "/history", label: t.nav.history },
    { href: "/#doors", label: t.nav.doors },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/sanctuary", label: t.nav.sanctuary },
    { href: "/scholars", label: t.nav.scholars },
    { href: "/dashboard", label: t.nav.dashboard },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-gold/15 bg-indigo/95 backdrop-blur-md"
          : "bg-gradient-to-b from-indigo/70 via-indigo/35 to-transparent"
      )}
    >
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-alabaster"
          onClick={() => setOpen(false)}
        >
          <NinePointedStar size={28} animated={false} className="text-gold/90" />
          <span className="font-display text-lg tracking-[0.04em] md:text-xl">
            {t.brand}
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm tracking-wide text-alabaster/80 transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            href="/auth/signin"
            className="border border-gold/40 bg-gold/10 px-4 py-2 font-sans text-sm tracking-wide text-gold transition hover:bg-gold/20"
          >
            {t.nav.enter}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex text-alabaster lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-gold/15 bg-indigo px-5 py-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-xl text-alabaster/90"
                >
                  {link.label}
                </Link>
              ))}
              <LanguageSwitcher />
              <Link
                href="/auth/signin"
                onClick={() => setOpen(false)}
                className="mt-2 w-fit border border-gold/40 px-4 py-2 text-sm text-gold"
              >
                {t.nav.enter}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
