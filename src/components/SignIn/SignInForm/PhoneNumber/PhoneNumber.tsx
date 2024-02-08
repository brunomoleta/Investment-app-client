"use client";
import React from "react";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useForm } from "react-hook-form";
import { IPhoneNumber } from "@/types/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import phoneNumberSchema from "@/schemas/phoneNumberSchema";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import { PrimaryButton } from "@/styled-components/Button.style";

function PhoneNumber() {
  const { setStep, formInfo, setFormInfo } = useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const phoneNumberId = `${id}-number`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPhoneNumber>({
    resolver: zodResolver(phoneNumberSchema),
  });

  function submit(formData: IPhoneNumber) {
    console.log(`ATÉ número`, formData);
    console.log(`PÓS número`, formInfo);

    setFormInfo({ ...formInfo, ...formData });
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <Input
          label="número de telefone"
          type="text"
          error={errors.phone_number}
          {...register("phone_number")}
          id={phoneNumberId}
        />
        <PrimaryButton type="submit" content="Avançar" />
      </Form>
    </>
  );
}

export default PhoneNumber;
