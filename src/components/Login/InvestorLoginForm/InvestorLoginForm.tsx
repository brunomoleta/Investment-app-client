"use client";
import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/user";
import { ILogin } from "@/types/login";
import loginSchema from "@/schemas/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/Input";
import Button from "@/components/Button";

function InvestorLoginForm() {
  const { loginRequest, isPasswordVisible } = useUserContext() as IUserContext;

  const id = React.useId();
  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });

  async function submit(formData: ILogin) {
    console.log("ANTES SUBMIT");
    await loginRequest(formData);
    console.log("Depois SUBMIT");
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="email"
        error={errors.email}
        {...register("email")}
        id={emailId}
      />
      <Input
        label="senha"
        type={isPasswordVisible ? "text" : "password"}
        error={errors.password}
        {...register("password")}
        id={passwordId}
      />
      <Button content="login" />
    </form>
  );
}

export default InvestorLoginForm;
