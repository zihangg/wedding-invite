export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-28 pb-12 px-6 text-center bg-gradient-to-b from-blue-pale to-background">
      <p className="hero-fade-up hero-fade-up-1 text-primary tracking-[0.3em] uppercase text-xs mb-10">
        Together with their families
      </p>

      <h1 className="hero-fade-up hero-fade-up-2 font-serif text-6xl md:text-8xl text-primary-dark leading-tight">
        Sher Nee
      </h1>

      <div className="flex items-center justify-center gap-4 my-5">
        <span className="hero-line h-px w-14 bg-accent origin-right" />
        <span className="hero-fade-up hero-fade-up-3 font-serif text-accent text-3xl italic">&amp;</span>
        <span className="hero-line h-px w-14 bg-accent origin-left" />
      </div>

      <h1 className="hero-fade-up hero-fade-up-4 font-serif text-6xl md:text-8xl text-primary-dark leading-tight">
        Zi Hang
      </h1>

      <p className="hero-fade-up hero-fade-up-5 mt-10 tracking-[0.2em] uppercase text-xs text-muted leading-relaxed">
        Request the pleasure of your company
        <br />
        at the celebration of their marriage
      </p>

      <div className="hero-fade-up hero-fade-up-6 mt-8 inline-block border border-border rounded-full px-10 py-4 bg-card/60 backdrop-blur-sm">
        <p className="font-serif text-xl md:text-2xl text-primary-dark">
          Saturday, 10th October 2026
        </p>
      </div>
    </section>
  );
}
