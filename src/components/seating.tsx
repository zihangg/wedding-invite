"use client";

import { useMemo, useRef, useState } from "react";
import { tables, type Table } from "@/lib/seating-data";
import { FloorPlan } from "./floor-plan";

type Match = { table: Table; highlights: Set<string> };
type Person = { guest: string; table: Table };

const normalize = (value: string) => value.trim().toLowerCase();
const personKey = (p: Person) => `${p.table.id}::${p.guest}`;

export function Seating() {
  const [query, setQuery] = useState("");
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

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

  // Flattened, alphabetised list of matched guests for disambiguation.
  const people = useMemo<Person[]>(
    () =>
      matches
        .flatMap(({ table, highlights }) =>
          table.guests
            .filter((guest) => highlights.has(guest))
            .map((guest) => ({ guest, table }))
        )
        .sort((a, b) => a.guest.localeCompare(b.guest)),
    [matches]
  );

  const q = normalize(query);
  const showEmpty = q.length >= 2 && matches.length === 0;
  const singleMatch = matches.length === 1 ? matches[0] : null;

  // The map only ever highlights the one table the guest has landed on:
  // a lone match resolves automatically, otherwise it waits for a pick.
  const activeTableId = singleMatch
    ? singleMatch.table.id
    : people.find((p) => personKey(p) === selectedKey)?.table.id ?? null;
  const highlightedIds = useMemo(
    () => new Set(activeTableId ? [activeTableId] : []),
    [activeTableId]
  );

  const planRef = useRef<HTMLDivElement>(null);
  const scrollToPlan = () =>
    planRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

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
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedKey(null);
          }}
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
        {/* One match resolves straight to the full card */}
        {singleMatch && (
          <TableCard
            table={singleMatch.table}
            highlights={singleMatch.highlights}
            onLocate={scrollToPlan}
          />
        )}

        {/* Several matches — pick your name to reveal your table */}
        {matches.length > 1 && (
          <>
            <p
              className="text-center text-primary/70 text-base italic"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Tap your name to find your table.
            </p>
            <div className="w-full flex flex-col gap-2.5">
              {people.map((person) => {
                const key = personKey(person);
                const selected = key === selectedKey;
                return (
                  <button
                    type="button"
                    key={key}
                    onClick={() => {
                      setSelectedKey(key);
                      scrollToPlan();
                    }}
                    className={`w-full flex items-center justify-between gap-4 rounded-xl border px-5 py-3 text-left cursor-pointer transition-colors ${
                      selected
                        ? "border-accent bg-accent-soft/50"
                        : "border-border bg-card/70 hover:border-primary"
                    }`}
                  >
                    <span
                      className="text-primary-dark text-lg"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      {person.guest}
                    </span>
                    <span
                      className={`shrink-0 text-xs tracking-[0.15em] uppercase font-bold ${
                        selected ? "text-primary-dark" : "text-primary"
                      }`}
                      style={{ fontFamily: "var(--font-seasons)" }}
                    >
                      Table {person.table.id}
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {showEmpty && (
          <p
            className="mt-2 text-center text-primary/60 text-base italic"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            We couldn&apos;t find that name. Try a different spelling, or head to
            the reception desk for assistance.
          </p>
        )}
      </div>

      {/* Floor plan */}
      <div ref={planRef} className="w-full mt-12 flex flex-col items-center">
        <p
          className="text-primary-dark text-sm tracking-[0.25em] uppercase font-bold"
          style={{ fontFamily: "var(--font-seasons)" }}
        >
          Floor Plan
        </p>
        <div className="w-full mt-4">
          <FloorPlan highlightedIds={highlightedIds} />
        </div>
      </div>
    </div>
  );
}

function TableCard({
  table,
  highlights,
  onLocate,
}: {
  table: Table;
  highlights: Set<string>;
  onLocate: () => void;
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

      <button
        type="button"
        onClick={onLocate}
        className="mt-5 mx-auto flex items-center gap-1.5 text-primary text-xs tracking-[0.15em] uppercase font-bold cursor-pointer transition-colors hover:text-primary-dark"
        style={{ fontFamily: "var(--font-seasons)" }}
      >
        See it on the floor plan
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 10l5 5 5-5" />
        </svg>
      </button>
    </div>
  );
}
