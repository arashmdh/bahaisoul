# Bahá'í Soul — Virtual Temple

A contemplative full-stack sanctuary at **bahaisoul.com**: nine thematic doors, daily sacred writings, scholar directories, and a quiet digital House of Worship aesthetic.

## Stack

- **Next.js 14** (App Router) · TypeScript · Tailwind CSS
- **Prisma** + SQLite (swap `DATABASE_URL` for Postgres / Supabase in production)
- **NextAuth.js** — email credentials (dev) + optional Google OAuth
- **Framer Motion** · Lucide · custom nine-pointed star geometry
- **i18n** — English / Swedish (LTR) · Persian/Farsi (RTL) with Cormorant Garamond, Source Sans 3, Vazirmatn

## Getting started

```bash
npm install
npx prisma db push
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design tokens

| Token | Value | Role |
|-------|-------|------|
| Alabaster | `#FAF8F5` | Temple light / page ground |
| Midnight indigo | `#0F172A` | Depth, night, hero |
| Antique gold | `#C5A059` | Sacred accent |
| Sage / stone | `#8A9A88` / `#6B6560` | Soft secondary |

## Roles

1. **Seeker** — journal, bookmarks, door progress  
2. **Scholar** — verified profile, publish articles under the Nine Doors  
3. **Admin / Steward** — approve scholars, feature daily writings  

## Project map

```
src/app/page.tsx              → The Threshold (landing)
src/app/doors/[slug]          → Nine thematic pillars
src/app/sanctuary             → Prayer wall (scaffold)
src/app/dashboard             → Profile / journal (scaffold)
src/app/scholars/[username]   → Scholar portfolio
prisma/schema.prisma          → Full data model
```

## Environment

Copy `.env.example` → `.env`. Set `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` to enable Google sign-in. For production, point `DATABASE_URL` at Postgres (Supabase) and rotate `NEXTAUTH_SECRET`.
