'use client'
import styled from "styled-components";

export const StyledField = styled.fieldset`
    border-radius: var(--s-2);
    border: var(--border-thickness) solid transparent;
    
    max-width: 480px;
`;
export const Label = styled.label`
    display: inline-flex;
    cursor: pointer;
    width: 100%;
    
    margin-block-end: var(--s-4);
    
`;

export const ErrorSpan = styled.span`
    width: fit-content;
    color: var(--red-60);
    font-size: var(--font-small);
`;

export const StyledInput = styled.input`
    padding-inline-start: var(--s-1);
    padding-block: var(--s-4);
    
    border-radius: var(--s-2);
    outline: var(--border-thickness) solid var(--grey-300);
    background-color: var(--grey-200);

    width: 100%;
    &:focus {
        outline: 4px solid var(--primary-blue-hover)
    }
    
`;

export const StyledPasswordButton = styled.button`
  background-color: inherit;
  position: absolute;
  top: 0;
  right: 0;
`