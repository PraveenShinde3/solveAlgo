import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SolveAlgo",
  description:
    "Move beyond the hype of interview prep by mastering algorithms that build a lasting foundation for your tech career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto min-h-screen flex flex-col justify-center p-3 pb-20   font-[family-name:var(--font-geist-sans)]">
          <main className="  flex flex-col items-center  sm:px-6 sm:py-12">
            {children}
            <Toaster />
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
