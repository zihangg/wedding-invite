export function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
      <svg width="24" height="24" viewBox="0 0 24 24" className="text-accent">
        <path
          d="M12 2L14.09 8.26L20.18 8.26L15.05 12.24L17.14 18.5L12 14.52L6.86 18.5L8.95 12.24L3.82 8.26L9.91 8.26L12 2Z"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
    </div>
  );
}
