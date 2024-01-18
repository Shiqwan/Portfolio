import Headlines from "../C Featured Projects/Repeat Components/Headlines";
import ProjectList from "../C Featured Projects/ProjectList";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects-wrapper">
      <Headlines title="Featured Projects" />
      <ProjectList />
    </div>
  );
};

export default Projects;
