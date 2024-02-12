"use client";
import React from "react";
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
import Button from "@/components/Button";

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

  async function submit(formData: { password: string }) {
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

        <Button
          disabled={isLoading}
          content={isLoading ? <Spinner /> : "LOGIN"}
        />
      </Form>
    </>
  );
}

export default Password;
