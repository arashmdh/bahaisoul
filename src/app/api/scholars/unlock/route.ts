import { NextResponse } from "next/server";

/** Preview gate until the Scholars section is ready for public launch. */
const USER =
  process.env.SCHOLARS_PREVIEW_USER?.trim() || "bahai-user";
const PASS =
  process.env.SCHOLARS_PREVIEW_PASS?.trim() || "BahaAllah-0918";

export async function POST(req: Request) {
  let body: { username?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const username = String(body.username ?? "").trim();
  const password = String(body.password ?? "");

  if (username !== USER || password !== PASS) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("scholars_preview", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14, // 14 days
  });
  return res;
}
