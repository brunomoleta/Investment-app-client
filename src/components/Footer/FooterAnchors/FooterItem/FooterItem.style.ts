import styled from "styled-components";
import Link from 'next/link';

export const LiLink = styled(Link)`
    padding-inline-end: 20px;

    transition: color 300ms;

    &:hover {
        color: var(--primary-green)
    }

    &:focus {
        outline-offset: 3px;
        outline: var(--border-thickness) solid var(--primary-green);
    }
`

export const Li = styled.li`
    color: var(--grey-100);
`
