import { OrnamentalDivider } from "./floral-decorations";

export function EventDetails() {
  return (
    <section className="py-4 px-6">
      <OrnamentalDivider />

      <div className="max-w-2xl mx-auto mt-4">
        <h2 className="font-serif text-3xl text-primary-dark text-center mb-10">
          Event Details
        </h2>
        <div className="grid grid-cols-2 gap-5 max-w-lg mx-auto">
          <div className="flex flex-col items-center justify-center bg-card rounded-2xl border border-border p-6 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <p className="text-primary tracking-[0.2em] uppercase text-xs mb-1">Time</p>
            <p className="font-serif text-xl text-primary-dark">7:00 PM</p>
            <p className="text-muted mt-0.5 text-sm">Dinner reception</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-card rounded-2xl border border-border p-6 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <p className="text-primary tracking-[0.2em] uppercase text-xs mb-1">Venue</p>
            <p className="font-serif text-xl text-primary-dark">Park Royal Resort</p>
            <p className="text-muted mt-0.5 text-sm">Penang</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-card rounded-2xl border border-border p-6 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
              </svg>
            </div>
            <p className="text-primary tracking-[0.2em] uppercase text-xs mb-1">Dress Code</p>
            <p className="font-serif text-xl text-primary-dark">Semi-Formal</p>
            <p className="text-muted mt-0.5 text-sm">to Formal</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-card rounded-2xl border border-border p-6 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125V6m7.5 12-6.401-6.402M18 15.75a3.75 3.75 0 0 0 0-5.304L11.599 4.044" />
              </svg>
            </div>
            <p className="text-primary tracking-[0.2em] uppercase text-xs mb-1">Color Theme</p>
            <div className="flex gap-2.5 mt-2">
              <span className="w-8 h-8 rounded-full bg-[#5b7fb5] border-2 border-white shadow-sm" title="Cornflower Blue" />
              <span className="w-8 h-8 rounded-full bg-[#d4a843] border-2 border-white shadow-sm" title="Butter Yellow" />
              <span className="w-8 h-8 rounded-full bg-[#fdf8ef] border-2 border-border shadow-sm" title="Ivory Cream" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
