import React from "react";
import BlogPosts from "@/components/BlogFeed/BlogPosts";
import {
  BlogSection,
  Heading,
  Wrapper,
} from "@/components/BlogFeed/BlogFeed.style";

function BlogFeed() {
  return (
    <BlogSection>
      <Wrapper>
        <Heading>Conteúdo</Heading>
        <BlogPosts />
      </Wrapper>
    </BlogSection>
  );
}

export default BlogFeed;
