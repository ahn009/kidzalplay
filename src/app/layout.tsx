import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kidz at Play | Enrichment Beyond the Classroom",
  description:
    "Kidz at Play Recreation Community Service is a non-profit organization focused on child care, educational programs, and social development for children from 3 months to 13 years old.",
  keywords: [
    "Kidz at Play",
    "child care",
    "day care",
    "after school program",
    "non-profit",
    "Newark NJ",
    "Paterson NJ",
    "children",
    "education",
    "summer program",
  ],
  authors: [{ name: "Kidz at Play" }],
  icons: {
    icon: "/images/logo-icon.png",
  },
  openGraph: {
    title: "Kidz at Play | Enrichment Beyond the Classroom",
    description:
      "A non-profit organization providing quality child care and educational programs for children from 3 months to 13 years old.",
    url: "https://www.kidzatplay.org",
    siteName: "Kidz at Play",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
