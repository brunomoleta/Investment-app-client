"use client";
import React from "react";
import Input from "@/components/Input";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserType } from "@/types/userContext";
import singlePasswordSchema from "@/schemas/singlePasswordSchema";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Spinner from "@/components/Spinner";
import Button from "@/components/Button";
import { useSessionContext } from "@/providers/SessionProvider";
import { ISessionContext } from "@/types/sessionContext";

function Password({ userType }: { userType: UserType }) {
  const { loginRequest } = useSessionContext() as ISessionContext;
  const { isPasswordVisible } = useUtilsContext() as IUtilsContext;

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
          type="submit"
          disabled={isLoading}
          content={isLoading ? <Spinner /> : "LOGIN"}
        />
      </Form>
    </>
  );
}

export default Password;
