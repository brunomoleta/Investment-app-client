import React from "react";
import { UserSignIn } from "@/types/login";

export interface IUtilsContext {
  formInfo: UserSignIn;
  setFormInfo: React.Dispatch<React.SetStateAction<UserSignIn>>;

  cleanForm: () => void;

  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
