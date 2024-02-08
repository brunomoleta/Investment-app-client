"use client";
import React from "react";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { Controller, useForm } from "react-hook-form";
import { IPhoneNumber } from "@/types/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import phoneNumberSchema from "@/schemas/phoneNumberSchema";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import { PrimaryButton } from "@/styled-components/Button.style";
import {handleDigits} from "@/services/service";

function PhoneNumber() {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const { setStep, formInfo, setFormInfo } = useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const phoneNumberId = `${id}-number`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IPhoneNumber>({
    resolver: zodResolver(phoneNumberSchema),
  });

  function submit(formData: IPhoneNumber) {
    console.log(`ATÉ número`, formData);
    console.log(`PÓS número`, formInfo);

    formData = {
      ...formData,
      phone_number: formData.phone_number.replace(/\D/g, ""),
    };
    console.log({ ...formInfo, ...formData })
    setFormInfo({ ...formInfo, ...formData });
    setStep((prevStep) => prevStep + 1);
  }



  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <Controller
          name="phone_number"
          control={control} // use it here
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label="número de telefone"
              type="text"
              error={errors.phone_number}
              id={phoneNumberId}
              value={field.value}
              onChange={(e) => {
                field.onChange(handleDigits(e.target.value));
              }}
            />
          )}
        />
        <PrimaryButton type="submit">Avançar</PrimaryButton>
      </Form>
    </>
  );
}

export default PhoneNumber;
