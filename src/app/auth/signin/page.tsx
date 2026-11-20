"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { NinePointedStar } from "@/components/ui/NinePointedStar";

export default function SignInPage() {
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
      <div className="w-full max-w-md text-center">
        <NinePointedStar size={56} className="mx-auto text-gold" />
        <h1 className="mt-6 font-display text-3xl text-alabaster">Enter the Temple</h1>
        <p className="mt-3 font-sans text-sm text-alabaster/60">
          Sign in as a Seeker. Scholar verification is granted by Stewards.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-4 text-start">
          <label className="block">
            <span className="font-sans text-xs uppercase tracking-widest text-gold/80">
              Name
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full border border-gold/25 bg-alabaster/5 px-4 py-3 font-sans text-sm text-alabaster focus:border-gold/50 focus:outline-none"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="font-sans text-xs uppercase tracking-widest text-gold/80">
              Email
            </span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full border border-gold/25 bg-alabaster/5 px-4 py-3 font-sans text-sm text-alabaster focus:border-gold/50 focus:outline-none"
              placeholder="you@example.com"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold py-3 font-sans text-sm tracking-wide text-indigo transition hover:bg-gold-soft disabled:opacity-60"
          >
            {loading ? "Entering…" : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}
