import "./skills.css";
import { MainHead } from "../Header/MainHead";
import { SkillsList } from "./Skills2";

export const Skills = () => {
  return (
    <section className="skills">
      {/* <div className="skills-section-no-background"></div> */}
      <MainHead className={"skills-heading"} text={"Skills"} />
      <div className="skill-cards-section">
        <SkillsList />
      </div>
    </section>
  );
};
