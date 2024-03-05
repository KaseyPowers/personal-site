"use client";

import { Fragment, useMemo } from "react";
import { usePathname } from "next/navigation";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import DarkmodeToggle from "../darkmode/darkmode_selector";
import clsx from "clsx";
import Link from "next/link";

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center max-h-full">
      <nav className="flex-1 w-full text-xl font-bold">
        <div className="flex justify-between p-4 max-w-screen-xl mx-auto">
          <div>Logo</div>
          <div className="flex flex-row space-x-8">
            <span>Links</span>
            <DarkmodeToggle />
          </div>
        </div>
      </nav>
      <main className="flex-auto overflow-auto">{children}</main>
    </div>
  );
}

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Team", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Calendar", href: "#" },
];

export const Navbar2 = () => {
  const pathname = usePathname();
  /** NOTE: Will likely need to update to handle deeper links if that happens   */
  const useLinks = useMemo(() => {
    return navigation.map((item) => ({
      ...item,
      current: item.href === pathname,
    }));
  }, [pathname]);

  return (
    <nav className="sticky top-0 bg-white border-gray-200 dark:bg-gray-900">
      {/* Example had two divs, one for width+padding, child for relative + flex, Noting if we need to add back */}
      <div className="mx-auto max-w-screen-xl py-4 px-2 sm:px-6 flex justify-between items-center space-x-4">
        <div className="flex flex-shrink-0 items-center">TODO: LOGO</div>
        <div className="hidden sm:mx-4 sm:block">
          <div className="flex space-x-4 rounded-full shadow-lg">
            {useLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          {/* Mobile menu button*/}
          <Menu as="div" className="relative inline-block sm:hidden">
            <Menu.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              Menu
              <XMarkIcon
                className="block ml-2 ui-not-open:hidden h-6 w-6"
                aria-hidden="true"
              />
              <Bars3Icon
                className="blcok ml-2 ui-open:hidden  h-6 w-6"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                {useLinks.map((item) => (
                  <Menu.Item
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className="block px-3 py-2 ui-active:bg-gray-900 ui-active:text-white ui-not-active:text-gray-300 ui-not-active:hover:bg-gray-700 ui-not-active:hover:text-white"
                  >
                    {item.name}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
          <DarkmodeToggle className="pr-2" />
        </div>
      </div>

      {/* <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {useLinks.map((item) => (
            <Disclosure.Button
              key={item.name}
              as={Link}
              href={item.href}
              className={clsx(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel> */}
    </nav>
  );
};
