"use client";
import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { DContent, DOverLay } from "@/components/Modal/Modal.style";
import ModalHeader from "@/components/Modal/ModalHeader";
import ModalClose from "@/components/Modal/ModalClose";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

function Modal({ element, title = "", button }: IModal) {
  const { isModalOpen, setIsModalOpen } = useUtilsContext() as IUtilsContext;

  return (
    <Dialog.Root modal={true} open={isModalOpen} onOpenChange={setIsModalOpen}>
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
  element: React.ReactNode;

  title: string;
  button?: React.ReactNode;
}
