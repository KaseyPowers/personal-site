import clsx from "clsx";

import { CalendarIcon } from "@heroicons/react/24/solid";

import baseStyles from "./base.styles";
import Typography from "./typography";

export interface TimelineItem {
  id: string;
  title: string;
  time: string;
  contentTitle?: string;
  content: React.ReactNode;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol
      className={clsx(
        "grid-cols-timeline lg:grid-cols-timeline-alt grid w-full auto-cols-max gap-x-8 py-4",
        "before:row-[1/_span_100] before:bg-slate-300 before:dark:bg-slate-700",
        "before:col-start-1 lg:before:col-start-2",
      )}
    >
      {items.map(({ id, title, contentTitle, time, content }) => (
        <li
          key={id}
          className={clsx(
            "col-start-2 row-span-2 lg:odd:col-start-1 lg:even:col-start-3 lg:[&:nth-child(2)]:row-start-2",
            "group mb-8 last:mb-0",
          )}
        >
          <div
            className={clsx(
              "rounded-lg border-2 px-4 py-4",
              baseStyles.background.secondary,
              baseStyles.border.base,
              baseStyles.typography.secondary,
            )}
          >
            <div className="relative mb-0.5 leading-none">
              <span
                className={clsx(
                  "absolute top-1/2 -translate-y-1/2",
                  "-left-13 -translate-x-1/2",
                  "lg:group-odd:-right-13 lg:group-odd:left-auto lg:group-odd:translate-x-1/2",
                  "h-9 w-9",
                  "flex items-center justify-center rounded-full",
                  // "ring-8 ring-white dark:ring-gray-900",
                  baseStyles.background.highlight,
                  baseStyles.typography.highlight_reverse,
                  "before:absolute before:top-1/2 before:h-0.5 before:w-4 before:bg-slate-300 before:dark:bg-slate-700",
                  "before:left-full lg:group-odd:before:left-auto lg:group-odd:before:right-full",
                )}
              >
                <CalendarIcon className="w-2/3" />
              </span>
              <Typography
                as="h4"
                type="h4"
                className="flex items-center justify-between leading-none"
              >
                <span>{title}</span>

                <time
                  className={clsx(
                    "mb-1 block text-sm font-light leading-none",
                    baseStyles.typography.sub,
                  )}
                >
                  {time}
                </time>
              </Typography>
            </div>

            {contentTitle && (
              <Typography as="h5" type="h5" color="highlight">
                {contentTitle}
              </Typography>
            )}

            {typeof content === "string" ? (
              <p className="leading-tight">{content}</p>
            ) : (
              <div className="leading-tight">{content}</div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

const TimelineOld = ({ items }: { items: TimelineItem[] }) => (
  <ol className={clsx("relative border-s", baseStyles.border.base)}>
    {items.map(({ id, title, time, content, contentTitle }) => (
      <li key={id} className="mb-5 ms-6">
        <span
          className={clsx(
            "absolute  -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900",
            baseStyles.background.highlight,
            baseStyles.typography.highlight_reverse,
          )}
        >
          <CalendarIcon className="w-2/3" />
        </span>
        <Typography as="h4" type="h4" className="mb-0.5 leading-none">
          <span>{title}</span>
          {contentTitle && (
            <Typography as="small" type="hSecondary" className="ms-12">
              {contentTitle}
            </Typography>
          )}
        </Typography>
        <time
          className={clsx(
            "mb-1 block text-sm font-light leading-none",
            baseStyles.typography.sub,
          )}
        >
          {time}
        </time>
        {typeof content === "string" ? (
          <p className="leading-tight">{content}</p>
        ) : (
          <div className="leading-tight">{content}</div>
        )}
      </li>
    ))}
  </ol>
);
