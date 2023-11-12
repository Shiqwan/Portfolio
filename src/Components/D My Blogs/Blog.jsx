import "../D My Blogs/Blog.css";
import articles from "../articles.json";
import { CardProjectHeading } from "../C Featured Projects/Repeat Components/CardProjectHeading";
import { BlogCard } from "./BlogCard";

let articleArray = articles.articles;
console.log(articleArray);

export const Blog = () => {
  return (
    <div className="blog-container">
      <CardProjectHeading className="blog-main-heading" text="My Thoughts" />
      <div className="blog-wrapper">
        {articleArray.map((article, index) => (
          <BlogCard key={index} articles={article} />
        ))}
      </div>
    </div>
  );
};
