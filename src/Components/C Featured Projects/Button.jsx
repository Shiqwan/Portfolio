import { useState } from "react";

const Button = ({ icon, hoverIcon, name, link, style }) => {
  const [currentIcon, updateIcon] = useState(icon);

  return (
    <button
      className={style}
      onMouseEnter={() => updateIcon(hoverIcon)}
      onMouseLeave={() => updateIcon(icon)}
    >
      <img src={currentIcon} />
      <a href={link}>{name}</a>
    </button>
  );
};

export default Button;
