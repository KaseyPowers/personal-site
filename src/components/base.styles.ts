import clsx from "clsx";
/**
 * NOTES:
 * currently trying to focus on "slate" for the white-black scale colors
 */
const background = {
  main: "bg-white dark:bg-slate-900",
  secondary: "bg-slate-200 dark:bg-slate-800",
  highlight: "bg-indigo-600 dark:bg-indigo-400",
} as const;

const border = {
  base: "border-slate-300 dark:border-slate-700",
  baseHover: "dark:hover:border-slate-600",
  highlight: "border-indigo-600 dark:border-indigo-400",
} as const;

const typographyColors = {
  header: "text-slate-900 dark:text-white",
  base: "text-slate-500 dark:text-slate-400",
  sub: "text-slate-400 dark:text-slate-500",
  secondary: "text-slate-800 dark:text-slate-300",
  highlight: "text-indigo-600 dark:text-indigo-400",
  highlight_reverse: "text-indigo-200 dark:text-indigo-800",
} as const;

const typographySizes = {
  default: "text-base font-normal",
  medium: "text-lg font-medium",
  hSecondary: "font-semibold",
  h1: "text-5xl font-extrabold",
  h2: "text-4xl font-bold",
  h3: "text-3xl font-bold",
  h4: "text-2xl font-bold",
  h5: "text-xl font-bold",
} as const;

const baseStyles = {
  background,
  border,
  card: {
    container: clsx(
      background.secondary,
      border.base,
      typographyColors.secondary,
      "rounded-lg border-2",
    ),
    innerContainer: "p-4 leading-tight",
    title: clsx(
      typographyColors.header,
      // I know leading-none only will apply to the text-xl and be overridden 2xl on xs+ screens
      "flex items-center justify-between leading-none",
      typographySizes.h5,
      "sm:2xl",
    ),
    subTitle: clsx(typographyColors.highlight, typographySizes.h5),
  },
  buttonGroup: {
    container: "inline-flex rounded-full shadow-lg",
    children:
      "rounded-none first:rounded-l-full last:rounded-r-full focus:z-10",
    activeChild: "shadow-indigo-500/50 shadow-md",
  },
  button: {
    base: clsx(
      "px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2",
      "hover:bg-slate-100 dark:hover:bg-slate-700",
    ),
    bordered: "border",
    not_hidden: "bg-white dark:bg-slate-800",
    not_group: "rounded-full",
    default:
      "text-gray-900 dark:text-white focus:ring-slate-100 dark:focus:ring-slate-700",
    defaultActive:
      "text-indigo-700 dark:text-indigo-600 focus:ring-indigo-100 dark:focus:ring-indigo-700",
  },
  menu: {
    container: "bg-white dark:bg-gray-800 rounded-lg shadow-lg",
    children: "rounded-none first:rounded-t-lg last:rounded-b-lg",
  },
  typography: {
    colors: typographyColors,
    sizes: typographySizes,
  },
  links:
    "no-underline hover:underline text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 hover:dark:text-cyan-200",
};

export default baseStyles;
