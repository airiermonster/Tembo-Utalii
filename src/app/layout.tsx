import { Navigation } from "@/components/Navigation";
import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Tembo Utalii",
  description: "Tourism Survey Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'var(--font-parkinsans)' }}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}