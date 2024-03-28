import React from "react";
import { blogArticles } from "@/services/data";
import Article from "@/components/BlogFeed/BlogPosts/Article";
import { PostsUl } from "@/components/BlogFeed/BlogPosts/BlogPosts.style";

function BlogPosts() {
  return (
    <PostsUl>
      {blogArticles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </PostsUl>
  );
}

export default BlogPosts;
