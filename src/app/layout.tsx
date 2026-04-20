import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const moontime = localFont({
  src: "../fonts/MoonTime.ttf",
  variable: "--font-moontime",
});

const anastasiaScript = localFont({
  src: "../fonts/AnastasiaScript.ttf",
  variable: "--font-anastasia",
});

const theSeasons = localFont({
  src: "../fonts/TheSeasons.ttf",
  variable: "--font-seasons",
});

export const metadata: Metadata = {
  title: "You're Invited",
  description: "We would be honored to have you celebrate with us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${moontime.variable} ${anastasiaScript.variable} ${theSeasons.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
