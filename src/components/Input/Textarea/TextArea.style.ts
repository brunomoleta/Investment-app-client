'use client'
import styled from "styled-components";
import {StyledInput} from "@/components/Input/Input.styles";

export const StyledTextarea = styled(StyledInput).attrs({ as: 'textarea' })`
    padding-inline: var(--s-1);
    padding-block: var(--s-2);
    min-height: 240px;
`;
