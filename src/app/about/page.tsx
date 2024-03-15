import clsx from "clsx";
import Typography from "@/components/typography";
import baseStyles from "@/components/base.styles";
import Timeline, { TimelineItem } from "@/components/timeline";

import timelineData from "./timeline_items";

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

const Goals = () => (
  <>
    <div className="mx-auto w-fit text-center">
      <Typography as="h4" type="h3">
        Goals
      </Typography>
      <div
        className={clsx(
          baseStyles.background.highlight,
          "mx-auto my-2 h-1.5 w-1/3 rounded-full",
        )}
      />
    </div>

    <Typography as="p">
      Professionally, the core of my goals for the future are to keep growing as
      a developer while learning and contributing to exciting projects. All
      while working alongside and colaborating with other talented people.
    </Typography>

    <ul className="mx-4 list-inside divide-y divide-gray-200 md:mx-8 lg:mx-12 dark:divide-gray-700">
      <li className="pb-3">
        <Typography as="h5" type="h4">
          Become proficient with the Backend to become a Fullstack Developer
        </Typography>
        <ul className="list-inside list-disc">
          <li>
            I have experimented with some basic servers for mock data or basic
            personal projects.
          </li>
          <li>
            From databases to security and many other aspects of BE development,
            all I know is there is a lot I don't know.
          </li>
        </ul>
      </li>
      <li className="pb-3">
        <Typography as="h5" type="h4">
          Learn more of the art of UX design from scratch
        </Typography>
        <ul className="list-inside list-disc">
          <li>
            I have experience executing provided designs and ideas, or at least
            examples, as well as making adjustments as I felt they were needed,
            but not creating them myself.
          </li>
          <li>
            I'd like to practice the creative process to come up with more and
            better visuals
          </li>
          <li>
            I find the psychology behind UX design very interesting and would
            like to learn more about it and how to encorperate it into my work.
          </li>
          <li>Using art tools and related tools in the design process.</li>
        </ul>
      </li>
      <li className="pb-3">
        <Typography as="h5" type="h4">
          More technologies and frameworks outside of web applications.
        </Typography>
        <ul className="list-inside list-disc">
          <li>
            I'd love to learn how to do more UI/UX work in different
            environments, such as desktop or mobile apps.
          </li>
          <li>Physical projects like arduinio/raspberry pi based projects.</li>
        </ul>
      </li>
    </ul>
  </>
);

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
        <Typography as="h4" type="h3">
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

      <Goals />
    </div>
  );
}
