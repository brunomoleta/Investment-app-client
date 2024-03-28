"use client";
import styled from "styled-components";
import { Section } from "@/styled-components/MaxWidth.style";

export const Wrapper = styled(Section)`
  background-color: var(--grey-100);
  padding-inline: 0;
  padding-block: 0 var(--s3);
  margin-inline: auto;

  @media (min-width: 799px) {
    position: relative;
  }
`;
