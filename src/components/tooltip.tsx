import clsx from "clsx";
import baseStyles from "./base.styles";

export default function Tooltip({
  children,
  className,
  text,
}: {
  children: React.ReactNode;
  className?: string;
  text: string;
}) {
  return (
    <div className={clsx("group relative", className)}>
      <div
        role="tooltip"
        className={clsx(
          "invisible group-has-[:hover]:visible",
          "whitespace-nowrap",
          "-top-6 text-sm",
          "left-1/2 -translate-x-1/2 -translate-y-1/2",
          "absolute z-10",
          baseStyles.background.reverse,
          baseStyles.typography.colors.reverse,
          "font-medium shadow-sm",
          "inline-block rounded-lg px-3 py-2 shadow-sm",
          "after:absolute after:h-2.5 after:w-2.5 after:rotate-45 after:bg-inherit",
          "after:-bottom-1 after:left-1/2 after:-translate-x-1/2",
        )}
      >
        {text}
      </div>
      {children}
    </div>
  );
}
