import { Experience, InvestmentAmount } from "@/types/enum";

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

export interface IAdvisor extends IUser {
  experience: Experience;
  bio: string;
  speciality: { type_name: string };
}

export interface IInvestor extends IUser {
  amount: InvestmentAmount;
  advisor_id: string;
}