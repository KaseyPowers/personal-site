import clsx from "clsx";
import Typography from "@/components/typography";
import baseStyles from "@/components/base.styles";

import { CalendarIcon } from "@heroicons/react/24/solid";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span
    className={clsx(
      baseStyles.background.secondary,
      baseStyles.typography.secondary,
      "mx-1 my-0.5 rounded px-2.5 py-0.5 text-xs font-medium sm:text-base",
    )}
  >
    {children}
  </span>
);

interface TimelineItem {
  id: string;
  title: string;
}

const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <ol className={clsx("relative border-s", baseStyles.border.base)}>
    {items.map(({ id, title }) => (
      <li key={id} className="mb-5 ms-6">
        <span
          className={clsx(
            "absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900",
            baseStyles.background.highlight,
            baseStyles.typography.highlight_reverse,
          )}
        >
          <CalendarIcon className="w-2/3" />
        </span>
        <Typography as="h4" type="h4" className="mb-0.5 leading-none">
          {title}
        </Typography>
        <time
          className={clsx(
            "mb-2 block text-sm font-light leading-none",
            baseStyles.typography.sub,
          )}
        >
          Start - End
        </time>
        <p>Details</p>
      </li>
    ))}
  </ol>
);

const skills = [
  "HTML",
  "CSS",
  "React.js",
  "Javascript (JS)",
  "Typescript (TS)",
  "TailwindCSS",
  "GIT",
  "Github",
  "Responsive Design",
  "Communication",
];

const timelineData: TimelineItem[] = [
  {
    id: "first",
    title: "First",
  },
  {
    id: "second",
    title: "Second",
  },
];

export default function AboutMe() {
  return (
    <div className="space-y-4 text-lg">
      <div className="text-center">
        <div className="mx-auto w-fit">
          <Typography as="h3" type="h2">
            About Me
          </Typography>
          <div
            className={clsx(
              baseStyles.background.highlight,
              "mx-auto my-2 h-1.5 w-1/3 rounded-full",
            )}
          />
        </div>
        <div className="mx-auto w-3/4 max-w-screen-sm text-base sm:text-xl">
          My technical skills, where I have been, and my goals
        </div>
      </div>
      <div className="flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row sm:space-x-4 ">
        <div className="flex-1 space-y-4">
          <Typography as="h4" type="h3">
            Overview
          </Typography>
          <Typography as="p">
            I{"'"}m a Frontend Focused Software Developer. Creating and
            maintaing Websites, SPAs, embedded widgets, and shared utility
            libraries. Love tackling new challenges and learning new
            technologies and skills in the process. Along with learning I
            enthusiasticly share my knowledge with others, mentoring when I can,
            and generally being approachable to help in any way.
          </Typography>
          <Typography as="p">
            My goals professionally are to keep growing as a developer while
            learning and contributing to exciting projects. All while working
            alongside and colaborating with other talented people.
          </Typography>
        </div>
        <div className="flex-1 space-y-4">
          <Typography as="h4" type="h3">
            Skills
          </Typography>
          <div className="flex max-w-md flex-wrap gap-1.5">
            {skills.map((text) => (
              <Badge key={text}>{text}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-fit text-center">
        <Typography as="h3" type="h2">
          Timeline
        </Typography>
        <div
          className={clsx(
            baseStyles.background.highlight,
            "mx-auto my-2 h-1.5 w-1/3 rounded-full",
          )}
        />
      </div>

      <Timeline items={timelineData} />
    </div>
  );
}
