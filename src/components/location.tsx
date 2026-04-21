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

      <AnimateOnScroll delay={600}>
        <div className="mt-6 flex gap-6">
          <a
            href="https://waze.com/ul/hw0zr1hj5v"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-primary-dark flex items-center justify-center cursor-pointer transition-all hover:scale-110"
            aria-label="Open in Waze"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-primary-dark" fill="currentColor">
              <path d="M13.314 1.59c-.225.003-.45.013-.675.03-2.165.155-4.295.924-6.069 2.327-2.194 1.732-3.296 4.325-3.496 7.05h.002c-.093 1.22-.23 2.15-.469 2.63-.238.479-.42.638-1.24.639C.27 14.259-.4 15.612.266 16.482c1.248 1.657 2.902 2.705 4.72 3.364a2.198 2.198 0 00-.033.367 2.198 2.198 0 002.2 2.197 2.198 2.198 0 002.128-1.668c1.307.12 2.607.14 3.824.1.364-.012.73-.045 1.094-.092a2.198 2.198 0 002.127 1.66 2.198 2.198 0 002.2-2.197 2.198 2.198 0 00-.151-.797 12.155 12.155 0 002.303-1.549c2.094-1.807 3.511-4.399 3.302-7.404-.112-1.723-.761-3.298-1.748-4.608-2.143-2.86-5.53-4.309-8.918-4.265zm.366 1.54c.312.008.623.027.933.063 2.48.288 4.842 1.496 6.4 3.577v.001c.829 1.1 1.355 2.386 1.446 3.792v.003c.173 2.477-.965 4.583-2.777 6.147a10.66 10.66 0 01-2.375 1.535 2.198 2.198 0 00-.98-.234 2.198 2.198 0 00-1.934 1.158 9.894 9.894 0 01-1.338.146 27.323 27.323 0 01-3.971-.148 2.198 2.198 0 00-1.932-1.156 2.198 2.198 0 00-1.347.463c-1.626-.553-3.078-1.422-4.155-2.762 1.052-.096 1.916-.6 2.319-1.408.443-.889.53-1.947.625-3.198v-.002c.175-2.391 1.11-4.536 2.92-5.964h.002c1.77-1.402 3.978-2.061 6.164-2.012zm-3.157 4.638c-.688 0-1.252.579-1.252 1.298 0 .72.564 1.297 1.252 1.297.689 0 1.252-.577 1.252-1.297 0-.711-.563-1.298-1.252-1.298zm5.514 0c-.688 0-1.25.579-1.25 1.298-.008.72.554 1.297 1.25 1.297.688 0 1.252-.577 1.252-1.297 0-.711-.564-1.298-1.252-1.298zM9.641 11.78a.72.72 0 00-.588.32.692.692 0 00-.11.54c.345 1.783 2.175 3.129 4.264 3.129h.125c1.056-.032 2.026-.343 2.816-.922.767-.556 1.29-1.316 1.477-2.137a.746.746 0 00-.094-.547.69.69 0 00-.445-.32.714.714 0 00-.867.539c-.22.93-1.299 1.9-2.934 1.94-1.572.046-2.738-.986-2.926-1.956a.72.72 0 00-.718-.586Z"/>
            </svg>
          </a>
          <a
            href="https://maps.app.goo.gl/TFKZ4F92T4bjeQvx6?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-primary-dark flex items-center justify-center cursor-pointer transition-all hover:scale-110"
            aria-label="Open in Google Maps"
          >
            <svg viewBox="0 0 92.3 132.3" className="w-6 h-6 text-primary-dark" fill="currentColor">
              <path d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z"/>
              <path d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z"/>
              <path d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"/>
              <path d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"/>
              <path d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"/>
            </svg>
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
