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
`;

export const QuitButton = styled.button`
  color: var(--red-60);
  font-weight: 500;

  &:hover {
    color: var(--red-60);
    outline: 2px solid var(--red-60);
  }
  &:active {
    color: var(--red-60);
    outline: 2px solid var(--red-60);
  }
  &:focus {
    color: var(--red-60);
    outline: 2px solid var(--red-60);
  }
`;
