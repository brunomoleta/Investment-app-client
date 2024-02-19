"use client";
import styled from "styled-components";
import {Section} from "@/styled-components/MaxWidth.style";

export const BlogSection = styled(Section)`
  background-color: var(--grey-100);
`;
export const Wrapper = styled.div`
    max-width: var(--page-max-width);

    margin-inline: auto;
    display: flex;
    flex-flow: column;

    gap: var(--s1);
`;
export const Heading = styled.h3`
    padding-block-start: var(--s2);
    font-weight: 300;
    font-size: var(--font-heading-clamp);
`;
