import React from 'react';
import {X} from "react-feather";
import {DClose} from "@/components/Modal/Modal.style";
import {ModalButton} from "@/components/Modal/ModalHeader";

function ModalClose() {
  return <DClose asChild>
    <ModalButton aria-label="Close">
      <X size={20} />
    </ModalButton>
  </DClose>;
}

export default ModalClose;
