import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

/** Bump suffix if preview credentials rotate so old unlock cookies stop working. */
const SCHOLARS_COOKIE = "scholars_preview_v2";

function protectScholars(req: NextRequest): NextResponse | null {
  const { pathname } = req.nextUrl;

  // Unlock form + API must stay reachable without the cookie
  if (
    pathname === "/scholars/unlock" ||
    pathname.startsWith("/api/scholars/unlock")
  ) {
    return null;
  }

  if (pathname === "/scholars" || pathname.startsWith("/scholars/")) {
    const unlocked = req.cookies.get(SCHOLARS_COOKIE)?.value === "1";
    if (!unlocked) {
      const url = req.nextUrl.clone();
      url.pathname = "/scholars/unlock";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  return null;
}

/**
 * Protect dashboard (auth) and Scholars preview (cookie gate).
 * Fail open on JWT errors so the rest of the site never blanks.
 */
export async function middleware(req: NextRequest) {
  const scholars = protectScholars(req);
  if (scholars) return scholars;

  const { pathname } = req.nextUrl;
  if (pathname !== "/dashboard" && !pathname.startsWith("/dashboard/")) {
    return NextResponse.next();
  }

  try {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/auth/signin";
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/scholars",
    "/scholars/:path*",
  ],
};
