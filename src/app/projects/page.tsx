import baseStyles from "@/components/base.styles";
import Card from "@/components/card";

import { allProjectCategories, ProjectDef } from "./project_definitions";
import Typography from "@/components/typography";

const ProjectCard = ({ project }: { project: ProjectDef }) => {
  const { title, subTitle, description } = project;
  return (
    <Card className="row-span-auto">
      <Card.Content>
        <Card.Title>{title}</Card.Title>
        {subTitle && <Card.SubTitle>{subTitle}</Card.SubTitle>}
        <p className="mt-1">{description}</p>
      </Card.Content>
    </Card>
  );
};

export default function Projects() {
  return allProjectCategories.map(
    ({ id, title, subTitle, projects }, index) => (
      <div key={id} className="my-4 space-y-4">
        <Typography as={index ? "h4" : "h3"} type={index ? "h4" : "h2"}>
          {title}
        </Typography>
        {subTitle && (
          <Typography as="h5" type="h5" color="sub">
            {subTitle}
          </Typography>
        )}
        <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    ),
  );
}
