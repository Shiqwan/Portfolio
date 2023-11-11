import { CardProjectHeading } from "../C Featured Projects/Repeat Components/CardProjectHeading";
import { Description } from "../C Featured Projects/Repeat Components/Description";
import "./CardProject.css";

export const CardProject = (props) => {
  let imgProject = props.projects.image;
  let nameProject = props.projects.name;
  let descriptionProject = props.projects.description;
  let tagsProject = props.projects.tags;

  return (
    <>
      <div className="img-wrapper">
        <img src={imgProject} alt={nameProject} className="project-img" />
      </div>
      <div className="card-wrapper">
        <div className="info-wrapper">
          <CardProjectHeading className="project-head" text={nameProject} />
          <Description
            className="project-paragraph"
            text={descriptionProject}
          />
        </div>
      </div>
    </>
  );
};
