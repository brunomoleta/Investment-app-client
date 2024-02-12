import React from "react";
import { useInvestmentTypeContext } from "@/providers/InvestmentTypeProvider";
import { IInvestmentTypesContext } from "@/types/investmentType";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useForm } from "react-hook-form";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import Button from "@/components/Button";

function ChooseSpeciality() {
  const { investmentTypes } =
    useInvestmentTypeContext() as IInvestmentTypesContext;
  const { setStep, formInfo, setFormInfo } = useUtilsContext() as IUtilsContext;

  const id = React.useId();

  const { register, handleSubmit } = useForm<{ id: string }>({});

  if (!investmentTypes) {
    return null;
  }

  const onSubmit = (formData: { id: string }) => {
    setFormInfo({ ...formInfo, speciality_id: formData.id });
    console.log(formData);
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <h2>Escolha sua especialidade:</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {investmentTypes.map((investment) => (
          <Input
            key={investment.id}
            {...register("id")}
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

export default ChooseSpeciality;
