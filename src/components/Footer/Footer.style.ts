"use client";
import styled from "styled-components";
import {WidthWrapper} from "@/styled-components/MaxWidth.style";

export const StyledFooter = styled.footer`
    background-color: var(--blue-100);

    padding: var(--s3) var(--page-alignment);

    display: flex;
    flex-flow: column;
    flex-wrap: wrap;

    gap: var(--s1);
`;


export const Wrapper = styled(WidthWrapper)`
  display: flex;
  flex-wrap: wrap;
    gap: var(--s1)
`;

export const Info = styled.div`
    * > * {
        margin-block-end: var(--s-1);
    }

`