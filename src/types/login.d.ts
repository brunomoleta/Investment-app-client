export enum Experience {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
  Expert = "expert",
}

export enum InvestmentAmount {
  Starter = "starter",
  WellRounded = "well-rounded",
  Multimillionaire = "multimillionaire",
  Wealthy = "wealthy",
}

export interface ILogin {
  email?: string;
  password?: string;
}

export interface IAdminSignIn extends ILogin {
  name?: string;
}

interface IUserSignIn extends IAdminSignIn {
  phone_number?: string;
  image?: string;
}

export type IImageOnly = Pick<IUserSignIn, 'image'>;

export interface IAdvisorSignIn extends IUserSignIn {
  experience?: Experience;
}

export interface IInvestorSignIn extends IUserSignIn {
  amount?: InvestmentAmount;
}

export type UserSignIn = ILogin | IAdminSignIn | IAdvisorSignIn | IInvestorSignIn;

export interface CustomError {
  response?: {
    status?: number;
  };
}
