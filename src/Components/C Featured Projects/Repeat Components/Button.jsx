export const Button = ({ label, path, className, imageSrc, imgClass }) => {
  const handleClick = () => {
    window.open(path, "_blank");
  };

  return (
    <button className={className} onClick={handleClick}>
      <div className="button-content">
        <img src={imageSrc} alt={label} className={imgClass} />
        <span>{label}</span>
      </div>
    </button>
  );
};
