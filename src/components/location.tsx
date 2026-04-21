import Image from "next/image";

export function Location() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 md:py-24">
      <h2
        className="text-primary text-7xl md:text-8xl"
        style={{ fontFamily: "var(--font-moontime)" }}
      >
        Location
      </h2>

      <p
        className="mt-6 tracking-[0.15em] uppercase text-primary-dark text-sm md:text-base font-bold text-center leading-relaxed"
        style={{ fontFamily: "var(--font-seasons)" }}
      >
        Parkroyal Penang Resort
        <br />
        Batu Ferringhi
      </p>

      <div className="mt-6 w-full max-w-sm md:max-w-md overflow-hidden">
        <Image
          src="/location.png"
          alt="Parkroyal Penang Resort"
          width={3215}
          height={3403}
          className="w-full -mt-[30%]"
        />
      </div>
    </section>
  );
}
