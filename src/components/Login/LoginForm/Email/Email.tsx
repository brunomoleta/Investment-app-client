"use client";
import React from "react";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import { PrimaryButton } from "@/styled-components/Button.style";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailSchema from "@/schemas/emailSchema";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

function Email({ isLogin = true }: { isLogin?: boolean }) {
  const { step, setStep, formInfo, setFormInfo } =
    useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const emailId = `${id}-email`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(emailSchema),
  });

  function submit(formData: { email: string }) {
    setFormInfo({ ...formInfo, ...formData });
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <Input
          label="e-mail"
          type="text"
          error={errors.email}
          {...register("email")}
          id={emailId}
        />
        <PrimaryButton type="submit">Avançar</PrimaryButton>
      </Form>
    </>
  );
}

export default Email;
