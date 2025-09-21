"use client";
import HeroSection from "@/src/view/landing/hero-section";
import Communities from "@/src/view/landing/Communities";
import Property from "@/src/view/landing/property";
import { CallToAction } from "@/src/view/landing/call-to-action";

export default function Home() {
  return (
    <div className="bg-[#fff]">
      <HeroSection />
      <Communities />
      <Property />
      <CallToAction />
    </div>
  );
}
