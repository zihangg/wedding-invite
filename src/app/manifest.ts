import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "You're Invited",
    short_name: "Wedding",
    icons: [
      { src: "/emblem.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    display: "standalone",
    background_color: "#f5f0eb",
    theme_color: "#3a5a8c",
  };
}
