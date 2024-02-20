"use client";
import React from "react";
import {
  IInvestmentTypesContext,
  InvestmentState,
} from "@/types/investmentType";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

const InvestmentTypeContext = React.createContext({});

function useInvestmentTypeContext() {
  return React.useContext(InvestmentTypeContext);
}

function InvestmentTypeProvider(props: { children: React.ReactNode }) {
  const { setPage } = useUtilsContext() as IUtilsContext;

  const [investmentTypes, setInvestmentTypes] =
    React.useState<InvestmentState>(null);

  async function getInvestmentTypesNoAuth():Promise<void> {
    try {
      const { data } = await api.get("/investment_type", {
        params: {
          page: 1,
        },
      });
      console.log(data.investment_types);
      setInvestmentTypes(data.investment_types);
      setPage((prevPage) => prevPage + 1);
    } catch (error: any) {
      toast.error("Verifique sua conexão com a internet");
      console.error(error);
    }
  }

  const values: IInvestmentTypesContext = {
    investmentTypes,
    setInvestmentTypes,
    getInvestmentTypesNoAuth
  };



  return (
    <InvestmentTypeContext.Provider value={values}>
      {props.children}
    </InvestmentTypeContext.Provider>
  );
}

export { InvestmentTypeProvider, useInvestmentTypeContext };
