'use client';
import styled from "styled-components";

export const WidthWrapper = styled.div`
    width: 100%;
    max-width: var(--page-max-width);
    margin-inline: auto;

    padding-block: var(--s1) var(--s0);

    @media (min-width: 550px) {
        flex-wrap: nowrap;
    }
`;

export const Section = styled.section`
    padding-inline: var(--page-alignment);
`