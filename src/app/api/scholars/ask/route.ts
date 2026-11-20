import { NextResponse } from "next/server";

/** Soft inbox for scholar inquiries — persists to console / future DB. */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const scholarSlug = String(body?.scholarSlug ?? "").trim();
    if (!name || !message || !scholarSlug) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    if (name.length > 120 || message.length > 4000) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    // Placeholder persistence — wire to Prisma / email later
    console.info("[scholar-ask]", {
      scholarSlug,
      scholarName: body?.scholarName,
      name,
      email: body?.email ?? null,
      locale: body?.locale,
      message: message.slice(0, 200),
      at: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
