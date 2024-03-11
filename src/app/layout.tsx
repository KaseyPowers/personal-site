import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Providers from "./root_providers";

import baseStyles from "@/components/base.styles";
import clsx from "clsx";

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
        className={clsx(
          inter.className,
          "h-dvh antialiased",
          baseStyles.background.main,
          baseStyles.typography.base,
        )}
      >
        <Providers>
          <Navbar />
          <main className="container mx-auto h-dvh px-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
