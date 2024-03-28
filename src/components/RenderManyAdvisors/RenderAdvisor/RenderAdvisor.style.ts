"use client";

import styled from "styled-components";
import Image from "next/image";
import { StyledArticle } from "@/components/BlogFeed/BlogPosts/Article/Article.style";

export const Li = styled.li`
  width: fit-content;
`;
export const Card = styled(StyledArticle)`
  width: 100%;
  max-width: 350px;
  padding-block: var(--s0);
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  box-shadow: 3px 5px 8px 6px var(--grey-200);
`;
export const Line = styled.hr`
  color: black;
  width: 100%;
  height: 2px;
  border-radius: 3px;
  background-color: var(--grey-400-t);
`;

export const CardImage = styled(Image)`
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  height: 100px;
`;
export const Bio = styled.p`
  color: var(--primary-blue-hover);
  line-height: 140%;
  font-weight: 300;
  background-color: var(--grey-100);
  padding-inline: var(--s1);
  padding-block-start: var(--s-1);
  border-block-start: 1.5px solid var(--grey-200);

  & span {
    display: inline-block;
  }
`;
export const Highlight = styled.em`
  color: var(--rich-black);
  font-weight: 400;
`;
