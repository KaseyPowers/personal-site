import clsx from "clsx";
import baseStyles from "./base.styles";

const typeStyle = {
  default: "text-base font-normal",
  h1: "text-5xl font-extrabold",
  h2: "text-4xl font-bold",
  h3: "text-3xl font-bold",
  h4: "text-2xl font-bold",
  h5: "text-xl font-bold",
  hSecondary: "font-semibold",
} as const;

type TypeOptions = keyof typeof typeStyle;

type ColorOptions = keyof typeof baseStyles.typography;

function Typography({
  as: Component = "span",
  children,
  type = "default",
  color: propColor,
  className,
  noGutter = true,
}: {
  as?: React.ComponentType<{ className: string }> | React.ElementType;
  children: React.ReactNode;
  type?: TypeOptions;
  color?: ColorOptions;
  className?: string;
  noGutter?: boolean;
}) {
  let color = propColor;
  const isHeader = type.startsWith("h") && type !== "hSecondary";
  if (!color) {
    // default color is base except for headers
    color = isHeader ? "header" : "base";
  }
  let marginClass = !noGutter && isHeader && "mb-[0.35em]";
  return (
    <Component
      className={clsx(
        typeStyle[type],
        baseStyles.typography[color],
        marginClass,
        className,
      )}
    >
      {children}
    </Component>
  );
}

export default Typography;
