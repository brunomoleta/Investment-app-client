import React from "react";
import { useInvestmentTypeContext } from "@/providers/InvestmentTypeProvider";
import { IInvestmentTypesContext } from "@/types/investmentType";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useForm } from "react-hook-form";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import specialitySchema from "@/schemas/specialitySchema";
import { ISpecialityId } from "@/types/signUp";

function ChooseSpecialityForm() {
  const { investmentTypes } =
    useInvestmentTypeContext() as IInvestmentTypesContext;
  const { setStep, formInfo, setFormInfo } = useUtilsContext() as IUtilsContext;

  const id = React.useId();

  const { register, handleSubmit } = useForm<ISpecialityId>({
    resolver: zodResolver(specialitySchema),
  });

  if (!investmentTypes) {
    return null;
  }

  const onSubmit = (formData: { speciality_id: string }) => {
    setFormInfo({ ...formInfo, speciality_id: formData.speciality_id });
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <h2>Escolha sua especialidade:</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {investmentTypes.map((investment) => (
          <Input
            key={investment.id}
            {...register("speciality_id")}
            label={investment.type_name}
            id={`${id}-${investment.id}`}
            type="radio"
            value={investment.id}
          />
        ))}
        <Button type="submit" content="Avançar" />
      </Form>
    </>
  );
}

export default ChooseSpecialityForm;
