import styled from 'styled-components';


export const ButtonStyle = styled.button`
    font-size: var(--font-small);

    display: flex;
    align-items: center;
    justify-content: center;
    margin-block: 0;
    padding-inline: var(--s2);
    padding-block: var(--s-2);
    font-weight: bold;
    border-radius: var(--s-2);

    max-width: 400px;
`;

export const PrimaryButton = styled(ButtonStyle)`
    background-image: var(--primary-gradient);
    border: var(--border-thickness);
    color: var(--pure-white);
    text-decoration: none;

    box-shadow: 3px 3px 10px 3px var(--grey-400-t);
        
    transition: opacity 300ms ease;

    &:hover {
        opacity: .5;
    }

    &:focus {
        outline: 4px solid var(--primary-blue);
        outline-offset: 2px;
    }
`;