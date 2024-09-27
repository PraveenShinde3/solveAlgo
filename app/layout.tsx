import type { Metadata } from "next";
import localFont from "next/font/local";
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
        <div className=" min-h-screen flex justify-center  p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className=" container flex flex-col items-center  ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
