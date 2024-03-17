import clsx from "clsx";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import baseStyles from "@/components/base.styles";
import Card from "@/components/card";
import SectionTitle from "@/components/section_title";
import { GithubIcon } from "@/components/icons";
import Tooltip from "@/components/tooltip";

interface ProjectDef {
  id: string;
  title: string;
  subTitle?: string;
  description: string;
  // link for a webpage
  link?: {
    href: string;
    label: string;
  };
  // github links
  github?: {
    href: string;
    label: string;
  };
}

const allProjects: ProjectDef[] = [
  {
    id: "simple-game",
    title: "Simple Web Game",
    description:
      "This Simple Web Game has the goal to be a base for a simple game engine for simple turn-based games. To keep the scope reasonable, the initial version is focused on a single type of card game",
    github: {
      href: "https://github.com/KaseyPowers/Simple-Web-Game",
      label: "View On Github",
    },
  },
  {
    id: "test2",
    title: "Test 2",
    description: "project 2",
    link: {
      href: "#",
      label: "Test Link",
    },
    github: {
      href: "#",
      label: "Test Github",
    },
  },
];

const ProjectCard = ({ project }: { project: ProjectDef }) => {
  const { title, subTitle, description, link, github } = project;
  return (
    <Card className="row-span-auto">
      <Card.Content className="space-y-2">
        <Card.Title>{title}</Card.Title>
        {subTitle && <Card.SubTitle>{subTitle}</Card.SubTitle>}
        <p className="mt-1">{description}</p>
        {(link || github) && (
          <div className="mt- flex flex-row items-center justify-between">
            {link ? (
              <Link
                href={link.href}
                target="_blank"
                aria-label={link.label}
                className={baseStyles.links}
              >
                {link.label}
                <ArrowTopRightOnSquareIcon className="ms-4 inline-block h-6 w-6" />
              </Link>
            ) : (
              <div />
            )}
            {github && (
              <Tooltip text={github.label}>
                <Link
                  target="_blank"
                  href={github.href}
                  aria-label={github.label}
                  className={clsx(
                    "inline-block w-fit",
                    baseStyles.button.base,
                    baseStyles.button.not_group,
                    baseStyles.button.textDefault,
                    baseStyles.button.not_hidden,
                    baseStyles.button.bgDefault,
                    baseStyles.button.not_bordered,
                  )}
                >
                  <GithubIcon className="h-6 w-6" />
                </Link>
              </Tooltip>
            )}
          </div>
        )}
      </Card.Content>
    </Card>
  );
};

export default function Projects() {
  return (
    <div className="space-y-4">
      <SectionTitle pageHeader title="Projects" />
      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
