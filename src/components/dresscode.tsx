import Image from "next/image";

export function Dresscode() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 md:py-24">
      <h2
        className="text-primary text-7xl md:text-8xl"
        style={{ fontFamily: "var(--font-moontime)" }}
      >
        Dresscode
      </h2>

      <Image
        src="/attire.png"
        alt="Formal attire"
        width={800}
        height={600}
        className="mt-4 w-48 md:w-64"
      />

      <p
        className="mt-4 tracking-[0.15em] uppercase text-primary-dark text-lg md:text-xl font-bold"
        style={{ fontFamily: "var(--font-seasons)" }}
      >
        Formal Attire
      </p>

      <Image
        src="/colors.png"
        alt="Color palette"
        width={800}
        height={200}
        className="mt-6 w-72 md:w-96"
      />
    </section>
  );
}
