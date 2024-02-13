'use client'
import styled from 'styled-components';
import Image from "next/image";
export const LogoStyle = styled.button`
    min-width: fit-content;
    margin-inline-end: auto;
    max-width: 100px;
    padding-block: 20px;
    padding-inline-end: 20px;
    margin-block-start: 6px;
`

export const StyledImage = styled(Image)`
    max-width: 64px;
    height: auto;
`