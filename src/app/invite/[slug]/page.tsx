import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Hero } from "@/components/hero";
import { EventDetails } from "@/components/event-details";
import { RsvpForm } from "@/components/rsvp-form";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import type { Guest } from "@/lib/types";

export default async function InvitePage(
  props: PageProps<"/invite/[slug]">
) {
  const { slug } = await props.params;

  const supabase = await createClient();
  const { data: guest, error } = await supabase
    .from("guests")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!guest) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AnimateOnScroll>
        <EventDetails />
      </AnimateOnScroll>
      <AnimateOnScroll delay={150}>
        <RsvpForm guest={guest as Guest} />
      </AnimateOnScroll>
      <AnimateOnScroll delay={100}>
        <Footer />
      </AnimateOnScroll>
    </div>
  );
}
