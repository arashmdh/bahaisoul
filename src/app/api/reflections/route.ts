import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const items = await prisma.dailyReflection.findMany({
      orderBy: { createdAt: "desc" },
      take: 24,
      select: {
        id: true,
        name: true,
        content: true,
        wordNumber: true,
        locale: true,
        createdAt: true,
      },
    });
    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ items: [] });
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: string;
      content?: string;
      wordNumber?: number;
      locale?: string;
    };

    const name = body.name?.trim().slice(0, 80) ?? "";
    const content = body.content?.trim().slice(0, 2000) ?? "";
    const wordNumber = Number(body.wordNumber);
    const locale = ["en", "sv", "fa"].includes(body.locale ?? "")
      ? (body.locale as string)
      : "en";

    if (!name || !content || !Number.isFinite(wordNumber)) {
      return NextResponse.json(
        { error: "name, content, and wordNumber required" },
        { status: 400 }
      );
    }

    const item = await prisma.dailyReflection.create({
      data: { name, content, wordNumber, locale },
      select: {
        id: true,
        name: true,
        content: true,
        wordNumber: true,
        locale: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ item }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Unable to save" }, { status: 500 });
  }
}
