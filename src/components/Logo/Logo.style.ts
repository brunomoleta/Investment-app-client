"use client";
import styled from "styled-components";
import Image from "next/image";
export const LogoStyle = styled.button`
  min-width: fit-content;
  max-width: 100px;

  padding-block: 20px;
  padding-inline-end: 20px;

  border-radius: var(--s-3);
  transition: 300ms background-color;

  &:hover {
    outline: var(--border-thickness) solid var(--grey-300);
  }

  &:active {
    outline: 3px solid var(--primary-blue);
  }
`;

export const StyledImage = styled(Image)`
  width: 64px;
  height: auto;
`;
