import { CardProjectHeading } from "../C Featured Projects/Repeat Components/CardProjectHeading";
import { Description } from "../C Featured Projects/Repeat Components/Description";
import { Button } from "../C Featured Projects/Repeat Components/Button";
import "./CardProject.css";

export const CardProject = (props) => {
  let imgProject = props.projects.image;
  let nameProject = props.projects.name;
  let descriptionProject = props.projects.description;
  let netlifyProject = props.projects.netlify;
  let githubProject = props.projects.github;

  return (
    <>
      <div className="CardProjectWrapper">
        <div className="img-wrapper">
          <img src={imgProject} alt={nameProject} className="project-img" />
        </div>
        <div className="details-wrapper">
          <div className="info-wrapper">
            <CardProjectHeading className="project-head" text={nameProject} />
            <Description
              className="project-paragraph"
              text={descriptionProject}
            />
          </div>
        </div>
        <div className="button-wrap">
          <Button
            label="Live Demo"
            path={netlifyProject}
            imageSrc="/assets/LiveDemo.svg"
            className="netlify-button"
            imgClass="img-button"
          />
          <Button
            label="View Code"
            path={githubProject}
            imageSrc="/assets/GitHub.svg"
            className="gitHub-button"
            imgClass="img-button-github"
          />
        </div>
      </div>
    </>
  );
};
