import clsx from "clsx";
import baseStyles from "./base.styles";

const Card = ({
  children,
  content,
  className,
}: {
  children: React.ReactNode;
  content?: boolean;
  className?: string;
}) => (
  <div
    className={clsx(
      baseStyles.card.container,
      content && baseStyles.card.innerContainer,
      className,
    )}
  >
    {children}
  </div>
);

const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className={baseStyles.card.innerContainer}>{children}</div>
);
Card.Content = CardContent;

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h5 className={baseStyles.card.title}>{children}</h5>
);
Card.Title = CardTitle;

const CardSubTitle = ({ children }: { children: React.ReactNode }) => (
  <h6 className={baseStyles.card.subTitle}>{children}</h6>
);
Card.SubTitle = CardSubTitle;

export default Card;
