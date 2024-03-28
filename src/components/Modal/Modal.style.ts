import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const DOverLay = styled(Dialog.Overlay)`
  background-color: rgba(0 0 0 / 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
`;

export const DDescription = styled(Dialog.Description)`
  color: var(--grey-400);
`;

export const DContent = styled(Dialog.Content)`
  display: grid;
  place-items: center;
  gap: var(--s2);

  background-color: white;

  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px hsl(206 22% 7% / 20%) 0 10px
    20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding-block: var(--s2);
  padding-inline: clamp(var(--s-1), 10svw, var(--s2));

  & > * {
    width: 100%;
  }

  border-radius: 8px;
  height: auto;
  width: auto;
`;

export const DTitle = styled(Dialog.Title)`
  line-height: 130%;
  font-weight: 500;
  font-size: var(--font-medium);
`;
export const DClose = styled(Dialog.Close)`
  top: -25%;
  right: 0;
  background-color: var(--pure-white);
  padding: 10px;

  position: absolute;
  width: auto;

  &:hover {
    outline: 2px solid var(--primary-blue-hover);
    outline-offset: 2px;
    background-color: var(--grey-200);
  }
  &:focus {
    outline: 3px solid var(--primary-blue-hover);
    outline-offset: 4px;
  }
`;
