"use client";

import { useMemo, useState } from "react";
import { tables, type Table } from "@/lib/seating-data";

type Match = { table: Table; highlights: Set<string> };

const normalize = (value: string) => value.trim().toLowerCase();

export function Seating() {
  const [query, setQuery] = useState("");

  const matches = useMemo<Match[]>(() => {
    const q = normalize(query);
    if (q.length < 2) return [];

    const results: Match[] = [];
    for (const table of tables) {
      const highlights = new Set(
        table.guests.filter((guest) => normalize(guest).includes(q))
      );
      if (highlights.size > 0) {
        results.push({ table, highlights });
      }
    }
    return results;
  }, [query]);

  const q = normalize(query);
  const showEmpty = q.length >= 2 && matches.length === 0;

  return (
    <div className="w-full max-w-md flex flex-col items-center">
      {/* Search field */}
      <label className="relative w-full mt-8">
        <span className="sr-only">Search for your name</span>
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your name"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          className="w-full rounded-full border border-border bg-card/70 py-3.5 pl-12 pr-4 text-lg text-primary-dark placeholder:text-primary/40 outline-none transition-colors focus:border-primary italic"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        />
      </label>

      {/* Results */}
      <div className="w-full mt-8 flex flex-col gap-5">
        {matches.map(({ table, highlights }) => (
          <TableCard
            key={table.id}
            table={table}
            highlights={highlights}
          />
        ))}

        {showEmpty && (
          <p
            className="mt-2 text-center text-primary/60 text-base italic"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            We couldn&apos;t find that name. Try a different spelling, or reach
            out to the couple.
          </p>
        )}
      </div>
    </div>
  );
}

function TableCard({
  table,
  highlights,
}: {
  table: Table;
  highlights: Set<string>;
}) {
  return (
    <div className="w-full rounded-2xl border border-border bg-card/80 px-6 py-6 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <p
          className="text-primary/60 text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-seasons)" }}
        >
          Table
        </p>
        <p
          className="text-primary-dark text-6xl leading-none mt-1"
          style={{ fontFamily: "var(--font-seasons)" }}
        >
          {table.id}
        </p>
      </div>

      <div className="mt-5 h-px w-full bg-border" />

      <ul className="mt-5 flex flex-col items-center gap-1.5">
        {table.guests
          .filter((guest) => highlights.has(guest))
          .map((guest) => (
            <li
              key={guest}
              className="text-primary-dark text-lg"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              {guest}
            </li>
          ))}
      </ul>
    </div>
  );
}
