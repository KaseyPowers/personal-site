import clsx from "clsx";
/**
 * NOTES:
 * currently trying to focus on "slate" for the white-black scale colors
 */
const theme_classes = {
  background: {
    main: "bg-white dark:bg-slate-900",
    secondary: "bg-slate-200 dark:bg-slate-800",
    highlight: "bg-indigo-600 dark:bg-indigo-400",
  },
  border: {
    highlight: "border-indigo-600 dark:border-indigo-400",
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
    bordered:
      "border border-slate-300 dark:border-slate-700 dark:hover:border-slate-600",
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
    header: "text-slate-900 dark:text-white",
    base: "text-slate-500 dark:text-slate-400",
    secondary: "text-slate-800 dark:text-slate-300",
    highlight: "text-indigo-600 dark:text-indigo-400",
  },
};

export default theme_classes;
