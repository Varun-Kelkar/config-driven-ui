import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Config-Driven UI Platform",
    template: "%s | Config Designer",
  },
  description:
    "Build dynamic, responsive layouts with drag-and-drop panel configuration. Design once, render anywhere with JSON-based UI configuration.",
  keywords: [
    "config-driven UI",
    "dashboard builder",
    "drag and drop",
    "layout builder",
    "JSON configuration",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Config Designer Team" }],
  creator: "Config Designer",
  publisher: "Config Designer",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Config-Driven UI Platform",
    description: "Build dynamic layouts with drag-and-drop panel configuration",
    siteName: "Config Designer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Config-Driven UI Platform",
    description: "Build dynamic layouts with drag-and-drop panel configuration",
    creator: "@configdesigner",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
