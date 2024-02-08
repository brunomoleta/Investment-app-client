"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IName } from "@/types/signUp";
import nameSchema from "@/schemas/nameSchema";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import { PrimaryButton } from "@/styled-components/Button.style";
import { Upper } from "@/services/service";

function UserName() {
  const { setStep, step, formInfo, setFormInfo } =
    useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const firstNameId = `${id}-firstName`;
  const lastNameId = `${id}-lastName`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IName>({
    resolver: zodResolver(nameSchema),
  });

  function submit(formData: IName) {
    const { firstName, lastName, ...newFormData } = formData;
    const fullName = Upper(firstName) + " " + Upper(lastName);

    setFormInfo({ ...newFormData, name: fullName });
    setStep((prevStep) => prevStep + 1);
    console.log(fullName);
    console.log(step);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <Input
          label="nome"
          type="text"
          error={errors.firstName}
          {...register("firstName")}
          id={firstNameId}
        />
        <Input
          type="text"
          label="sobrenome"
          error={errors.lastName}
          {...register("lastName")}
          id={lastNameId}
        />

        <PrimaryButton type="submit">AVANÇAR</PrimaryButton>
      </Form>
    </>
  );
}

export default UserName;
