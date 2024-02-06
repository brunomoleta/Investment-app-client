'use client'
import styled from "styled-components";

export const Wrapper = styled.div`
    padding-inline: var(--s-1);
    
    display: flex;
    flex-wrap: wrap;
    gap: var(--s-1);
    
    
`

export const Author = styled.span`
    font-size: var(--font-smaller);
    color: var(--grey-400);
    line-height: 100%;
`
export const Title = styled.h4`
    font-size: var(--font-normal);
    font-weight: 500;
`

export const Text = styled.p`
    color: var(--grey-300);
    font-size: var(--font-small);
    line-height: 130%;
`
export const Em = styled.em`
    color: var(--rich-black)
`