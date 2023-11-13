import { CardProjectHeading } from "../C Featured Projects/Repeat Components/CardProjectHeading";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills">
      <CardProjectHeading className="skills-heading" text="Skills" />
      <div className="description-skills">
        <div className="skills-words">
          <h4>Code</h4>
          <li>HTML5</li>
          <li>CSS</li>
          <li>javascript ES6</li>
          <li>React</li>

          <ul>
            <h4 className="more">More</h4>
            <li>Stuff from my past</li>
            <li>Agile methodology</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
