import React from "react";
import { StaticImageData } from "next/image";
import {
  ArticleImage,
  StyledArticle,
} from "@/components/BlogFeed/BlogPosts/Article/Article.style";
import ArticleText from "@/components/BlogFeed/BlogPosts/Article/ArticleText";

function Article({ article }: ArticleProps) {
  const { name, image } = article;

  return (
    <StyledArticle>
      <ArticleImage alt={name} src={image} />
      <ArticleText isShort={true} article={article} />
    </StyledArticle>
  );
}

export default Article;

export interface ArticleProps {
  article: {
    id: string;
    name: string;
    author: string;
    image: string | StaticImageData;
    content: string;
  };
}
