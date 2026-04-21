"use client";

import Image from "next/image";
import { AnimateOnScroll } from "./animate-on-scroll";

export function Location() {
  return (
    <section className="relative -mt-48 pt-64 flex flex-col items-center justify-center px-4 pb-16 md:pb-24" style={{ background: "var(--background) url(/paper-texture.jpg) center / cover", maskImage: "linear-gradient(to bottom, transparent 0%, black 12rem)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12rem)" }}>
      <AnimateOnScroll animation="animate-title">
        <h2
          className="text-primary text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-moontime)" }}
        >
          Location
        </h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
        <p
          className="mt-6 tracking-[0.15em] uppercase text-primary-dark text-sm md:text-base font-bold text-center leading-relaxed"
          style={{ fontFamily: "var(--font-seasons)" }}
        >
          Parkroyal Penang Resort
          <br />
          Batu Ferringhi
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll animation="animate-zoom" delay={400}>
        <div className="mt-6 w-full max-w-sm md:max-w-md overflow-hidden">
          <Image
            src="/location.png"
            alt="Parkroyal Penang Resort"
            width={3215}
            height={3403}
            className="w-full -mt-[30%]"
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
