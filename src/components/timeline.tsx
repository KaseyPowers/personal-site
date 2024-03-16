import clsx from "clsx";

import { CalendarIcon } from "@heroicons/react/24/solid";

import baseStyles from "./base.styles";
import Card from "./card";

export interface TimelineItem {
  id: string;
  title: string;
  time: string | [string, string];
  contentTitle?: string;
  content: React.ReactNode;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol
      className={clsx(
        "grid w-full auto-cols-max grid-cols-timeline gap-x-8 py-4 pl-4 pr-2 lg:grid-cols-timeline-alt",
        "before:row-[1/_span_100] before:bg-slate-300 before:dark:bg-slate-700",
        "before:col-start-1 lg:before:col-start-2",
        "overflow-x-clip",
      )}
    >
      {items.map(({ id, title, contentTitle, time, content }) => (
        <li
          key={id}
          className={clsx(
            "col-start-2 row-span-2 lg:odd:col-start-1 lg:even:col-start-3 lg:[&:nth-child(2)]:row-start-2",
            "group mb-8 max-w-full last:mb-0",
          )}
        >
          <Card content>
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
                  baseStyles.typography.colors.highlight_reverse,
                  "before:absolute before:top-1/2 before:h-0.5 before:w-4 before:bg-slate-300 before:dark:bg-slate-700",
                  "before:left-full lg:group-odd:before:left-auto lg:group-odd:before:right-full",
                )}
              >
                <CalendarIcon className="w-2/3" />
              </span>
              <Card.Title>
                <span>{title}</span>
                <time
                  className={clsx(
                    "ml-0.5 block text-sm font-light leading-none xs:ml-1",
                    baseStyles.typography.colors.sub,
                  )}
                >
                  {Array.isArray(time) ? (
                    <>
                      <span className="whitespace-nowrap">{time[0]}</span>
                      <span className="mx-1">-</span>
                      <span className="whitespace-nowrap">{time[1]}</span>
                    </>
                  ) : (
                    time
                  )}
                </time>
              </Card.Title>
            </div>

            {contentTitle && <Card.SubTitle>{contentTitle}</Card.SubTitle>}

            {typeof content === "string" ? (
              <p>{content}</p>
            ) : (
              <div>{content}</div>
            )}
          </Card>
        </li>
      ))}
    </ol>
  );
}
