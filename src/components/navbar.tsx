"use client";

import { Fragment, useMemo } from "react";
import { usePathname } from "next/navigation";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";
import Link from "next/link";

import { NavItemDef, isItemActive } from "@/shared/nav_utils";

import DarkmodeToggle from "./darkmode_selector";
import theme_classes from "./base.styles";

export default function Navbar({ links }: { links: NavItemDef[] }) {
  const pathname = usePathname();

  const useLinks = useMemo(() => {
    return links.map((item) => ({
      ...item,
      current: isItemActive(item, pathname),
    }));
  }, [links, pathname]);

  return (
    <nav className="sticky top-0">
      {/* Example had two divs, one for width+padding, child for relative + flex, Noting if we need to add back */}
      <div
        className={clsx(
          theme_classes.background.main,
          "mx-auto flex max-w-screen-xl items-center justify-end space-x-2 px-2 pb-1 pt-4 sm:px-6 md:space-x-4",
        )}
      >
        <div className="hidden sm:mx-4 sm:block">
          <div className={theme_classes.buttonGroup.container}>
            {useLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  theme_classes.buttonGroup.children,
                  theme_classes.button.base,
                  theme_classes.button.bordered,
                  theme_classes.button.not_hidden,
                  item.current && theme_classes.buttonGroup.activeChild,
                  item.current
                    ? theme_classes.button.defaultActive
                    : theme_classes.button.default,
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile menu button*/}
        <Menu as="div" className="relative inline-block sm:hidden">
          <Menu.Button
            className={clsx(
              theme_classes.button.base,
              theme_classes.button.bordered,
              theme_classes.button.not_hidden,
              theme_classes.button.not_group,
              theme_classes.button.default,
              "inline-flex items-center justify-center",
            )}
          >
            Menu
            <XMarkIcon
              className="ml-2 block h-6 w-6 ui-not-open:hidden"
              aria-hidden="true"
            />
            <Bars3Icon
              className="blcok ml-2 h-6  w-6 ui-open:hidden"
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
            <Menu.Items
              className={clsx(
                "absolute right-0 mt-2",
                theme_classes.menu.container,
              )}
            >
              {useLinks.map((item) => (
                <Menu.Item
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={clsx(
                    "block",
                    theme_classes.menu.children,
                    theme_classes.button.base,
                    theme_classes.button.bordered,
                    theme_classes.button.not_hidden,
                    item.current
                      ? theme_classes.button.defaultActive
                      : theme_classes.button.default,
                  )}
                >
                  {item.name}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>

        <DarkmodeToggle />
      </div>
      <div className="h-5 w-full bg-gradient-to-b from-white dark:from-slate-900" />
    </nav>
  );
}
