import clsx from "clsx";
import Typography from "@/components/typography";
import baseStyles from "@/components/base.styles";
import Timeline, { TimelineItem } from "@/components/timeline";

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

const timelineData: TimelineItem[] = [
  {
    id: "start",
    title: "Early Life",
    time: "1993 - 2011",
    content:
      'Pre-Career, also known as "Childhood", no notable career acheivements.',
  },
  {
    id: "college",
    title: "Florida Institute of Technology",
    time: "2011 - 2015",
    content: (
      <>
        B.S. Software Engineering
        <br />
        Minor in Computational Mathmatics
      </>
    ),
  },
  {
    id: "availity",
    title: "Availity",
    time: "2015 - Mar 2019",
    contentTitle: "Intern -> Developer 1A",
    content: (
      <ul className="list-inside list-disc">
        <li>
          Worked in a regulated environment, complying with HIPAA and government
          accessibility requirements.
        </li>
        <li>
          Rebuilt the home page and navigation, with new frameworks (angularJS)
          and styling, serving 50k unique visitors per month.
        </li>
        <li>
          Continuous contributions to companies{"'"} open source tools and
          libraries.
        </li>
        <li>
          Reworked internal angular services to be usable with other frameworks
          like React (
          <a
            href="https://github.com/Availity/sdk-js"
            className={baseStyles.links}
          >
            github.com/Availity/sdk-js
          </a>
          ). While doing so, cleaned up code with new ES6 syntax and updated
          tests using Jest.
        </li>
        <li>
          Responsible for the mentorship and training of team members new to
          front-end development.
        </li>
        <li>
          Provided assistance to employees across teams with AngularJS as well
          as internal tools and libraries.
        </li>
      </ul>
    ),
  },
  {
    id: "primeTrust",
    title: "Prime Trust",
    contentTitle: "Senior Software Developer",
    time: "2015 - Mar 2019",
    content: (
      <ul className="list-inside list-disc">
        <li>
          Tech lead of a team of full-stack engineers for project migrating key
          internal front-end tools used by 75+ in sales, compliance and finance
          operation from Ember to React JSX with GraphQL and Ant Design
          frameworks.
        </li>
        <li>Complied with requirements of financial regulations.</li>
        <li>
          Built suites of tools to improve developer experience, including
          hooks, contexts, wrapping react-router to build navigation UI, and
          GraphQL tools that automatically apply filters from pagination and
          generating filter options from the schema.
        </li>
        <li>
          Built and maintained 10+ apps and embedded scripts integrated into
          customer applications, including a credit-card processing app that
          handled over 2 Million transactions.
        </li>
        <li>
          Improved security and PCI compliance of credit card and other private
          data collection while refactoring to isolate relevant codebases
          without interrupting the users experience.
        </li>
        <li>
          Maintained a reputation as a helpful resource across the company for
          questions around the front-end as well as mentored 5 full-stack
          developers starting from a range of experience from recent bootcamp
          grads to senior level by teaching Javascript, ES6 and React concepts
          until they were comfortable doing feature work unassisted.
        </li>
      </ul>
    ),
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
