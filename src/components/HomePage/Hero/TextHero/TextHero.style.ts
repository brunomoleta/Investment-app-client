'use client'
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    gap: var(--s1);
    margin-block: var(--s1);
    align-items: baseline;
    text-align: start;
    padding-inline: var(--page-alignment);
    @media (min-width: 920px) {
        width: 50%;
        padding-inline: 0;
    }
`

export const HeroH1 = styled.h1`
    font-size: var(--font-heading-clamp);
    line-height: 100%;
    font-weight: 300;
`

export const SubTitle = styled.p`
    z-index: 1;
    background-color: var(--grey-100);
`