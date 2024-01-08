import React, { useState } from "react";

export const Button = ({
  label,
  path,
  className,
  imageSrc,
  hoverImageSrc,
  imgClass,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(path, "_blank");
  };

  return (
    <button
      className={className}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="button-content">
        <img
          src={isHovered ? hoverImageSrc : imageSrc}
          alt={label}
          className={imgClass}
        />
        <span>{label}</span>
      </div>
    </button>
  );
};
