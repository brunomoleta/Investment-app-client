"use client";
import styled from "styled-components";

export const StyledHeader = styled.header`
    padding-inline: var(--page-alignment);

    background-color: var(--pure-white);
    box-shadow: 3px 3px 16px 12px var(--grey-400-t);

    font-size: var(--font-small);
    z-index: 1;
    position: relative;
`;

export const HeaderWrapper = styled.div`
    max-width: var(--page-max-width);
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-block: var(--s1) var(--s0);

    @media (min-width: 550px) {
        flex-wrap: nowrap;
    }
`;
