import React from "react";
import { ArticleProps } from "@/components/BlogFeed/BlogPosts/Article";
import {
  Author,
  Em,
  Text,
  Title,
  Wrapper,
} from "@/components/BlogFeed/BlogPosts/Article/ArticleText/ArticleText.style";

function ArticleText({ article, isShort }: ArticleTextProps) {
  const { content, author, name } = article;

  const truncatedContent = isShort
    ? `${content.substring(0, 140)}...`
    : content;
  return (
    <Wrapper>
      <div>
        <Author>
          Escrito por <Em>{author}</Em>
        </Author>
        <Title>{name}</Title>
      </div>
      <Text>{truncatedContent}</Text>
    </Wrapper>
  );
}

export default ArticleText;

interface ArticleTextProps extends ArticleProps {
  isShort: boolean;
}
