"use client";
import { useCallback, useLayoutEffect, useState } from "react";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

export default function DarkmodeToggle({ className }: { className: string }) {
  const [theme, setTheme] = useState<string>(
    () => window.localStorage.getItem("theme") ?? defaultTheme
  );

  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const newVal = current === "dark" ? "light" : "dark";
      window.localStorage.setItem("theme", newVal);
      return newVal;
    });
  }, [setTheme]);

  return (
    <button onClick={toggleTheme} className={className}>
      <SunIcon className="h-6 w-6 block dark:hidden" />
      <MoonIcon className="h-6 w-6 hidden dark:block" />
    </button>
  );
}
