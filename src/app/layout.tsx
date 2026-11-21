import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Noto_Naskh_Arabic,
  Source_Sans_3,
  Vazirmatn,
} from "next/font/google";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { SoundProvider } from "@/components/providers/SoundProvider";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AudioAmbience } from "@/components/layout/AudioAmbience";
import { SiteJsonLd } from "@/components/seo/JsonLd";
import { SITE_KEYWORDS, SITE_NAME, SITE_NAME_FA, SITE_URL } from "@/lib/seo";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-vazir",
  display: "swap",
});

/** Elegant Persian reading face for body / sacred content */
const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-naskh",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060918",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Virtual Bahá'í Temple | روح بهائی`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Bahá'í Soul (روح بهائی) — a Virtual Temple and digital Mashriqu'l-Adhkár exploring deep Bahá'í mysticism, sacred art, Houses of Worship, and devotion. Founded by Arash Mamdouh; Temple Steward Shoja Ashari. Bahá'í center online · Bahá'í Sweden · بهائی سوئد.",
  keywords: [...SITE_KEYWORDS],
  authors: [
    { name: "Arash Mamdouh", url: `${SITE_URL}/scholars/arash-mamdouh` },
    { name: "Shojaeddin Ashari Gheshmi", url: `${SITE_URL}/scholars/shoja-gheshmi` },
  ],
  creator: "Arash Mamdouh",
  publisher: SITE_NAME,
  category: "Religion",
  applicationName: SITE_NAME,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      sv: "/",
      fa: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["sv_SE", "fa_IR"],
    url: SITE_URL,
    siteName: `${SITE_NAME} · ${SITE_NAME_FA}`,
    title: `${SITE_NAME} — Virtual Bahá'í Temple | روح بهائی`,
    description:
      "Deep Bahá'í contemplation online — mysticism, Houses of Worship, Hidden Words, and living devotion. Arash Mamdouh · Shoja Ashari · Bahá'í Sweden.",
    images: [
      {
        url: "/images/about-cosmos.jpg",
        width: 1024,
        height: 558,
        alt: "Bahá'í Soul Virtual Temple — روح بهائی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Virtual Bahá'í Temple`,
    description:
      "روح بهائی · Deep Bahá'í mysticism, sacred art & devotion. Arash Mamdouh · Shoja Ashari · Bahá'í Sweden.",
    images: ["/images/about-cosmos.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Add Search Console codes when available:
    // google: "...",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${vazir.variable} ${naskh.variable} min-h-screen bg-alabaster antialiased`}
      >
        <SiteJsonLd />
        <SessionProvider>
          <LocaleProvider>
            <SoundProvider>
              <Navigation />
              <main>{children}</main>
              <Footer />
              <AudioAmbience />
            </SoundProvider>
          </LocaleProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
