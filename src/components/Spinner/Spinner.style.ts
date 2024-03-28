"use client";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Span = styled.span<{ speed: number }>`
  display: block;
  animation: ${spin} ${(props) => `${props.speed}ms`} linear infinite;

  & svg {
    display: block;
  }
`;
