export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">
        The wedding of
      </p>
      <h1 className="font-serif text-5xl md:text-7xl text-primary-dark mb-4">
        Sher Nee & Zi Hang
      </h1>
      <div className="flex items-center gap-3 mb-8">
        <span className="h-px w-10 bg-accent" />
        <span className="text-accent text-sm tracking-widest">10 . 10 . 2026</span>
        <span className="h-px w-10 bg-accent" />
      </div>
      <p className="text-muted text-lg max-w-md">
        Please use your personalized invitation link to view the details and
        RSVP.
      </p>
    </div>
  );
}
