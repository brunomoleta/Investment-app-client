import React from "react";
import { IFullAdvisor, IFullInvestor, UpdateUser } from "@/types/users";

export type UserType = "admin" | "advisor" | "investor" | null;

export type ActiveUser = IFullAdvisor | IFullInvestor | null;

export type TokenType = string | null;

export interface IUserContext {
  quitAccount: () => void;

  tokenState: TokenType;

  updatePassword: (UpdateUser) => void;

  activeUser: ActiveUser;
  setActiveUser: React.Dispatch<React.SetStateAction<ActiveUser>>;

  userType: UserType | null;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;

  isLoggedIn: boolean;

  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  getIsLoggedIn: () => void;

  updateUser: (UpdateUser) => Promise<void>;
  retrieveUserFromId: (string, UserType) => Promise<void>;
}
