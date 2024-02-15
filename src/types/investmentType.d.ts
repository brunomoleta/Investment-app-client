import React from "react";

export declare enum Risk {
  Low = "low",
  Moderate = "moderate",
  High = "high",
  VeryHigh = "very_high",
}

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
