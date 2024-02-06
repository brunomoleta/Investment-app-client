import { ILogin } from "@/types/login";
import React from "react";

export type UserType = 'admin' | 'advisor' | 'investor' | null;


export interface IUserContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;

  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  loginRequest: (formData: ILogin, userType: UserType) => Promise<void>;

  quitAccount: () => void;

  changePasswordVisibility: () => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;

  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
