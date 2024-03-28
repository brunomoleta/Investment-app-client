"use client";
import styled from "styled-components";
import { WidthWrapper } from "@/styled-components/MaxWidth.style";

export const StyledFooter = styled.footer`
  background-color: var(--blue-100);

  padding: var(--s1) var(--page-alignment);

  display: flex;
  flex-flow: column;
  flex-wrap: wrap;

  gap: var(--s1);
`;

export const Wrapper = styled(WidthWrapper)`
  gap: var(--s0);

  display: flex;

  flex-wrap: wrap;
  padding: 0;

  margin-block-end: var(--s2);

  justify-content: space-between;
`;

export const TopWrapper = styled(Wrapper)`
  margin-block-end: var(--s1);
`;

export const WrapperBottom = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-start: var(--s1);
  gap: var(--s1);
`;

export const Info = styled.div`
  * > * {
    margin-block-end: var(--s-1);
  }
`;
