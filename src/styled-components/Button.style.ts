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
    border-radius: var(--s1);

    max-width: 400px;
`;

export const PrimaryButton = styled(ButtonStyle)`
    background-image: var(--primary-gradient);
    border: var(--border-thickness);
    color: var(--pure-white);
    text-decoration: none;
    
`;