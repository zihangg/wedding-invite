import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { Timeline } from "@/components/timeline";
import { Dresscode } from "@/components/dresscode";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Envelope } from "@/components/envelope";

export default function ItineraryPage() {
  return (
    <Envelope>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <Location />
        <Dresscode />
        <Timeline />
        <AnimateOnScroll delay={100}>
          <Footer />
        </AnimateOnScroll>
      </div>
    </Envelope>
  );
}
