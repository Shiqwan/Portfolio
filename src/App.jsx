import React from "react";
import "./App.css";
import { Top } from "./Components/Header/Top";
import { Tech } from "./Components/B Tech-info/Tech-info";
import { Projects } from "./Components/C Featured Projects/Projects";

export const App = () => {
  return (
    <div className="topper">
      <Top />
      <div className="techer">
        <Tech />
        <div className="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
};
