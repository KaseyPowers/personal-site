import clsx from "clsx";
import baseStyles from "./base.styles";
import Typography from "./typography";

export default function SectionTitle({
  title,
  subText,
  pageHeader,
}: {
  title: string;
  subText?: string;
  pageHeader?: boolean;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto w-fit">
        <Typography
          as={pageHeader ? "h3" : "h4"}
          type={pageHeader ? "h2" : "h3"}
        >
          {title}
        </Typography>
        <div
          className={clsx(
            baseStyles.background.highlight,
            "mx-auto my-2 h-1.5 w-1/3 rounded-full",
          )}
        />
      </div>
      {subText && (
        <div className="mx-auto w-3/4 max-w-screen-sm text-base sm:text-xl">
          My technical skills, where I have been, and my goals
        </div>
      )}
    </div>
  );
}
