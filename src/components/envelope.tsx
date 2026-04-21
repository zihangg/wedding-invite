"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Envelope({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
    }
    return () => { document.body.style.overflow = ""; };
  }, [opened]);

  return (
    <div className="relative">
      {/* Invite content underneath */}
      <div
        className={`transition-opacity duration-700 ${
          opened ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!opened}
      >
        {children}
      </div>

      {/* Envelope overlay */}
      <div
        className={`envelope-overlay ${opened ? "envelope-opened" : ""}`}
        onClick={() => !opened && setOpened(true)}
        role="button"
        tabIndex={0}
        aria-label="Open envelope"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!opened) setOpened(true);
          }
        }}
      >
        {/* SVG clip paths with rounded tips */}
        <svg width="0" height="0" aria-hidden="true" className="absolute pointer-events-none">
          <defs>
            <clipPath id="flap-left" clipPathUnits="objectBoundingBox">
              <path d="M 0,0 L 0.94,0.44 C 1,0.47 1,0.53 0.94,0.56 L 0,1 Z" />
            </clipPath>
            <clipPath id="flap-right" clipPathUnits="objectBoundingBox">
              <path d="M 1,0 L 0.06,0.44 C 0,0.47 0,0.53 0.06,0.56 L 1,1 Z" />
            </clipPath>
            <clipPath id="flap-bottom" clipPathUnits="objectBoundingBox">
              <path d="M 0,1 L 1,1 L 0.56,0.06 C 0.53,0 0.47,0 0.44,0.06 Z" />
            </clipPath>
            <clipPath id="flap-top" clipPathUnits="objectBoundingBox">
              <path d="M 0,0 L 1,0 L 0.56,0.94 C 0.53,1 0.47,1 0.44,0.94 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Envelope flaps */}
        <div className="envelope-flap envelope-flap-left" />
        <div className="envelope-flap envelope-flap-right" />
        <div className="envelope-flap-bottom-wrap">
          <div className="envelope-flap envelope-flap-bottom" />
        </div>
        <div className="envelope-flap-top-wrap">
          <div className="envelope-flap envelope-flap-top" />
        </div>

        {/* Seal and CTA */}
        <div className="envelope-seal">
          <Image
            src="/stamp.png"
            alt="Wedding seal"
            width={260}
            height={260}
            priority
            className="drop-shadow-lg w-[180px] h-[180px] md:w-[260px] md:h-[260px]"
          />
          <p className="envelope-cta text-primary text-3xl md:text-5xl mt-5 tracking-wide" style={{ fontFamily: 'var(--font-script)' }}>
            Click to enter
          </p>
        </div>
      </div>
    </div>
  );
}
