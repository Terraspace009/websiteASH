import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aishwarya S | Creative Technology Portfolio",
  description:
    "AI engineer and visual systems artist building intelligent visual instruments across computer vision, real-time systems, and TouchDesigner.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
