"use client";
import React from "react";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useAdvisorContext } from "@/providers/AdvisorProvider";
import { IAdvisorContext } from "@/types/advisorContext";

function Amount() {
  const { setStep, setIsLoading, formInfo, setFormInfo } =
    useUtilsContext() as IUtilsContext;
  const { getAdvisorsNoAuth } = useAdvisorContext() as IAdvisorContext;

  const id = React.useId();
  const starterId = `${id}-${InvestmentAmount.Starter}}`;
  const roundedId = `${id}-${InvestmentAmount.WellRounded}}`;
  const wealthyId = `${id}-${InvestmentAmount.Wealthy}}`;
  const millionaireId = `${id}-${InvestmentAmount.Multimillionaire}}`;

  const { register, handleSubmit } = useForm<IAmount>({
    defaultValues: { amount: InvestmentAmount.Starter },
  });

  async function submit(formData: IAmount) {
    setIsLoading(true);
    setFormInfo({ ...formInfo, ...formData });
    await getAdvisorsNoAuth();
    setIsLoading(false);
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <>
      <h2>Tamanho do seu portfólio atual</h2>
      <p>
        Este valor não conta imóveis, carros e afins, e sim dinheiro disponível
        para investir.
      </p>
      <Form onSubmit={handleSubmit(submit)}>
        <Input
          {...register("amount")}
          type="radio"
          id={starterId}
          name="amount"
          value={InvestmentAmount.Starter}
          label="Até 20 mil reais"
        />

        <Input
          {...register("amount")}
          type="radio"
          id={roundedId}
          name="amount"
          value={InvestmentAmount.WellRounded}
          label="Entre 20 e 50 mil reais"
        />

        <Input
          {...register("amount")}
          type="radio"
          id={wealthyId}
          name="amount"
          value={InvestmentAmount.Wealthy}
          label="Entre 50 e 250 mil reais"
        />

        <Input
          {...register("amount")}
          type="radio"
          id={millionaireId}
          name="amount"
          value={InvestmentAmount.Multimillionaire}
          label="Entre 250 e 1 milhão de reais"
        />

        <Button type="submit" content="Avançar" />
      </Form>
    </>
  );
}

export default Amount;

export enum InvestmentAmount {
  Starter = "starter",
  WellRounded = "well-rounded",
  Multimillionaire = "multimillionaire",
  Wealthy = "wealthy",
}

interface IAmount {
  amount: InvestmentAmount;
}
