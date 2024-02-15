import styled from "styled-components";

export const TipsSection = styled.section`
    padding-inline: var(--s-2);
    max-width: 400px;
`
export const Ol = styled.ol`
  font-size: var(--font-small);
  color: var(--grey-400);

  & li {
    margin-inline-start: 24px;
    list-style-type: disc;
  }
`;
