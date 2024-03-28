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
import { zodResolver } from "@hookform/resolvers/zod";
import updatePasswordSchema from "@/schemas/updatePasswordSchema";
import PasswordTips from "@/components/PasswordTips";

function UpdatePasswordForm() {
  const { updatePassword, userType } = useUserContext() as IUserContext;
  const { setIsPasswordVisible, isPasswordVisible, changeUrl } =
    useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const currentPassId = `${id}-currentPass}`;
  const newPassId = `${id}-newPass}`;
  const confirmPassId = `${id}-confirmPass}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdatePassword>({
    resolver: zodResolver(updatePasswordSchema),
  });

  async function onSubmit(formData: IUpdatePassword): Promise<void> {
    updatePassword({
      currentPassword: formData.currentPassword,
      newPassword: formData.password,
    });

    setIsPasswordVisible(false);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="senha atual"
          type={isPasswordVisible ? "text" : "password"}
          error={errors.currentPassword}
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

        <Button type="submit" content="Enviar" />
      </Form>
      <Button
        onClick={() => changeUrl(`/${userType}/dashboard`)}
        isPrimary={false}
        type="button"
        content="cancelar"
      />
      <PasswordTips />
    </>
  );
}

export default UpdatePasswordForm;
