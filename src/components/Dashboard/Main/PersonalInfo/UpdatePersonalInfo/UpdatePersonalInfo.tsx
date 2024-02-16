import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUser } from "@/types/users";
import updateUserSchema from "@/schemas/updateUserSchema";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import { IUpdateUser } from "@/types/signUp";

import { formatPhoneNumber, handleDigits, upper } from "@/services/service";
import UpdateButton from "../../UpdateButton";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Button from "@/components/Button";

function UpdatePersonalInfo() {
  const { activeUser, tokenState, userType, updateUser, retrieveUserFromId } =
    useUserContext() as IUserContext;
  const { setIsLoading } = useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const firstNameId = `${id}-firstName}`;
  const lastNameId = `${id}-lastName}`;
  const phoneNumberId = `${id}-phoneNumber`;
  const imageId = `${id}-image`;
  const emailId = `${id}-email`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IUpdateUser>({
    resolver: zodResolver(updateUserSchema),
    values: {
      firstName: activeUser!.name.split(" ")[0],
      lastName: activeUser!.name.split(" ")[1],
      email: activeUser!.email,
      phone_number: formatPhoneNumber(activeUser!.phone_number),
      image: activeUser?.image ? activeUser?.image : "",
    },
  });

  async function onSubmit(formData: IUpdateUser) {
    setIsLoading(true);
    const { firstName, lastName, phone_number, ...newFormData } = formData;
    const fullName = upper(firstName) + " " + upper(lastName);

    const { name, email, image, ...previousActiveUser } = activeUser!;

    const editedUser: Partial<IUser> = {
      name: fullName,
      phone_number: phone_number.replace(/\D/g, ""),
      ...newFormData,
    };
    await updateUser(editedUser);
    await retrieveUserFromId(tokenState, userType);
    setIsLoading(false);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id={firstNameId}
          label="nome"
          {...register("firstName")}
          error={errors.firstName}
        />
        <Input
          id={lastNameId}
          label="sobrenome"
          {...register("lastName")}
          error={errors.lastName}
        />
        <Input
          id={emailId}
          label="email"
          {...register("email")}
          error={errors.email}
        />
        <Controller
          name="phone_number"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...register("phone_number")}
              label="número de telefone"
              error={errors.phone_number}
              id={phoneNumberId}
              value={field.value}
              onChange={(e) => {
                field.onChange(handleDigits(e.target.value));
              }}
            />
          )}
        />

        <Input id={imageId} label="imagem" {...register("image")} />
        <Button type="submit" content="Editar" />
      </Form>
      <UpdateButton />
    </>
  );
}

export default UpdatePersonalInfo;
