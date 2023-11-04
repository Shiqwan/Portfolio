import profilepic from "../../assets/Profile-Pic crop.jpg";
import "./ProfilePic.css";

export const ProfilePic = () => {
  return (
    <img
      src={profilepic}
      className="profile-picture"
      alt="Picture of Ulrika Gålnander"
    />
  );
};
