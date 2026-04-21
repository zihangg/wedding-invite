"use client";

import Image from "next/image";
import { AnimateOnScroll } from "./animate-on-scroll";

const events = [
  {
    title: "Tea Ceremony",
    chinese: "敬茶",
    time: "4:00pm - 5:30pm",
    image: "/tea-ceremony.png",
    side: "left" as const,
  },
  {
    title: "Cocktails",
    chinese: "鸡尾酒会",
    time: "6:30pm",
    image: "/cocktails.png",
    side: "right" as const,
  },
  {
    title: "Photobooth",
    chinese: "拍照环节",
    time: "6:30pm - 9:30pm",
    image: "/photobooth.png",
    side: "left" as const,
  },
  {
    title: "Dinner Banquet",
    chinese: "结婚晚宴",
    time: "7:00pm onwards",
    image: "/dinner-banquet.png",
    side: "right" as const,
  },
];

export function Timeline() {
  return (
    <section className="flex flex-col items-center px-4 py-16 md:py-24">
      <AnimateOnScroll animation="animate-title">
        <h2
          className="text-primary text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-moontime)" }}
        >
          Timeline
        </h2>
      </AnimateOnScroll>

      {/* Dog illustration */}
      <AnimateOnScroll animation="animate-zoom" delay={200}>
        <Image
          src="/timeline.png"
          alt=""
          width={800}
          height={800}
          className="w-40 md:w-52 mt-2"
        />
      </AnimateOnScroll>

      {/* Timeline events */}
      <div className="relative w-full max-w-md md:max-w-lg mt-4">
        {/* Center dashed line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-primary/30 -translate-x-px" />

        {events.map((event, i) => (
          <AnimateOnScroll
            key={event.title}
            animation={event.side === "left" ? "animate-slide-left" : "animate-slide-right"}
            delay={300 + i * 200}
          >
            <div
              className={`relative flex items-center py-8 ${
                event.side === "left" ? "justify-start" : "justify-end"
              }`}
            >
              {/* Horizontal dashed connector from event side toward center */}
              <div
                className={`absolute top-1/2 border-t-2 border-dashed border-primary/30 ${
                  event.side === "left"
                    ? "left-[45%] right-1/2"
                    : "left-1/2 right-[45%]"
                }`}
              />

              {/* Event content */}
              <div
                className={`relative z-10 flex flex-col items-center text-center w-[45%] ${
                  event.side === "left" ? "mr-auto" : "ml-auto"
                }`}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={400}
                  className="w-24 md:w-32"
                />
                <p
                  className="mt-1 text-2xl md:text-3xl text-primary-dark font-bold"
                  style={{ fontFamily: "var(--font-seasons)" }}
                >
                  {event.title}
                </p>
                <p className="text-primary/60 text-xl md:text-2xl" style={{ fontFamily: "var(--font-hanyi-scholar)" }}>
                  {event.chinese}
                </p>
                <p
                  className="text-primary-dark/70 text-base md:text-lg italic"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {event.time}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
