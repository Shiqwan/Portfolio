import { ProfilePic } from "../ProfilePic/ProfilePic";
import { SecondHead } from "../Header/SecondHead";
import { MainHead } from "../Header/MainHead";
import "../F Contact Info/Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-top-image">
          <MainHead className={"contact-headline"} text={"Happy to chat!"} />

          <ProfilePic />
          <SecondHead classname={"Name"} text={"Ulrika Gålnander"} />
          <div className="contact-info">
            <p data phone="+46 73 612 67 85">
              +46 73 612 67 85
            </p>
            <p>ulrika.galnander@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
