import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import removeAccountSchema from "@/schemas/removeAccountSchema";
import Textarea from "@/components/Input/Textarea";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Button from "@/components/Button";
import {
  ConfirmationText,
  DangerText,
} from "@/components/RemoveAccountForm/RemoveAccount.style";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { confirmMessage } from "@/services/data";

function RemoveAccountForm() {
  const { quitAccount, userType, removeAccount } =
    useUserContext() as IUserContext;
  const { changeUrl } = useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const nameId = `${id}-nameId`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRemoveAccount>({
    resolver: zodResolver(removeAccountSchema),
  });

  async function onSubmit(formData: IRemoveAccount) {
    console.log(formData);
    quitAccount(true);
    removeAccount();
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ConfirmationText>Caso afimativo copie ou digite:</ConfirmationText>
        <DangerText>{confirmMessage}</DangerText>
        <Textarea
          label="Confirmação para excluir conta:"
          id={nameId}
          {...register("confirmAccountRemoval")}
          error={errors.confirmAccountRemoval}
        />
        <Button
          type="submit"
          style={{
            backgroundImage: "inherit",
            backgroundColor: "var(--red-60)",
          }}
          content="Excluir conta"
        />
      </Form>
      <Button
        onClick={() => changeUrl(`/${userType}/dashboard`)}
        content="cancelar"
      />
    </>
  );
}

export default RemoveAccountForm;

interface IRemoveAccount {
  confirmAccountRemoval: string;
}
