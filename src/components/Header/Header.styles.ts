"use client";
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;

  display: flex;
  flex-wrap: wrap;
  gap: var(--s0);
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--s0);
  padding-block: var(--s1) var(--s0);
  background-color: var(--pure-white);
  box-shadow: 3px 3px 16px 12px var(--grey-400-t);

  font-size: var(--font-small);

  @media (min-width: 550px) {
    flex-wrap: nowrap;
  }
`;
