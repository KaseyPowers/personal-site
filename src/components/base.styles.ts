import clsx from "clsx";
const theme_classes = {
  background: {
    main: "bg-white dark:bg-slate-900",
  },
  buttonGroup: {
    container: "inline-flex rounded-full shadow-lg",
    children:
      "rounded-none first:rounded-l-full last:rounded-r-full focus:z-10",
    activeChild: "shadow-blue-500/50 shadow-md",
  },
  button: {
    base: clsx(
      "border px-4 py-2 text-sm font-medium focus:ring-2 ",
      "bg-white dark:bg-slate-800",
      "hover:bg-slate-100 dark:hover:bg-slate-700",
      "border-slate-300 dark:border-slate-700 dark:hover:border-slate-600",
      "focus:ring-slate-100 dark:focus:ring-slate-700",
    ),
    not_group: "rounded-full",
    default: "text-gray-900 dark:text-white",
    defaultActive: "text-blue-700 dark:text-blue-600",
  },
  menu: {
    container: "bg-white dark:bg-gray-800 rounded-lg shadow-lg",
    children: "rounded-none first:rounded-t-lg last:rounded-b-lg",
  },
  typography: {
    header: "text-slate-900 dark:text-white",
    base: "text-slate-500 dark:text-slate-400",
  },
};

export default theme_classes;
