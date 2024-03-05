import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import { Navbar2 } from "@/components/navbar";
import { ThemeScript } from "@/components/darkmode/darkmode_logic";

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
    <html lang="en">
      <ThemeScript />
      <body
        className={`${inter.className} antialiased h-dvh bg-white dark:bg-gray-900 dark:text-white`}
      >
        <Navbar2 />
        <div className="h-dvh">{children}</div>
        {/* <Navbar>{children}</Navbar> */}
      </body>
    </html>
  );
}
