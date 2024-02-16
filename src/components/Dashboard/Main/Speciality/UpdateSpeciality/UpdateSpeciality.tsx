'use client'
import React from "react";
import { useInvestmentTypeContext } from "@/providers/InvestmentTypeProvider";
import {
  IInvestmentType,
  IInvestmentTypesContext,
} from "@/types/investmentType";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISpecialityId } from "@/types/signUp";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { IAdvisor } from "@/types/users";
import specialitySchema from "@/schemas/specialitySchema";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import UpdateButton from "@/components/Dashboard/Main/UpdateButton";
import Button from "@/components/Button";
import SpecialityInfo from "@/components/Dashboard/Main/Speciality/SpecialityInfo";

function UpdateSpeciality() {
  const { setIsLoading } = useUtilsContext() as IUtilsContext;
  const { investmentTypes } =
    useInvestmentTypeContext() as IInvestmentTypesContext;
  const { activeUser, updateUser, retrieveUserFromId, tokenState, userType } =
    useUserContext() as IUserContext;

  const { speciality_id } = activeUser as IAdvisor;

  const ReactId = React.useId();

  const { register, handleSubmit, setFocus } = useForm<ISpecialityId>({
    resolver: zodResolver(specialitySchema),
    defaultValues: { speciality_id: speciality_id },
  });

  if (!investmentTypes) {
    return null;
  }

  async function onSubmit(formData: { speciality_id: string }) {
    setIsLoading(true);

    await updateUser(formData);
    await retrieveUserFromId(tokenState, userType);
    setIsLoading(false);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {investmentTypes.map(({ id, risk, type_name }: IInvestmentType) => (
          <Input
            type="radio"
            key={id}
            {...register("speciality_id")}
            id={`${ReactId}-${id}`}
            value={id}
            label={<SpecialityInfo name={type_name} risk={risk} />}
          />
        ))}
        <Button type="submit" content="Enviar" />
      </Form>
      <UpdateButton />
    </>
  );
}

export default UpdateSpeciality;
