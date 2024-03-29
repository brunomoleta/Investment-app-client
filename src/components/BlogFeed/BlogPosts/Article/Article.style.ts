"use client";
import styled from "styled-components";
import Image from "next/image";

export const StyledArticle = styled.article`
    background-color: var(--pure-white);
    display: flex;
    flex-wrap: wrap;
    gap: var(--s0);
    border-radius: 10px;
    
    flex: var(--flex-wrap-card);

    overflow: hidden;

    padding-block-end: var(--s0);

    box-shadow: 3px 3px 16px 12px var(--grey-200);
`;

export const DashboardArticle = styled(StyledArticle)`
    padding-inline: var(--s1);
    padding-block: var(--s1);
    font-size: var(--font-small);
`

export const ArticleImage = styled(Image)`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;
