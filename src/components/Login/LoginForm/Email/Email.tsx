"use client";
import React from "react";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailSchema from "@/schemas/emailSchema";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Button from "@/components/Button";
import {IEmail} from "@/types/signUp";

function Email() {
  const { setStep, formInfo, setFormInfo } =
    useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const emailId = `${id}-email`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmail>({
    resolver: zodResolver(emailSchema),
  });

  function submit(formData: IEmail) {
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
        <Button type="submit" content='Avançar'/>
      </Form>
    </>
  );
}

export default Email;
