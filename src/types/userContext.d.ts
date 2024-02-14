import React from "react";
import { IFullAdvisor, IFullInvestor } from "@/types/users";

export type UserType = "admin" | "advisor" | "investor" | null;

export type ActiveUser = IFullAdvisor | IFullInvestor | null;

export interface IUserContext {
  activeUser: ActiveUser;
  setActiveUser: React.Dispatch<React.SetStateAction<ActiveUser>>;

  renderUserType: (UserType) => string;

  userType: UserType | null;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;

  isLoggedIn: boolean;

  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  getIsLoggedIn: () => void;

  updateUser: (UpdateUser) => Promise<void>;
  retrieveUserFromId: () => Promise<void>;
}
