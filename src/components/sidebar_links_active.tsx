"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { NavItemDef, isItemActive } from "@/shared/nav_utils";

import SidebarLinks from "./sidebar_links";

export default function ActiveSidebarLinks({
  links,
  className,
}: {
  links: NavItemDef[];
  className?: string;
}) {
  const pathname = usePathname();

  const useLinks = useMemo(() => {
    return links.map((item) => ({
      ...item,
      active: isItemActive(item, pathname),
    }));
  }, [links, pathname]);

  return <SidebarLinks links={useLinks} className={className} />;
}
