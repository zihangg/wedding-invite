"use client";

import { useActionState, useState } from "react";
import { submitRsvp, type RsvpState } from "@/app/actions/rsvp";
import type { Guest } from "@/lib/types";

export function RsvpForm({ guest }: { guest: Guest }) {
  const [state, formAction, isPending] = useActionState<RsvpState, FormData>(
    submitRsvp,
    null
  );
  const [attending, setAttending] = useState<string>(
    guest.attending === true ? "yes" : guest.attending === false ? "no" : ""
  );

  const alreadySubmitted = guest.rsvp_submitted_at !== null;
  const justSubmitted = state?.success === true;
  const [showForm, setShowForm] = useState(false);

  if (justSubmitted && !showForm) {
    return (
      <section className="flex flex-col items-center px-4 py-16 md:py-24" id="rsvp">
        <div className="max-w-md mx-auto text-center">
          <h2
            className="text-primary text-7xl md:text-8xl"
            style={{ fontFamily: "var(--font-moontime)" }}
          >
            Thank You
          </h2>
          <p
            className="mt-4 text-primary-dark/70 text-base md:text-lg"
            style={{ fontFamily: "var(--font-seasons)" }}
          >
            Your RSVP has been received. We look forward to{" "}
            {attending === "yes"
              ? "celebrating with you!"
              : "sharing our joy with you from afar."}
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 py-3 px-8 rounded-full border-2 border-primary-dark text-primary-dark tracking-[0.15em] uppercase text-sm font-bold cursor-pointer transition-all hover:bg-primary-dark hover:text-white"
            style={{ fontFamily: "var(--font-seasons)" }}
          >
            Update RSVP
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center px-4 py-16 md:py-24" id="rsvp">
      <h2
        className="text-primary text-7xl md:text-8xl"
        style={{ fontFamily: "var(--font-moontime)" }}
      >
        RSVP
      </h2>

      {alreadySubmitted ? (
        <p
          className="mt-2 text-primary-dark text-sm md:text-base text-center"
          style={{ fontFamily: "var(--font-seasons)" }}
        >
          You&apos;ve already responded. You may update below.
        </p>
      ) : (
        <p
          className="mt-2 tracking-[0.15em] uppercase text-primary-dark text-sm md:text-base font-bold text-center"
          style={{ fontFamily: "var(--font-seasons)" }}
        >
          Kindly respond by June 1st, 2026
        </p>
      )}

      <form action={formAction} className="mt-8 w-full max-w-sm space-y-6">
        <input type="hidden" name="slug" value={guest.slug} />

        {/* Name */}
        <div>
          <label
            className="block tracking-[0.15em] uppercase text-primary-dark font-bold text-xs md:text-sm mb-2"
            style={{ fontFamily: "var(--font-seasons)" }}
          >
            Name
          </label>
          <input
            type="text"
            value={guest.name}
            readOnly
            className="w-full border-b-2 border-primary-dark/50 bg-transparent px-1 py-2 text-primary-dark font-bold text-lg md:text-xl focus:outline-none"
            style={{ fontFamily: "var(--font-seasons)" }}
          />
        </div>

        {/* Attending */}
        <div>
          <label
            className="block tracking-[0.15em] uppercase text-primary-dark font-bold text-xs md:text-sm mb-3"
            style={{ fontFamily: "var(--font-seasons)" }}
          >
            Will you be attending?
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label
              className={`flex items-center justify-center min-h-14 px-4 py-3 rounded-full border-2 cursor-pointer transition-all ${
                attending === "yes"
                  ? "border-primary-dark bg-primary-dark/10 text-primary-dark"
                  : "border-primary-dark/50 text-primary-dark hover:border-primary-dark/50"
              }`}
            >
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={attending === "yes"}
                onChange={() => setAttending("yes")}
                className="sr-only"
              />
              <span
                className="text-base md:text-lg font-bold text-center"
                style={{ fontFamily: "var(--font-seasons)" }}
              >
                Joyfully Accept
              </span>
            </label>
            <label
              className={`flex items-center justify-center min-h-14 px-4 py-3 rounded-full border-2 cursor-pointer transition-all ${
                attending === "no"
                  ? "border-primary-dark bg-primary-dark/10 text-primary-dark"
                  : "border-primary-dark/50 text-primary-dark hover:border-primary-dark/50"
              }`}
            >
              <input
                type="radio"
                name="attending"
                value="no"
                checked={attending === "no"}
                onChange={() => setAttending("no")}
                className="sr-only"
              />
              <span
                className="text-base md:text-lg font-bold text-center"
                style={{ fontFamily: "var(--font-seasons)" }}
              >
                Regretfully Decline
              </span>
            </label>
          </div>
        </div>

        {/* Guest count */}
        {attending === "yes" && (
          <div>
            <label
              className="block tracking-[0.15em] uppercase text-primary-dark font-bold text-xs md:text-sm mb-2"
              style={{ fontFamily: "var(--font-seasons)" }}
            >
              Number of guests (including yourself)
            </label>
            <input
              type="number"
              name="guest_count"
              min={1}
              max={10}
              defaultValue={guest.guest_count || 1}
              className="w-full border-b-2 border-primary-dark/50 bg-transparent px-1 py-2 text-primary-dark font-bold text-lg md:text-xl focus:outline-none focus:border-primary"
              style={{ fontFamily: "var(--font-seasons)" }}
            />
          </div>
        )}

        {attending === "no" && (
          <input type="hidden" name="guest_count" value="0" />
        )}

        {state?.error && (
          <p className="text-red-500 text-sm text-center">{state.error}</p>
        )}

        <button
          type="submit"
          disabled={isPending || !attending}
          className="w-full py-3.5 rounded-full border-2 border-primary-dark text-primary-dark tracking-[0.15em] uppercase text-sm font-bold cursor-pointer transition-all hover:bg-primary-dark hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ fontFamily: "var(--font-seasons)" }}
        >
          {isPending
            ? "Sending..."
            : alreadySubmitted
              ? "Update RSVP"
              : "Send RSVP"}
        </button>
      </form>
    </section>
  );
}
