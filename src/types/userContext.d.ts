import React from "react";
import { IFullAdvisor, IFullInvestor } from "@/types/users";

export type UserType = "admin" | "advisor" | "investor" | null;

export type ActiveUser = IFullAdvisor | IFullInvestor | null;

export type TokenType = string | null;

export interface IUserContext {
  removeAccount: () => void;

  quitAccount: (isDelete?: boolean) => void;

  tokenState: TokenType;
  setTokenState: React.Dispatch<React.SetStateAction<TokenType>>;

  updatePassword: (UpdateUser) => void;

  activeUser: ActiveUser;
  setActiveUser: React.Dispatch<React.SetStateAction<ActiveUser>>;

  userType: UserType | null;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;

  isLoggedIn: boolean;

  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  getIsLoggedIn: () => void;

  updateUser: (UpdateUser) => Promise<void>;
  retrieveUserFromId: (id: TokenType, userType: UserType) => Promise<void>;
}
