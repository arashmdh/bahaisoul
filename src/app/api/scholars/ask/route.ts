import { NextResponse } from "next/server";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SLUG_RE = /^[a-z0-9-]{2,64}$/;

/** Soft inbox for scholar inquiries — persists to console / future DB. */
export async function POST(req: Request) {
  try {
    const ip = clientIp(req);
    const limited = rateLimit(`scholar-ask:${ip}`, 5, 60_000);
    if (!limited.ok) {
      return NextResponse.json({ ok: false }, { status: 429 });
    }

    const body = await req.json();
    const name = String(body?.name ?? "").trim().slice(0, 120);
    const message = String(body?.message ?? "").trim().slice(0, 4000);
    const scholarSlug = String(body?.scholarSlug ?? "").trim().toLowerCase();
    const emailRaw = String(body?.email ?? "").trim().slice(0, 160);
    const email = emailRaw && EMAIL_RE.test(emailRaw) ? emailRaw : null;

    if (!name || !message || !SLUG_RE.test(scholarSlug)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    console.info("[scholar-ask]", {
      scholarSlug,
      name,
      email: email ? `${email.slice(0, 2)}…` : null,
      locale: body?.locale,
      messageLen: message.length,
      at: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
