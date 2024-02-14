import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUser } from "@/types/users";
import updateUserSchema from "@/schemas/updateUserSchema";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import { IName, IUpdateUser } from "@/types/signUp";
import Button from "@/components/Button";
import { Upper } from "@/services/service";

function UpdatePersonalInfo() {
  const { activeUser } = useUserContext() as IUserContext;

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
  } = useForm<IUpdateUser>({
    resolver: zodResolver(updateUserSchema),
    values: {
      firstName: activeUser!.name.split(" ")[0],
      lastName: activeUser!.name.split(" ")[1],
      email: activeUser!.email,
      phone_number: activeUser!.phone_number,
      image: activeUser?.image ? activeUser?.image : "",
    },
  });

  function onSubmit(formData: IName) {
    const { firstName, lastName, ...newFormData } = formData;
    const fullName = Upper(firstName) + " " + Upper(lastName);

    const { name, email, image, phone_number, ...previousActiveUser } =
      activeUser!;

    const updatedUser: Partial<IUser> = {
      ...previousActiveUser,
      name: fullName,
      ...newFormData,
    };
  }

  return (
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
      <Input
        id={phoneNumberId}
        label="número de telefone"
        {...register("phone_number")}
        error={errors.phone_number}
      />
      <Input id={imageId} label="imagem" {...register("image")} />

      <Button isPrimary={false} type="button" content="cancelar" />
      <Button type="submit" content="Enviar" />
    </Form>
  );
}

export default UpdatePersonalInfo;
