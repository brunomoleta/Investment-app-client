"use client";
import React from "react";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import advisorBioSchema from "@/schemas/advisorBioSchema";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Button from "@/components/Button";
import Textarea from "@/components/Input/Textarea";
import { useInvestmentTypeContext } from "@/providers/InvestmentTypeProvider";
import { IInvestmentTypesContext } from "@/types/investmentType";

function AdvisorBio() {
  const { setStep, setIsLoading, formInfo, setFormInfo } = useUtilsContext() as IUtilsContext;
  const { getInvestmentTypesNoAuth } =
    useInvestmentTypeContext() as IInvestmentTypesContext;

  const id = React.useId();
  const bioId = `${id}-bio`;

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IBio>({
    resolver: zodResolver(advisorBioSchema),
  });

  async function onSubmit(formData: IBio) {
    setIsLoading(true)
    setFormInfo({ ...formInfo, ...formData });
    await getInvestmentTypesNoAuth();
    setIsLoading(false)
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        {...register("bio")}
        error={errors.bio}
        id={bioId}
        name="bio"
        label="Biografia em até 240 caracteres:"
      />
      <Button type="submit" content="Avançar" />
    </Form>
  );
}

export default AdvisorBio;

export interface IBio {
  bio: string;
}
