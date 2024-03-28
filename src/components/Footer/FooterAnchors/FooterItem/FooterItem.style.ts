"use client";
import styled from "styled-components";
import Link from "next/link";

export const LiLink = styled(Link)`
  text-decoration: none;
  padding-inline-end: 20px;

  transition: color 300ms;

  &:hover {
    color: var(--primary-green);
  }

  &:focus {
    outline-offset: 3px;
    outline: var(--border-thickness) solid var(--primary-green);
  }
`;

export const HeaderLink = styled(LiLink)`
  transition: border-bottom-color 300ms;

  &:hover {
    font-weight: 600;
  }
`;

export const Li = styled.li`
  color: var(--grey-100);
  width: fit-content;
`;
