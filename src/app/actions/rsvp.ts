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
  const slug = formData.get("slug") as string;
  const attending = formData.get("attending") === "yes";
  const guestCount = parseInt(formData.get("guest_count") as string, 10) || 1;

  if (!slug) {
    return { success: false, error: "Missing guest identifier." };
  }

  const supabase = await createClient();
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
  return { success: true };
}
