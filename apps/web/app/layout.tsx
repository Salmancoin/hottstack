import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exam AI",
  description: "AI-powered exam preparation for IGCSE, AS-Level, and A-Level students."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
