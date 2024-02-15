import React from "react";
import { IUserContext } from "@/types/userContext";
import { useUserContext } from "@/providers/UserProvider";
import { IUtilsContext } from "@/types/utils";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { useSessionContext } from "@/providers/SessionProvider";
import { ISessionContext } from "@/types/sessionContext";
import PasswordTips from "@/components/PasswordTips";
import {doublePasswordSchema} from "@/schemas/doublePasswordSchema";
import {IPassword} from "@/types/signUp";

function DoublePassword() {
  const { userType } = useUserContext() as IUserContext;
  const { setIsPasswordVisible, isPasswordVisible } =
    useUtilsContext() as IUtilsContext;
  const { signUpRequest } = useSessionContext() as ISessionContext;
  const { formInfo } = useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const passwordId = `${id}-password`;
  const confirmPasswordId = `${id}-confirm-password`;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPassword>({
    resolver: zodResolver(doublePasswordSchema),
  });

  async function onSubmit(formData: IPassword) {
    await signUpRequest({ ...formInfo, password: formData.password });

    setIsPasswordVisible(false);

    router.push(`/${userType}`);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="senha"
          type={isPasswordVisible ? "text" : "password"}
          error={errors.password}
          {...register("password")}
          id={passwordId}
        />

        <Input
          label="confirmação de senha"
          type={isPasswordVisible ? "text" : "password"}
          error={errors.confirmPassword}
          {...register("confirmPassword")}
          id={confirmPasswordId}
        />

        <Button content="Enviar" />
      </Form>
      <PasswordTips />
    </>
  );
}

export default DoublePassword;

