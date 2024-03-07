import clsx from "clsx";
const theme_classes = {
  background: {
    main: "bg-white dark:bg-gray-900 dark:text-white",
  },
  buttonGroup: {
    container: "inline-flex rounded-full shadow-lg",
    children:
      "rounded-none first:rounded-l-full last:rounded-r-full focus:z-10",
    activeChild: "shadow-blue-500/50 shadow-md",
  },
  button: {
    base: clsx(
      "border focus:ring-2 font-medium text-sm px-4 py-2 ",
      "bg-white dark:bg-gray-800",
      "hover:bg-gray-100 dark:hover:bg-gray-700",
      "border-gray-300 dark:border-gray-700 dark:hover:border-gray-600",
      "focus:ring-gray-100 dark:focus:ring-gray-700",
    ),
    not_group: "rounded-full",
    default: "text-gray-900 dark:text-white",
    defaultActive: "text-blue-700 dark:text-blue-600",
  },
  menu: {
    container: "bg-white dark:bg-gray-800 rounded-lg shadow-lg",
    children: "rounded-none first:rounded-t-lg last:rounded-b-lg",
  },
};

export default theme_classes;
