import clsx from "clsx";
import Typography from "@/components/typography";
import baseStyles from "@/components/base.styles";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span
    className={clsx(
      baseStyles.background.secondary,
      baseStyles.typography.secondary,
      "mx-1 my-0.5 rounded px-2.5 py-0.5 font-medium",
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
        <div className="mx-auto w-3/4 max-w-screen-md text-xl">
          Here you can learn about me, my technical skills, where I have been,
          and my goals
        </div>
      </div>
      <div className="flex flex-row">
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

      <div>TODO: Timeline</div>
    </div>
  );
}
