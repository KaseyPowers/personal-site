"use client";
import { useCallback, useEffect, useState } from "react";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

import { useTheme } from "next-themes";

export default function DarkmodeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className={className}>
      <SunIcon className="h-6 w-6 block dark:hidden" />
      <MoonIcon className="h-6 w-6 hidden dark:block" />
    </button>
  );
}
