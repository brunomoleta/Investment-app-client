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
    router.push('/')
  }

  function changePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  function quitAccount(): void {
    window.localStorage.removeItem("@TOKEN");
    window.localStorage.removeItem("@TYPE");

    router.push("/");
  }


  const values: IUtilsContext = {
    changePasswordVisibility,
    quitAccount,

    setIsPasswordVisible,
    isPasswordVisible,

    logoClick,

    isModalOpen,
    setIsModalOpen,

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
