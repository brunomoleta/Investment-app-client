import React from "react";
import { UserSignIn } from "@/types/login";

export interface IUtilsContext {
  changeUrl: (string) => void;

  changePasswordVisibility: () => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;

  formInfo: UserSignIn;
  setFormInfo: React.Dispatch<React.SetStateAction<UserSignIn>>;

  cleanForm: () => void;

  logoClick: () => void;

  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;

  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
