import { Experience, InvestmentAmount } from "@/types/enum";
import {Risk} from "@/types/investmentType";

export interface IAdmin {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IUser extends IAdmin {
  phone_number: string;
  created_at: string;
  updated_at: string;
  image?: string;
}

export type UpdateUser = Pick<
  IUser,
  "phone_number" | "image" | "name" | "email"
>;

export interface IAdvisor extends IUser {
  experience: Experience;
  bio: string;
  speciality_id: string;
  speciality: { type_name: string, id: string, risk: Risk };
}

export interface IFullAdvisor extends IAdvisor {
  investors: IInvestor[];
}

export interface IFullInvestor extends IInvestor {
  advisor: IAdvisor;
}

export interface IInvestor extends IUser {
  amount: InvestmentAmount;
  advisor_id: string;
}
