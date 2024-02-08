"use client";
import React from "react";
import { IUtilsContext } from "@/types/utils";

const UtilsContext = React.createContext({});

function useUtilsContext() {
  return React.useContext(UtilsContext);
}

function UtilsProvider(props: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const [step, setStep] = React.useState(0);

  const [formInfo, setFormInfo] = React.useState({});

  function cleanForm() {
    setStep(0);
    setFormInfo({});
  }

  const values: IUtilsContext = {
    step,
    setStep,

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
