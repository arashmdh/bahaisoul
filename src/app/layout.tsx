import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Bahá'í Soul — Virtual Temple",
    template: "%s · Bahá'í Soul",
  },
  description:
    "A contemplative digital sanctuary exploring the spiritual, mystical, and cultural dimensions of the Bahá'í Faith.",
  metadataBase: new URL("https://bahaisoul.com"),
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
