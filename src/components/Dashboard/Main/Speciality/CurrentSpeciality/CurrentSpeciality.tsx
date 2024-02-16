import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { IAdvisor } from "@/types/users";
import Button from "@/components/Button";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useInvestmentTypeContext } from "@/providers/InvestmentTypeProvider";
import { IInvestmentTypesContext } from "@/types/investmentType";
import SpecialityInfo from "@/components/Dashboard/Main/Speciality/SpecialityInfo";

function CurrentSpeciality() {
  const { activeUser } = useUserContext() as IUserContext;
  const { setIsEditing } = useUtilsContext() as IUtilsContext;
  const { getInvestmentTypesNoAuth } =
    useInvestmentTypeContext() as IInvestmentTypesContext;

  const { speciality } = activeUser as IAdvisor;

  async function editSpeciality() {
    await getInvestmentTypesNoAuth();
    setIsEditing(true);
  }

  return (
    <>
      <SpecialityInfo name={speciality.type_name} risk={speciality.risk}/>
      <Button content="Editar" onClick={editSpeciality} />
    </>
  );
}

export default CurrentSpeciality;
