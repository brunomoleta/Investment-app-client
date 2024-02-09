import { IAdmin, IAdvisor, IInvestor, IUser } from "@/types/users";

type LoginCredentials = Pick<IAdmin, "email" | "password">;

export interface ILogin extends Partial<LoginCredentials> {}

export type AdvisorData = Omit<IAdvisor, "id" | "created_at" | "updated_at">;
export type InvestorData = Omit<IInvestor, "id" | "created_at" | "updated_at">;

export interface IAdvisorSignIn extends Partial<AdvisorData> {}

export interface IInvestorSignIn extends Partial<InvestorData> {}

export type UserSignIn = ILogin | IAdvisorSignIn | IInvestorSignIn;

export type IImageOnly = Pick<IUser, "image">;

export interface CustomError {
  response?: {
    status?: number;
  };
}
