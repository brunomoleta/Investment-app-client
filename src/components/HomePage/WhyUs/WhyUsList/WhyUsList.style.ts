"use client";
import styled from "styled-components";
import { WidthWrapper } from "@/styled-components/MaxWidth.style";

export const OList = styled.ol`
  min-width: 100%;

  display: flex;
  flex-wrap: wrap;

  gap: var(--s2);
`;

export const Item = styled.li`
  display: flex;
  flex: var(--flex-wrap-card);
  flex-flow: column;
  gap: var(--s0);
`;

export const InsideWrapper = styled(WidthWrapper)``;
