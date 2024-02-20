"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import {WidthWrapper} from "@/styled-components/MaxWidth.style";

export const Wrapper = styled.header`
    background-color: var(--pure-white);
    width: 100%;
    max-height: 100px;

    display: inline-flex;

    padding-block: var(--s0);
    padding-inline: var(--s1);
    box-shadow: 3px 3px 16px 12px var(--grey-200);

    align-items: center;
`;

export const InsideWrapper = styled(WidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

export const DMItem = styled(DropdownMenu.Item)`
  cursor: pointer;
  background-color: var(--pure-white);
  color: var(--blue-100);
  font-size: var(--font-small);

  padding-inline: var(--s-1);

  &:hover {
    outline: 2px solid var(--primary-blue-hover);
    background-color: var(--grey-200);
  }

  &:focus {
    outline: 2px solid var(--primary-blue-hover);
    background-color: var(--grey-200);
  }

  &:active {
    outline: 4px solid var(--primary-blue-hover);
    background-color: var(--grey-200);
  }
`;

export const DMItemRed = styled(DMItem)`
    color: var(--red-70);

    &:hover {
        outline: 2px solid var(--red-60);
        background-color: var(--grey-200);
    }

    &:focus {
        outline: 2px solid var(--red-60);
        background-color: var(--grey-200);
    }

    &:active {
        outline: 4px solid var(--red-60);
        background-color: var(--grey-200);
    }
`;
export const DMTrigger = styled(DropdownMenu.Trigger)`
  background-color: var(--grey-200);
  padding: 20px;
  outline-offset: 4px;
  border-radius: var(--s-2);
  outline: 2px solid var(--grey-200);

  &:hover {
    outline: 2px solid var(--primary-blue-hover);
    background-color: var(--grey-200);
  }

  &:focus {
    outline: 2px solid var(--primary-blue-hover);
    background-color: var(--grey-200);
  }

  &:active {
    outline: 4px solid var(--primary-blue-hover);
    background-color: var(--grey-200);
  }
`;
export const DMContent = styled(DropdownMenu.Content)`
  border: 1.5px solid var(--primary-blue);

  margin-inline-end: var(--s2);

  box-shadow: 3px 3px 10px 3px var(--grey-200);

  &:active {
    outline: 1px solid var(--primary-blue-hover);
  }

  &:focus {
    outline: 1px solid var(--primary-blue-hover);
  }
`;

export const DMSeparator = styled(DropdownMenu.Separator)`
  color: red;
  height: 2px;
  background-color: var(--grey-200);
  padding-block: 3px;
`;
