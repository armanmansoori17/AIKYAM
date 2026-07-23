import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIKYAM 2K26 | Acharya Institute of Graduate Studies",
  description:
    "AIKYAM 2K26 — The Grand Tech & Cultural Fest of Acharya Institute of Graduate Studies, NAAC Re-Accredited 'A+', Soladevanahalli, Bengaluru.",
  keywords: [
    "AIKYAM",
    "AIGS",
    "tech fest",
    "Acharya Institute",
    "college event",
    "Bengaluru",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
