"use client";
import React from "react";
import { PrimaryButton } from "@/styled-components/Button.style";
import Input from "@/components/Input";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext, UserType } from "@/types/userContext";
import singlePasswordSchema from "@/schemas/singlePasswordSchema";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Spinner from "@/components/Spinner";

function Password({ userType }: { userType: UserType }) {
  const { loginRequest, isPasswordVisible } = useUserContext() as IUserContext;

  const { cleanForm, formInfo, isLoading } = useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const passwordId = `${id}-password`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ password: string }>({
    resolver: zodResolver(singlePasswordSchema),
  });

  console.log(userType);

  async function submit(formData: { password: string }) {
    console.log({ ...formInfo, ...formData });
    await loginRequest({ ...formInfo, ...formData }, userType);
    cleanForm();
  }

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <Input
          label="senha"
          type={isPasswordVisible ? "text" : "password"}
          error={errors.password}
          {...register("password")}
          id={passwordId}
        />

        <PrimaryButton disabled={isLoading}>
          {isLoading ? <Spinner /> : "LOGIN"}
        </PrimaryButton>
      </Form>
      <button onClick={cleanForm}>alterar e-mail</button>
    </>
  );
}

export default Password;
