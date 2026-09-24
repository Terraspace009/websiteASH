import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import InteractionLayer from "../components/InteractionLayer";
import "./globals.css";
import "./interactions.css";
export const metadata: Metadata = {
  title: {
    default: "Aishwarya Shukla | AI Engineer & Creative Technologist",
    template: "%s | Aishwarya Shukla",
  },
  description:
    "Selected work by Aishwarya Shukla in machine learning, computer vision, TouchDesigner and interactive visual systems.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <InteractionLayer />
      </body>
    </html>
  );
}
