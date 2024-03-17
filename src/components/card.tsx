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

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={clsx(className, baseStyles.card.innerContainer)}>
    {children}
  </div>
);
Card.Content = CardContent;

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <h5 className={clsx(className, baseStyles.card.title)}>{children}</h5>;
Card.Title = CardTitle;

const CardSubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <h6 className={clsx(className, baseStyles.card.subTitle)}>{children}</h6>;
Card.SubTitle = CardSubTitle;

export default Card;
