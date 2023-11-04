import "./Tech-info.css";
import { MainHead } from "../Header/MainHead";

export const Tech = () => {
  return (
    <div className="tech-container">
      <div className="tech-wrapper">
        <MainHead className={"tech-h2"} text={"Tech"} />
        <div className="stack-wrapper">
          <p>
            HTML, CSS, Flexbox, JavaScript ES6, JSX, React, React Hooks,
            Node.js, Mongo DB, Web Accessibility API:s, mob-programming,
            pair-programming, Github.
          </p>
        </div>
      </div>
    </div>
  );
};
