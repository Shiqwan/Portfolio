import { CardProjectHeading } from "../C Featured Projects/Repeat Components/CardProjectHeading";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-wrapper">
      <CardProjectHeading className="skills-heading" text="Skills" />
      <div className="description-skills">
        <div className="skills-words">
          <h4>Code</h4>
          <li>HTML5</li>
          <li>CSS</li>
          <li>javascript ES6</li>
          <li>React</li>
          <h4>Upcoming</h4>
          <h4>Toolbox</h4>
          <h4>More</h4>
          <li>Stuff from my past</li>
          <li>Agile methodology</li>
        </div>
      </div>
    </div>
  );
};
