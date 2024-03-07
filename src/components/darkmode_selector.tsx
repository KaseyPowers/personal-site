"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

import { useTheme } from "next-themes";

import clsx from "clsx";

import theme_classes from "./base.styles";

export default function DarkmodeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        theme_classes.button.base,
        theme_classes.button.not_group,
        theme_classes.button.default,
        "shadow-lg",
      )}
    >
      <SunIcon className="h-6 w-6 block dark:hidden" />
      <MoonIcon className="h-6 w-6 hidden dark:block" />
    </button>
  );
}
