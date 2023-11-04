import React from "react";
import "./Top.css";
import { ProfilePic } from "../ProfilePic/ProfilePic";
import { MainHead } from "./MainHead";
import { SecondHead } from "./SecondHead";

export const Top = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-wrapper">
        <div className="top-image">
          <ProfilePic />
        </div>
        <div className="topper">
          <SecondHead />
          <MainHead />
        </div>
        <div className="hello-wrapper">
          <p>Ulrika is a developer ready for new things and hungry to learn.</p>
          <p>
            {" "}
            With a background in communications, administration and idk being a
            woman she is taking a new step in her career.
          </p>
          <p>
            The last months have proven her to be resilient, a baby and giving
            her new reflections on what the heck she is about.
          </p>
        </div>
      </div>
    </div>
  );
};
