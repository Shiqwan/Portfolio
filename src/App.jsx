import React from "react";
import "./App.css";
import { Top } from "./Components/Header/Top";
import { Tech } from "./Components/B Tech-info/Tech-info";
import { Projects } from "./Components/C Featured Projects/Projects";
// import { Blog } from "./Components/D My Blogs/Blog";
import { Skills } from "./Components/E Skills/Skills";
import { Contact } from "./Components/F Contact Info/Contact";
import { Footer } from "./Footer/Footer";

export const App = () => {
  return (
    <div className="Top-Section">
      <Top />
      <div className="techer">
        <Tech />
      </div>
      <Projects className="projects" />
      {/* <div className="blogs">
          <Blog />
        </div> */}
      <div className="skills">
        <Skills />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
