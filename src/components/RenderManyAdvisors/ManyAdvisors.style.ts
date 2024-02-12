"use client";
import styled from "styled-components";

export const AdvisorList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  min-height: 400px;
  width: 100%;
  max-width: 1440px;
  justify-content: center;

  margin-block-start: var(--s2);
  gap: var(--s1);
`;

export const MainWrapper = styled.main`
  background-color:var(--grey-100);
  display: grid;
  place-content: center;
  padding-block: var(--s2);

  padding-inline: clamp(var(--s-3), 8%, var(--s2));
`;
