"use client";
import styled from "styled-components";
import Image from "next/image";

export const StyledArticle = styled.article`
  background-color: var(--pure-white);
  display: flex;
  flex-wrap: wrap;
  gap: var(--s0);
  border-radius: 10px;

  overflow: hidden;

  padding-block-end: var(--s0);
`;

export const ArticleImage = styled(Image)`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;
