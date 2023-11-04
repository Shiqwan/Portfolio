import "./MainHead.css";

export const MainHead = ({ className, text }) => {
  return <h1 className={`${className}`}>{text}</h1>;
};
