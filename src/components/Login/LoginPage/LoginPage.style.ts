"use client";
import styled from "styled-components";

export const Main = styled.main`
    padding-block-start: var(--s3);
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: var(--s2);

    > * {
        margin: auto;
    }
`;

export const Heading = styled.h1`
    font-size: clamp(var(--font-medium), 8svw, var(--font-medium-2));
    line-height: 100%;
    font-weight: 500;
`