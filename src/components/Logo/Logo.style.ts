'use client'
import styled from 'styled-components';
import Image from "next/image";
export const LogoStyle = styled.button`
    min-width: fit-content;
    max-width: 100px;

    margin-inline-end: auto;
    margin-block-start: 6px;

    padding-block: 20px;
    padding-inline-end: 20px;

    border-radius: var(--s-3);
    transition: 300ms background-color;

    &:hover {
        outline: var(--border-thickness) solid var(--grey-300)
    }

    &:active {
        border: 2px solid var(--pure-white);
        outline: 3px solid var(--primary-blue-hover);
    }
`

export const StyledImage = styled(Image)`
    width: 64px;
    height: auto;
`