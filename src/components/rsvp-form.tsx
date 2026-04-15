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

  if (justSubmitted) {
    return (
      <section className="py-16 px-6" id="rsvp">
        <div className="max-w-md mx-auto text-center bg-card rounded-2xl border border-border p-10 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl text-primary-dark mb-4">
            Thank You!
          </h2>
          <p className="text-muted">
            Your RSVP has been received. We look forward to{" "}
            {attending === "yes"
              ? "celebrating with you!"
              : "sharing our joy with you from afar."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-6" id="rsvp">
      <div className="max-w-md mx-auto bg-card rounded-2xl border border-border p-8 md:p-10 shadow-sm">
        <h2 className="font-serif text-3xl text-primary-dark text-center mb-2">
          Kindly Reply
        </h2>
        {alreadySubmitted && (
          <p className="text-center text-muted text-sm mb-8">
            You&apos;ve already responded. You may update your RSVP below.
          </p>
        )}
        {!alreadySubmitted && (
          <p className="text-center text-muted text-sm mb-8">
            Kindly respond by June 1st, 2026
          </p>
        )}

        <form action={formAction} className="space-y-6">
          <input type="hidden" name="slug" value={guest.slug} />

          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-primary mb-2">
              Name
            </label>
            <input
              type="text"
              value={guest.name}
              readOnly
              className="w-full border border-border rounded-lg px-4 py-3 bg-blue-pale/50 text-primary-dark font-serif text-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-primary mb-3">
              Will you be attending?
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label
                className={`flex items-center justify-center min-h-14 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                  attending === "yes"
                    ? "border-primary bg-blue-light text-primary-dark shadow-sm"
                    : "border-border text-muted hover:border-primary/40 hover:bg-blue-pale"
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
                <span className="font-serif text-base text-center">Joyfully Accept</span>
              </label>
              <label
                className={`flex items-center justify-center min-h-14 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                  attending === "no"
                    ? "border-primary bg-blue-light text-primary-dark shadow-sm"
                    : "border-border text-muted hover:border-primary/40 hover:bg-blue-pale"
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
                <span className="font-serif text-base text-center">Regretfully Decline</span>
              </label>
            </div>
          </div>

          {attending === "yes" && (
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-primary mb-2">
                Number of guests (including yourself)
              </label>
              <input
                type="number"
                name="guest_count"
                min={1}
                max={10}
                defaultValue={guest.guest_count || 1}
                className="w-full border border-border rounded-lg px-4 py-3 bg-white text-primary-dark font-serif text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
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
            className="w-full py-3.5 rounded-lg bg-primary text-white font-serif text-lg tracking-wide transition-all hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
          >
            {isPending
              ? "Sending..."
              : alreadySubmitted
                ? "Update RSVP"
                : "Send RSVP"}
          </button>
        </form>
      </div>
    </section>
  );
}
