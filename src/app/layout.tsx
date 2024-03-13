import type { Metadata } from "next";

import { Inter } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

import type { NavItemDef } from "@/shared/nav_utils";

import Navbar from "@/components/navbar";
import Logo from "@/components/logo";
import MyLinks from "@/components/socials";

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
              "flex flex-initial flex-col items-stretch p-4",
            )}
          >
            <div className="flex flex-1 flex-col">
              <div className="mx-auto w-20 sm:w-28 lg:w-40">
                <Logo />
              </div>
              <h1 className="order-1 mt-1.5 block w-min text-2xl font-black leading-none sm:text-4xl sm:leading-none lg:text-5xl lg:leading-none">
                Kasey
              </h1>
              <span className="order-2 mt-0 text-right text-xs leading-none sm:order-1 sm:mt-0.5 sm:text-sm sm:leading-normal lg:mt-1.5">
                (He/They)
              </span>
              <h1 className="order-1 -mt-1.5 block w-min text-2xl font-black leading-none sm:-mt-2.5 sm:text-4xl sm:leading-none lg:-mt-4 lg:text-5xl lg:leading-none">
                Powers
              </h1>
              <h2 className="order-3 w-min text-base font-medium leading-none sm:text-lg sm:font-bold sm:leading-none">
                Software Developer
              </h2>
            </div>

            {/* <div className="flex flex-1 flex-col items-center justify-center"> */}
            <MyLinks className="flex-1" />
            {/* </div> */}

            {/* Footer element can just be an empty flex-1 if we don't have any footer content */}
            <div className="flex flex-1 flex-col justify-end">
              <span>Optional Footer</span>
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
