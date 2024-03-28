"use client";
import styled from "styled-components";
import { Section } from "@/styled-components/MaxWidth.style";

export const Wrapper = styled(Section)`
  background-color: var(--grey-200);

  padding-block: var(--s3);

  display: flex;
  flex-wrap: wrap;
  gap: var(--s3);
`;
export const Title = styled.h3`
  font-size: var(--font-medium);
  font-weight: 500;
  color: var(--blue-100);
`;
export const Paragraph = styled.p``;
