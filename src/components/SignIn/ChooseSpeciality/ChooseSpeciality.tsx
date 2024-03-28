import React from "react";
import ChooseSpecialityForm from "@/components/SignIn/ChooseSpeciality/ChooseSpecialityForm";
import { useInvestmentTypeContext } from "@/providers/InvestmentTypeProvider";
import { IInvestmentTypesContext } from "@/types/investmentType";
import ErrorMessage from "../../ErrorMessage";

function ChooseSpeciality() {
  const { investmentTypes } =
    useInvestmentTypeContext() as IInvestmentTypesContext;

  function specialityOption() {
    if (!investmentTypes) {
      return (
        <ErrorMessage>
          Não foi possível apresentar as especialidades no momento, por favor
          cadastre-se mais tarde :)
        </ErrorMessage>
      );
    }
    return <ChooseSpecialityForm />;
  }

  return <>{specialityOption()}</>;
}

export default ChooseSpeciality;
