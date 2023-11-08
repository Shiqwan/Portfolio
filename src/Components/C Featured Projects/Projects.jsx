import { CardProjectHeading } from "./Repeat Components/CardProjectHeading";
import { CardProject } from "./CardProject";
import projectData from "../projects.json";
import "./Projects.css";

let projectsArray = projectData.projects;
console.log(projectsArray);

export const Projects = () => {
  return (
    <div className="project-container">
      <CardProjectHeading className={"projects-main-head"} text={"Projects"} />
      {projectsArray.map((project, index) => (
        <CardProject key={index} projects={project} />
      ))}
    </div>
  );
};
