import styled from 'styled-components';

export const Items = styled.ol`
    display: none;
    gap: var(--s-1);
    flex-wrap: wrap;
    @media (min-width: 550px) {
        display: flex;
        margin: auto;
    }
`;
export const Nav = styled.nav`
    margin: auto
;
`
export const ItemLi = styled.li`
    position: relative;
`