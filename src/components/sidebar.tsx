import clsx from "clsx";

import Link from "next/link";

import { EnvelopeIcon, DocumentTextIcon } from "@heroicons/react/24/solid";

import { NavItemDef } from "@/shared/nav_utils";

import { GithubIcon, LinkedInIcon } from "./icons";

import Logo from "./logo";
import ActiveSidebarLinks from "./sidebar_links_active";
import SidebarLinks from "./sidebar_links";

import baseStyles from "./base.styles";
import DarkmodeToggle from "./darkmode_selector";

const navItems: NavItemDef[] = [
  { id: "home", name: "Home", href: "/", exact: true },
  { id: "about_me", name: "About Me", href: "/about" },
  { id: "projects", name: "Projects", href: "/projects" },
] as const;

const socialLinks: NavItemDef[] = [
  {
    id: "linkedIn",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kaseypowers/",
    icon: <LinkedInIcon />,
    target: "_blank",
  },
  {
    id: "github",
    name: "Github",
    href: "https://github.com/KaseyPowers",
    icon: <GithubIcon />,
    target: "_blank",
  },
  {
    id: "email",
    name: "Contact Me",
    href: "mailto:kaseyepowers@gmail.com",
    icon: <EnvelopeIcon />,
    target: "_blank",
  },
  {
    id: "resume",
    name: "Resume",
    href: "/Resume-Kasey-Powers.pdf",
    icon: <DocumentTextIcon />,
    target: "_blank",
  },
];

export default function Sidebar() {
  return (
    <aside
      className={clsx(
        baseStyles.typography.colors.header,
        "flex flex-initial flex-col items-stretch space-y-8 px-2 py-4 xs:px-4",
      )}
    >
      <div className="flex flex-col">
        <div className="mx-auto w-20 sm:w-28 lg:w-40">
          <Link href="/">
            <Logo />
          </Link>
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

      <ActiveSidebarLinks links={navItems} />

      <SidebarLinks links={socialLinks} />

      <div className="flex flex-grow flex-col items-start justify-end">
        <DarkmodeToggle className="" />
      </div>
    </aside>
  );
}
