import Image from "next/image";
import { Seating } from "@/components/seating";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export default function SeatingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex flex-col items-center px-4 pt-20 pb-16 md:pt-28 md:pb-24">
        <Image
          src="/emblem.png"
          alt="H & N"
          width={400}
          height={400}
          className="w-24 md:w-28"
        />

        <h1
          className="mt-4 text-primary text-7xl md:text-8xl text-center leading-none"
          style={{ fontFamily: "var(--font-moontime)" }}
        >
          Find Your Seat
        </h1>

        <p
          className="mt-4 max-w-sm text-center text-primary-dark/70 text-base md:text-lg italic"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Search for your name to discover which table you&apos;ll be joining us
          at.
        </p>

        <Seating />
      </section>

      <div className="mt-auto">
        <AnimateOnScroll delay={100}>
          <Footer />
        </AnimateOnScroll>
      </div>
    </div>
  );
}
