import styled from "styled-components";

export const Field = styled.fieldset`
    border-radius: var(--s-2);
    border: var(--border-thickness) solid transparent;
    box-shadow: 3px 3px 10px 3px var(--grey-400-t);

    &:focus-within {
        border: 2px solid var(--primary-green);
        box-shadow: 3px 3px 10px 3px var(--primary-green);
    }
`;
export const Label = styled.label`
    display: inline-flex;
    cursor: text;
    width: 100%;
`;

export const ErrorSpan = styled.span`
  width: fit-content;
`;

export const StyledInput = styled.input`
    border-radius: var(--s-2);
    border: var(--border-thickness) solid var(--grey-300);
    background-color: var(--grey-200);

    &:focus {
        
    }
`;

export const PasswordButton = styled.button`
  background-color: inherit;
  position: absolute;
  top: 0;
  right: 0;
`