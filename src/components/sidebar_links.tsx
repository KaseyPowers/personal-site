import clsx from "clsx";

import Link from "next/link";

import { NavItemDef } from "@/shared/nav_utils";

import baseStyles from "./base.styles";

export default function SidebarLinks({
  links,
  className,
}: {
  links: NavItemDef[];
  className?: string;
}) {
  return (
    <ul
      className={clsx(
        "flex w-full min-w-fit list-none flex-col items-stretch justify-center divide-y text-lg",
        className,
      )}
    >
      {links.map(({ id, name, href, target, icon, active }) => {
        return (
          <li key={id} className="group">
            <Link
              className={clsx(
                baseStyles.button.base,
                active && "bg-slate-100 dark:bg-slate-700",
                "flex flex-row items-center justify-center",
                "group-first:rounded-t-lg group-last:rounded-b-lg",
                icon && "sm:justify-between",
              )}
              href={href}
              target={target}
            >
              {icon && <span className="inline-block h-6 w-6">{icon}</span>}
              <span
                className={clsx(
                  icon
                    ? "ml-2 hidden text-right leading-none sm:inline-block"
                    : "text-center",
                )}
              >
                {name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
