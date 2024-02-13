'use client'
import styled from 'styled-components';

export const ButtonStyle = styled.button`
    font-size: var(--font-small);
    text-decoration: underline;
    color: var(--primary-blue);
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-block: 0;
    padding-inline: var(--s2);
    padding-block: var(--s-2);
    border-radius: var(--s-2);

    max-width: 400px;
    
    &:hover{
        color: var(--primary-blue-hover);
    }
`;

export const PrimaryButton = styled(ButtonStyle)`
    font-weight: bold;
    background-image: var(--primary-gradient);
    border: var(--border-thickness);
    color: var(--pure-white);
    text-decoration: none;

    box-shadow: 3px 3px 10px 3px var(--grey-400-t);

    transition: background-image 300ms ease;

    &:hover {
        background-image: var(--primary-gradient-hover);
        color: var(--pure-white);
    }

    &:focus {
        outline: 4px solid var(--primary-blue-hover);
        outline-offset: 2px;
    }
    &:active {
        outline: 4px solid var(--primary-green);
        outline-offset: 4px;
    }
`;

export const NormalButton = styled.button`

    font-weight: 500;
    border-radius: var(--s-5);
    outline-offset: 3px;
    padding-inline: 10px;
    outline: 2px solid var(--grey-300);
  &:hover {
      background-color: var(--grey-200);
    outline: 2px solid var(--primary-blue);
  }
  &:active {
    color: var(--primary-blue);
    outline: 2px solid var(--primary-blue);
  }
  &:focus {
    color: var(--rich-black);
    outline: 3px solid var(--primary-blue);
  }
`

export const QuitButton = styled(NormalButton)`
    color: var(--red-60);
    outline: 2px solid var(--red-60);

    &:hover {
        background-color: revert;
        color: var(--red-80);
        outline: 2px solid var(--red-60);
    }

    &:active {
        color: var(--red-60);
        outline: 2px solid var(--red-60);
    }

    &:focus {
        color: var(--red-60);
        outline: 3px solid var(--red-60);
    }
`;
