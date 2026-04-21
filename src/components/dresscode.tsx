"use client";

import Image from "next/image";
import { AnimateOnScroll } from "./animate-on-scroll";

export function Dresscode() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 md:py-24">
      <AnimateOnScroll animation="animate-title">
        <h2
          className="text-primary text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-moontime)" }}
        >
          Dresscode
        </h2>
      </AnimateOnScroll>

      <AnimateOnScroll animation="animate-zoom" delay={200}>
        <div className="mt-4 w-48 md:w-64 overflow-hidden">
          <Image
            src="/attire.png"
            alt="Formal attire"
            width={800}
            height={600}
            className="w-full -mb-[15%]"
          />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={400}>
        <p
          className="mt-2 tracking-[0.15em] uppercase text-primary-dark text-lg md:text-xl font-bold"
          style={{ fontFamily: "var(--font-seasons)" }}
        >
          Formal Attire
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll animation="animate-pop" delay={600}>
        <Image
          src="/colors.png"
          alt="Color palette"
          width={800}
          height={200}
          className="mt-6 w-72 md:w-96"
        />
      </AnimateOnScroll>
    </section>
  );
}
