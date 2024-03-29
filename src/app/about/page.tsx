import clsx from "clsx";
import Link from "next/link";
import Typography from "@/components/typography";
import baseStyles from "@/components/base.styles";
import Timeline, { TimelineItem } from "@/components/timeline";

import timelineData from "./timeline_items";
import SectionTitle from "@/components/section_title";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span
    className={clsx(
      baseStyles.background.secondary,
      baseStyles.typography.colors.secondary,
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

const goalsText = [
  {
    title: "Become proficient with the Backend to become a Fullstack Developer",
    items: [
      "I have experimented with some basic servers for mock data or basic personal projects.",
      <>
        currently attempting websocket communication in Next.JS (with some help
        from{" "}
        <Link
          className={baseStyles.links}
          href="https://create.t3.gg/"
          target="_blank"
        >
          T3
        </Link>
        ) for the web-game project.
      </>,
      "From databases to security and many other aspects of BE development, all I know is there is a lot I don't know.",
    ],
  },
  {
    title: "Learn more of the art of UX design from scratch",
    items: [
      "I have experience executing provided designs and ideas, or at least examples, as well as making adjustments as I felt they were needed, but not creating them myself.",
      "I'd like to practice the creative process to come up with more and better visuals",
      "I find the psychology behind UX design very interesting and would like to learn more about it and how to encorperate it into my work.",
      "Using art tools and related tools in the design process.",
    ],
  },
  {
    title: "More technologies and frameworks outside of web applications.",
    items: [
      "I'd love to learn how to do more UI/UX work in different environments, such as desktop or mobile apps.",
      "Physical projects like arduinio/raspberry pi based projects.",
    ],
  },
];

const Goals = () => (
  <>
    <SectionTitle title="Goals" />

    <Typography as="p">
      Professionally, the core of my goals for the future are to keep growing as
      a developer while learning and contributing to exciting projects. All
      while working alongside and colaborating with other talented people.
    </Typography>

    <ul className="mx-4 list-inside divide-y divide-gray-200 md:mx-8 lg:mx-12 dark:divide-gray-700">
      {goalsText.map((goal) => (
        <li className="py-3" key={goal.title}>
          <Typography as="h5" type="h4">
            {goal.title}
          </Typography>
          <ul className="list-inside list-disc">
            {/* Index for key generally avoided, but for static content like this It feels okay  */}
            {goal.items.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </>
);

const overviewText =
  "I am a Frontend Focused Software Developer with experience creating and maintaining a variety of websites, SPAs, embedded widgets, and shared utility libraries. I enjoy tackling new challenges, learning new technologies and skills in the process. Along with gathering knowledge I enthusiastically share it with others, mentoring when I can and generally being approachable to help in any way.";

export default function AboutMe() {
  return (
    <div className="space-y-4 text-lg">
      <SectionTitle
        pageHeader
        title="About Me"
        subText="My technical skills, where I have been, and my goals"
      />
      <div className="flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row sm:space-x-4 ">
        <div className="flex-1 space-y-4">
          <Typography as="h4" type="h3">
            Overview
          </Typography>
          <Typography as="p">{overviewText}</Typography>
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

      <SectionTitle title="Timeline" />
      <Timeline items={timelineData} />

      <Goals />
    </div>
  );
}
