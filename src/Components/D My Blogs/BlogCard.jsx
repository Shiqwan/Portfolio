import { Description } from "../C Featured Projects/Repeat Components/Description.jsx";
import { SecondHead } from "../Header/SecondHead.jsx";
import { Button } from "../C Featured Projects/Repeat Components/Button.jsx";
import "../D My Blogs/BlogCard.css";

export const BlogCard = (props) => {
  let nameArticle = props.articles.name;
  let imgArticle = props.articles.image;
  let timeArticle = props.articles.time;
  let linkArticle = props.articles.link;
  let descriptionArticle = props.articles.description;

  return (
    <>
      <div className="articleCard-wrapper">
        <div className="img-wrapper">
          <img src={imgArticle} alt={nameArticle} className="article-image" />
        </div>
        <div className="article-description">
          <p className="timeArticle">{timeArticle} </p>
          <SecondHead className="article-heading" text={nameArticle} />
          <Description
            className="article-paragraph"
            text={descriptionArticle}
          />
          <Button
            label="Read article"
            imageSrc="src/assets/LiveDemoHover.svg"
            path={linkArticle}
            className="button-article"
            imgClass="img-button"
          />
        </div>
      </div>
    </>
  );
};
