import React from "react";
import {Risk} from "@/types/enum";


export interface IInvestmentType {
  id: string;
  type_name: string;
  risk: Risk;
}

export interface IOmittedIdInvestmentType extends Omit<IInvestmentType, "id"> {}

export type InvestmentState = InvestmentType[] | null;

export interface IInvestmentTypesContext {
  investmentTypes: InvestmentState;
  setInvestmentTypes: React.Dispatch<React.SetStateAction<InvestmentState>>;
  getInvestmentTypesNoAuth: () => Promise<void>;
}
