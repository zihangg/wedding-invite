import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { Timeline } from "@/components/timeline";
import { Dresscode } from "@/components/dresscode";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export const metadata: Metadata = {
  title: "Itinerary",
  description: "Location, dress code, and timeline for the celebration.",
  openGraph: {
    siteName: "Zi Hang & Sher Nee",
    title: "Itinerary",
    description: "Location, dress code, and timeline for the celebration.",
  },
};

export default function ItineraryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Location />
      <Dresscode />
      <Timeline />
      <AnimateOnScroll delay={100}>
        <Footer />
      </AnimateOnScroll>
    </div>
  );
}
