'use client'
import Image from 'next/image';
import styled from 'styled-components';
export const MockImage = styled(Image)`
    width: 90%;
    height: auto;
    margin-block-start: -40%;
    opacity: .99;
`

export const MockBackground = styled(Image)`
    position: absolute;
    top: -30%;
    right: 0;
    width: 100svw;
    height: auto;
`
export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`
