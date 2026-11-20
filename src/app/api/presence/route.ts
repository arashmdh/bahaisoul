import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const TTL_MS = 60_000;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { sessionId?: string };
    const sessionId = body.sessionId?.trim();
    if (!sessionId) {
      return NextResponse.json({ error: "sessionId required" }, { status: 400 });
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
