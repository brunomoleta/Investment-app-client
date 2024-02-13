import { ILogin } from "@/types/login";
import React from "react";
import { IFullAdvisor, IFullInvestor } from "@/types/users";

export type UserType = "admin" | "advisor" | "investor";

export type ActiveUser = IFullAdvisor | IFullInvestor | null;

export interface IUserContext {
  activeUser: ActiveUser;
  setActiveUser: React.Dispatch<React.SetStateAction<ActiveUser>>;

  retrieveUserFromId: (string, string) => Promise<void>;

  renderUserType: (UserType) => string;

  signUpRequest: (UserSignIn) => Promise<void>;

  userType: UserType | null;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;

  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;

  loginRequest: (formData: ILogin, userType: UserType) => Promise<void>;

  quitAccount: () => void;
  // retrieveUserFromId: () => void;

  changePasswordVisibility: () => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;

  getIsLoggedIn: () => void;
}
