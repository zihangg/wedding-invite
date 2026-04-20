import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col items-center px-4 py-16 md:py-24">
      <Image
        src="/emblem.png"
        alt="H & N"
        width={400}
        height={400}
        className="w-36 md:w-48"
      />
      <p
        className="mt-4 text-primary-dark text-sm md:text-base"
        style={{ fontFamily: "var(--font-seasons)" }}
      >
        We can&apos;t wait to celebrate with you.
      </p>
      <p
        className="mt-2 text-primary-dark/60 text-xs md:text-sm tracking-[0.3em]"
        style={{ fontFamily: "var(--font-seasons)" }}
      >
        10 . 10 . 2026
      </p>
    </footer>
  );
}
