'use client'
import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import {DContent, DOverLay} from "@/components/Modal/Modal.style";
import ModalHeader from "@/components/Modal/ModalHeader";
import ModalClose from "@/components/Modal/ModalClose";

function Modal({
                 open,
                 onOpenChange,

                 element,
                 title = "",
                 button,
               }: IModal) {
  return (
      <Dialog.Root modal={true} open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <DOverLay />
          <DContent>
            <ModalHeader button={button} title={title} />
            {element}
              <ModalClose />

          </DContent>
        </Dialog.Portal>
      </Dialog.Root>
  );
}

export default Modal;

export interface IModal {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;

    element: React.ReactNode;


    title: string;
    button?: React.ReactNode
}
