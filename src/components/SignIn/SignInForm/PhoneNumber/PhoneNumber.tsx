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
import { handleDigits } from "@/services/service";
import Button from "@/components/Button";

function PhoneNumber() {
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

    formData = {
      ...formData,
      phone_number: formData.phone_number.replace(/\D/g, ""),
    };
    console.log(`PÓS número`, { ...formInfo, ...formData });
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
              {...register("phone_number")}
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
        <Button type="submit" content="avançar" />
      </Form>
    </>
  );
}

export default PhoneNumber;
