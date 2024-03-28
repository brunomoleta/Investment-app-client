import React from "react";
import styled from "styled-components";
import { DTitle } from "@/components/Modal/Modal.style";
import ModalClose from "@/components/Modal/ModalClose";

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, button }) => {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <DTitle>{title}</DTitle>
          {button}
        </TitleWrapper>
      </Wrapper>
    </>
  );
};

export default ModalHeader;

interface ModalHeaderProps {
  title: string;
  button?: React.ReactNode;
}

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  font-size: var(--font-normal);
`;

const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
`;
export const ModalButton = styled.button`
  min-height: 40px;
  min-width: 40px;
  border-radius: 4px;
  padding: 8px;
  max-width: fit-content;
`;
