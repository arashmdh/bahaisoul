import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { Adapter } from "next-auth/adapters";
import { prisma } from "./prisma";

/**
 * Passwordless email credentials are DEV-ONLY.
 * In production they enable full account takeover of any email (including ADMIN).
 * Set ALLOW_DEV_LOGIN=true only for local/staging debugging.
 */
const allowDevLogin =
  process.env.ALLOW_DEV_LOGIN === "true" ||
  process.env.NODE_ENV !== "production";

const providers: NextAuthOptions["providers"] = [];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  );
}

if (allowDevLogin) {
  providers.push(
    CredentialsProvider({
      id: "credentials",
      name: "Email (dev)",
      credentials: {
        email: { label: "Email", type: "email" },
        name: { label: "Name", type: "text" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        if (!email || !email.includes("@")) return null;

        // Never elevate or impersonate privileged accounts via credentials
        const existing = await prisma.user.findUnique({
          where: { email },
          select: { id: true, email: true, name: true, image: true, role: true },
        });
        if (existing && existing.role !== "SEEKER") {
          return null;
        }

        const user =
          existing ??
          (await prisma.user.create({
            data: {
              email,
              name: credentials?.name?.trim() || email.split("@")[0],
              role: "SEEKER",
            },
          }));

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    })
  );
}

if (providers.length === 0) {
  // Keep a stub so NextAuth boots; sign-in UI will show a configuration message
  providers.push(
    CredentialsProvider({
      id: "credentials",
      name: "Unavailable",
      credentials: {},
      async authorize() {
        return null;
      },
    })
  );
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) {
        token.sub = user.id;
      }
      if (token.sub) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.sub },
          select: { role: true, languagePref: true },
        });
        token.role = dbUser?.role ?? "SEEKER";
        token.languagePref = dbUser?.languagePref ?? "en";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.role = (token.role as string) ?? "SEEKER";
        session.user.languagePref = (token.languagePref as string) ?? "en";
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const authFeatures = {
  allowDevLogin,
  hasGoogle: Boolean(
    process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
  ),
};
