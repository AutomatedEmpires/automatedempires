import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutomatedEmpires — Venture Studio",
  description:
    "AutomatedEmpires is a venture studio building software businesses: Explore&Earn, Sweepza, BidSpace, and LogLoads.",
  metadataBase: new URL("https://automatedempires.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
