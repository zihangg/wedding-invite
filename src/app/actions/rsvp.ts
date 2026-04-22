"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export type RsvpState = {
  success: boolean;
  error?: string;
} | null;

export async function submitRsvp(
  _prevState: RsvpState,
  formData: FormData
): Promise<RsvpState> {
  const slug = formData.get("slug") as string | null;
  const attending = formData.get("attending") === "yes";
  const guestCount = parseInt(formData.get("guest_count") as string, 10) || 1;

  const supabase = await createClient();

  if (slug) {
    // Slug-based invite: update existing guest
    const { error } = await supabase
      .from("guests")
      .update({
        attending,
        guest_count: attending ? guestCount : 0,
        rsvp_submitted_at: new Date().toISOString(),
      })
      .eq("slug", slug);

    if (error) {
      return { success: false, error: "Failed to submit RSVP. Please try again." };
    }

    revalidatePath(`/invite/${slug}`);
  } else {
    // Open invite: insert new guest
    const name = (formData.get("name") as string)?.trim();
    if (!name) {
      return { success: false, error: "Please enter your name." };
    }

    const openSlug = `open-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const { error } = await supabase.from("guests").insert({
      slug: openSlug,
      name,
      attending,
      guest_count: attending ? guestCount : 0,
      rsvp_submitted_at: new Date().toISOString(),
    });

    if (error) {
      return { success: false, error: "Failed to submit RSVP. Please try again." };
    }

    revalidatePath("/invite");
  }

  return { success: true };
}
