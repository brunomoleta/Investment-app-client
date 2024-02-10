import {ILogin, UserSignIn} from "@/types/login";
import React from "react";

export type UserType = "admin" | "advisor" | "investor";

export type UserName = string | null

export interface IUserContext {
  signUpRequest: (UserSignIn) => Promise<void>;

  userName: UserName;
  setUserName: React.Dispatch<React.SetStateAction<UserName>>;

  userType: UserType | null;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;

  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;

  loginRequest: (formData: ILogin, userType: UserType) => Promise<void>;

  quitAccount: () => void;
  retrieveUserFromId:()=> void;

  changePasswordVisibility: () => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;

}
