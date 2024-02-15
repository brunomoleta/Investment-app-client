"use client";
import React from "react";
import { IUtilsContext } from "@/types/utils";
import {useRouter} from "next/navigation";

const UtilsContext = React.createContext({});

function useUtilsContext() {
  return React.useContext(UtilsContext);
}

function UtilsProvider(props: { children: React.ReactNode }) {
  const router = useRouter()

  const [isEditing, setIsEditing] = React.useState(false);

  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false);

  const [step, setStep] = React.useState(0);
  const [page, setPage] = React.useState(1);

  const [formInfo, setFormInfo] = React.useState({});
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  function cleanForm() {
    setStep(0);
    setFormInfo({});
  }

  function logoClick() {
    cleanForm()
    changeUrl('/')
  }

  function changeUrl(url:string) {
    router.push(url);
  }

  function changePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const values: IUtilsContext = {
    changeUrl,

    changePasswordVisibility,

    setIsPasswordVisible,
    isPasswordVisible,

    logoClick,

    isModalOpen,
    setIsModalOpen,

    isEditing,
    setIsEditing,

    step,
    setStep,

    page,
    setPage,

    formInfo,
    setFormInfo,
    cleanForm,

    isLoading,
    setIsLoading,
  };
  return (
    <UtilsContext.Provider value={values}>
      {props.children}
    </UtilsContext.Provider>
  );
}

export { UtilsProvider, useUtilsContext };
