import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Providers from "./root_providers";

import baseStyles from "@/components/base.styles";

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
        className={`${inter.className} h-dvh antialiased ${baseStyles.background.main}`}
      >
        <Providers>
          <Navbar />
          <main className="h-dvh">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
