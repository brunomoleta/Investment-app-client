import React from "react";
import { IUserContext, UserType } from "@/types/userContext";
import { useUserContext } from "@/providers/UserProvider";
import { IUtilsContext } from "@/types/utils";
import { useUtilsContext } from "@/providers/UtilsProvider";
import doublePasswordSchema from "@/schemas/doublePasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";

function DoublePassword() {
  const { setIsPasswordVisible, userType, isPasswordVisible, signUpRequest } =
    useUserContext() as IUserContext;
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
    </>
  );
}

export default DoublePassword;

export interface IPassword {
  password: string;
  confirmPassword: string;
}
