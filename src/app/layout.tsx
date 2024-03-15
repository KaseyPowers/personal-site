import type { Metadata } from "next";

import { Inter } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

import type { NavItemDef } from "@/shared/nav_utils";

import baseStyles from "@/components/base.styles";
import Providers from "./root_providers";

import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kasey Powers",
  description: "My Personal Site",
};

const navigation: NavItemDef[] = [
  { id: "home", name: "Home", href: "/", exact: true },
  { id: "about_me", name: "About Me", href: "/about" },
  { id: "projects", name: "Projects", href: "/projects" },
] as const;

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
          "h-dvh w-screen antialiased",
          baseStyles.background.main,
          baseStyles.typography.base,
          "flex flex-row items-stretch",
        )}
      >
        <Providers>
          <Sidebar />
          <div className="flex-auto overflow-y-auto">
            <main className="container mx-auto px-4 pt-8">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
