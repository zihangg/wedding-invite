import Link from "next/link";

export default function InviteNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="font-serif text-4xl text-primary mb-4">
        Invitation Not Found
      </h1>
      <p className="text-muted max-w-md">
        We couldn&apos;t find your invitation. Please check the link you
        received or contact the couple for assistance.
      </p>
      <Link
        href="/"
        className="mt-8 text-accent hover:underline underline-offset-4"
      >
        Return Home
      </Link>
    </div>
  );
}
