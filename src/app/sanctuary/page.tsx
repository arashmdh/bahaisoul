import type { Metadata } from "next";
import { SanctuaryRoom } from "@/components/sanctuary/SanctuaryRoom";

export const metadata: Metadata = {
  title: "Sanctuary",
  description:
    "Enter the Virtual Sanctuary — write a prayer intention in Persian, English, or Swedish, light the candle, and receive a sacred Bahá'í blessing from a library of thirty prayers.",
};

export default function SanctuaryPage() {
  return <SanctuaryRoom />;
}
