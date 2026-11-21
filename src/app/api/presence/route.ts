import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const TTL_MS = 60_000;
const SESSION_RE = /^[a-zA-Z0-9_-]{8,64}$/;

export async function POST(req: Request) {
  try {
    const ip = clientIp(req);
    const limited = rateLimit(`presence:${ip}`, 30, 60_000);
    if (!limited.ok) {
      return NextResponse.json({ count: 1 }, { status: 429 });
    }

    const body = (await req.json()) as { sessionId?: string };
    const sessionId = body.sessionId?.trim() ?? "";
    if (!SESSION_RE.test(sessionId)) {
      return NextResponse.json({ error: "invalid sessionId" }, { status: 400 });
    }

    const now = new Date();
    await prisma.sanctuaryPresence.upsert({
      where: { sessionId },
      update: { lastSeen: now },
      create: { sessionId, lastSeen: now },
    });

    const cutoff = new Date(Date.now() - TTL_MS);
    await prisma.sanctuaryPresence.deleteMany({
      where: { lastSeen: { lt: cutoff } },
    });

    const count = await prisma.sanctuaryPresence.count({
      where: { lastSeen: { gte: cutoff } },
    });

    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 1 });
  }
}

export async function GET() {
  try {
    const cutoff = new Date(Date.now() - TTL_MS);
    const count = await prisma.sanctuaryPresence.count({
      where: { lastSeen: { gte: cutoff } },
    });
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 1 });
  }
}
