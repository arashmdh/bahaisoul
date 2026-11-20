import { Hero } from "@/components/threshold/Hero";
import { AboutSanctuary } from "@/components/threshold/AboutSanctuary";
import { NineDoorsPortal } from "@/components/threshold/NineDoorsPortal";
import { DailyQuote } from "@/components/threshold/DailyQuote";

export default function ThresholdPage() {
  return (
    <>
      <Hero />
      <AboutSanctuary compact />
      <NineDoorsPortal />
      <DailyQuote />
    </>
  );
}
