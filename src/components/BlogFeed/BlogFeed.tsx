import React from "react";
import BlogPosts from "@/components/BlogFeed/BlogPosts";
import {Heading, Section, Wrapper} from "@/components/BlogFeed/BlogFeed.style";

function BlogFeed() {
  return (
    <Section>
      <Wrapper>
        <Heading>Conteúdo</Heading>
        <BlogPosts />
      </Wrapper>
    </Section>
  );
}

export default BlogFeed;
