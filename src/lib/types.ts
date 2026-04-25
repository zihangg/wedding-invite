export interface Guest {
  id: string;
  slug: string;
  name: string;
  attending: boolean | null;
  guest_count: number;
  max_count: number;
  rsvp_submitted_at: string | null;
  created_at: string;
}
