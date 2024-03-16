import clsx from "clsx";
import baseStyles from "./base.styles";

type TypeOptions = keyof typeof baseStyles.typography.sizes;

type ColorOptions = keyof typeof baseStyles.typography.colors;

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
        baseStyles.typography.sizes[type],
        baseStyles.typography.colors[color],
        marginClass,
        className,
      )}
    >
      {children}
    </Component>
  );
}

export default Typography;
