'use client'

import Image from 'next/image';
import styled from 'styled-components';

export const DevicesImage = styled(Image)`
    width: 90%;
    height: auto;
    margin-block-start: -40%;
    opacity: .99;


    @media (min-width: 920px) {
        width: calc(var(--mockup-image-width) * .85px);
        height: calc(var(--mockup-image-height) * .85px);
        position: relative;
        right: 220px;
        top: 180px;
    }
`

export const BackgroundMobile = styled(Image)`
    position: absolute;
    top: -36%;
    right: 0;
    width: 100svw;
    height: auto;
    @media (min-width: 920px) {
        display: none;
    }
`
export const BackgroundDesktop = styled(Image)`
    position: relative;
    top: -180px;
    right: -570px;
    max-width: 800px;
    height: auto;
    scale: .98;
    @media (max-width: 919px) {
        display: none;
    }
`

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    @media (min-width: 920px) {
        width: 800px;
        position: absolute;
        margin: auto;
        right: 0;
    }
`
