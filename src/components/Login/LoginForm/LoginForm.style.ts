"use client";
import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-flow: column;
  border-radius: var(--s0);
  box-shadow: 3px 3px 10px 3px var(--grey-400-t);

  margin-block-end: var(--s1);

  > fieldset:first-child {
    margin-block-start: var(--s-1);
  }

  > button {
    margin-block-start: var(--s0);
    width: 100%;
    max-width: none;

    border-radius: 0 0 10px 10px;
  }

  &:focus-within {
  }
`;
