import React from "react";
import "./Top.css";
import { ProfilePic } from "../ProfilePic/ProfilePic";
import { MainHead } from "./MainHead";
import { SecondHead } from "./SecondHead";
import Arrow from "../../assets/arrow.svg";
import "animate.css";

export const Top = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-wrapper">
        <div className="topper">
          <SecondHead
            className={"intro-pre-headline"}
            text={"Welcome to the portfolio of Ulrika Gålnander"}
          />
          <MainHead className={"intro-headline"} text={"Front End Developer"} />
        </div>
        <div className="ImageHello-wrapper">
          <div className="top-image">
            <ProfilePic />
          </div>
          <div className="hello-wrapper">
            <p>
              Ulrika is a developer ready for new things and hungry to learn.
            </p>
            <p>
              With a background in communications, administration and events she
              is taking a new step in her career.
            </p>
            {/* <p>
              The last few months have proven her to be resilient, a baby and
              giving her a lot of revelations on what the heck she is about.
            </p> */}
          </div>
        </div>
        <a>
          <div className="arrow">
            <img src={Arrow} alt="Arrow" className="arrow-image" />
          </div>
        </a>
      </div>
    </div>
  );
};
