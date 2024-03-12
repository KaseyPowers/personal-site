import type { Metadata } from "next";

import { Inter } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

import type { NavItemDef } from "@/shared/nav_utils";

import Navbar from "@/components/navbar";
import Logo from "@/components/logo";
import Typography from "@/components/typography";

import baseStyles from "@/components/base.styles";
import Providers from "./root_providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kasey Powers",
  description: "My Personal Site",
};

const navigation: NavItemDef[] = [
  { name: "Home", href: "/", exact: true },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Projects", href: "/projects" },
  { name: "Calendar", href: "#" },
] as const;

/**
 * something to track if page has name and info on page.
 * Probably the home page and/or "About Me"
 */
const hideTitleOnItems: NavItemDef[] = [
  // get home item
  navigation[0],
  // make an exact dashboard as if child pages wouldn't have their own title
  // {
  //   ...navigation[1],
  //   exact: true,
  // },
];

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
          <aside
            className={clsx(
              baseStyles.typography.header,
              "flex flex-initial flex-col items-stretch border-r-2 p-4",
            )}
          >
            <div className="mx-auto w-20 sm:w-28 lg:w-40">
              <Logo />
            </div>
            <h1 className="mt-1.5 block w-min text-2xl font-black leading-none sm:text-4xl sm:leading-none lg:text-5xl lg:leading-none">
              Kasey
            </h1>
            <small className="mt-0.5 text-right lg:mt-1.5">(He/They)</small>
            <h1 className="-mt-1.5 block w-min text-2xl font-black leading-none sm:-mt-2.5 sm:text-4xl sm:leading-none lg:-mt-4 lg:text-5xl lg:leading-none">
              Powers
            </h1>
            <Typography as="h2" type="h5" className="w-min">
              Software Developer
            </Typography>
            <div className="flex flex-grow flex-col items-center justify-center">
              <div>Links</div>
              <div>More Links</div>
              <div>...</div>
            </div>
          </aside>
          <div className="max-h-dvh flex-auto overflow-y-auto">
            <Navbar links={navigation} />
            <main className="container mx-auto h-dvh px-4">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
