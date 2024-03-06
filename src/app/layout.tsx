import type { Metadata } from "next";
import Script from "next/script";

import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Providers from "./root_providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kasey Powers",
  description: "My Personal Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased h-dvh bg-white dark:bg-gray-900 dark:text-white`}
      >
        <Providers>
          <Navbar />
          <div className="h-dvh">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
