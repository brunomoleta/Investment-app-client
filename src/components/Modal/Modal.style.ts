import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const DOverLay = styled(Dialog.Overlay)`
  background-color: rgba(0 0 0 / 0.20);
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
    gap: clamp(1svh, 2svh, 32px);

    background-color: white;
    border-radius: 0px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px hsl(206 22% 7% / 20%) 0 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;

    padding-block: clamp(2%, 5%, 64px);
    padding-inline: clamp(2%, 5%, 40px);

    & > * {
        width: 100%;
    }

    @media (min-width: 700px) {
        border-radius: 8px;
        height: auto;
        width: auto;
    }
`;



export const DTitle = styled(Dialog.Title)`
  
  line-height: 130%;
  font-weight: 500;
  font-size: var(--s-2);
`
export const DClose = styled(Dialog.Close)`
  width: auto;
  
`
