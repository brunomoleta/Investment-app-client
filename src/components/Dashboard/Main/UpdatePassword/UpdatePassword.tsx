import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { useForm } from "react-hook-form";
import { IUpdatePassword } from "@/types/signUp";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import Button from "@/components/Button";

function UpdatePassword() {
  const { updatePassword } = useUserContext() as IUserContext;
  const { setIsPasswordVisible, isPasswordVisible } =
    useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const currentPassId = `${id}-currentPass}`;
  const newPassId = `${id}-newPass}`;
  const confirmPassId = `${id}-confirmPass}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdatePassword>();

  async function onSubmit(formData: IUpdatePassword): Promise<void> {
      updatePassword({
        currentPassword: formData.currentPassword,
        newPassword: formData.password,
      });

    setIsPasswordVisible(false);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="senha atual"
        type={isPasswordVisible ? "text" : "password"}
        error={errors.password}
        {...register("currentPassword")}
        id={currentPassId}
      />
      <Input
        label="nova senha"
        type={isPasswordVisible ? "text" : "password"}
        error={errors.password}
        {...register("password")}
        id={newPassId}
      />

      <Input
        label="confirmação da nova senha"
        type={isPasswordVisible ? "text" : "password"}
        error={errors.confirmPassword}
        {...register("confirmPassword")}
        id={confirmPassId}
      />

      <Button type="submit" content="Enviar"></Button>
    </Form>
  );
}

export default UpdatePassword;
