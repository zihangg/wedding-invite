"use client";

import Image from "next/image";

const textShadow = "0 0 12px rgba(255,255,255,0.9), 0 0 24px rgba(255,255,255,0.6), 0 2px 4px rgba(255,255,255,0.8)";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center min-h-screen justify-center py-16">
        <p
          className="hero-fade-up hero-fade-up-1 text-primary-dark text-xl md:text-2xl tracking-wide italic"
          style={{ fontFamily: "'Times New Roman', Times, serif", textShadow }}
        >
          We&apos;re getting married!
        </p>

        <h1
          className="hero-fade-up hero-fade-up-2 text-primary-dark text-6xl md:text-8xl mt-6 leading-none"
          style={{ fontFamily: "var(--font-moontime)", textShadow }}
        >
          Lee Zi Hang
        </h1>

        <span
          className="hero-fade-up hero-fade-up-3 text-accent text-7xl md:text-8xl mt-2"
          style={{ fontFamily: "var(--font-moontime)", textShadow }}
        >
          &amp;
        </span>

        <h1
          className="hero-fade-up hero-fade-up-4 text-primary-dark text-6xl md:text-8xl mt-2 leading-none"
          style={{ fontFamily: "var(--font-moontime)", textShadow }}
        >
          Yin Goh Sher Nee
        </h1>

        {/* Ribbon separator */}
        <Image
          src="/ribbon.png"
          alt=""
          width={3198}
          height={618}
          className="hero-fade-up hero-fade-up-4 mt-6 w-[200px] md:w-[280px] drop-shadow-sm"
        />

        {/* Date */}
        <p
          className="hero-fade-up hero-fade-up-5 mt-6 tracking-[0.3em] uppercase text-primary-dark text-sm md:text-base font-bold"
          style={{ fontFamily: "var(--font-seasons)", textShadow }}
        >
          Saturday
        </p>
        <div className="hero-fade-up hero-fade-up-5 flex items-center gap-3 mt-2">
          <span className="text-5xl md:text-6xl text-primary-dark font-bold" style={{ fontFamily: "var(--font-seasons)", textShadow }}>10</span>
          <span className="text-4xl md:text-5xl text-primary-dark/40" style={{ fontFamily: "var(--font-seasons)", textShadow }}>|</span>
          <span className="text-5xl md:text-6xl text-primary-dark font-bold" style={{ fontFamily: "var(--font-seasons)", textShadow }}>10</span>
          <span className="text-4xl md:text-5xl text-primary-dark/40" style={{ fontFamily: "var(--font-seasons)", textShadow }}>|</span>
          <span className="text-5xl md:text-6xl text-primary-dark font-bold" style={{ fontFamily: "var(--font-seasons)", textShadow }}>26</span>
        </div>

        {/* Scroll prompt */}
        <div className="hero-fade-up hero-fade-up-6 mt-12 flex flex-col items-center">
          <p
            className="text-primary-dark/70 text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-moontime)", textShadow }}
          >
            Scroll for more
          </p>
          <span className="text-accent text-lg mt-1 animate-bounce">&#9660;</span>
        </div>
      </div>
    </section>
  );
}
