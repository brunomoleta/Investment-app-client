import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { useForm } from "react-hook-form";
import { IBio } from "@/components/SignIn/SignInForm/AdvisorBio";
import advisorBioSchema from "@/schemas/advisorBioSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IFullAdvisor } from "@/types/users";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Textarea from "@/components/Input/Textarea";
import Button from "@/components/Button";
import UpdateButton from "@/components/Dashboard/Main/UpdateButton/UpdateButton";

function UpdateBio() {
  const { activeUser, userType, updateUser, retrieveUserFromId, tokenState } =
    useUserContext() as IUserContext;

  const { bio, ...prevUser } = activeUser as IFullAdvisor;
  const id = React.useId();
  const bioId = `${id}-bio}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBio>({
    resolver: zodResolver(advisorBioSchema),
    values: {
      bio: bio,
    },
  });

  async function onSubmit(formData: IBio) {
    const editedUser = {
      prevUser,
      bio: formData.bio,
    };
    await updateUser(editedUser);
    await retrieveUserFromId(tokenState, userType);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          label="Bio"
          {...register("bio")}
          error={errors.bio}
          id={bioId}
        />
        <Button type="submit" content="Enviar" />
      </Form>
      <UpdateButton />
    </>
  );
}

export default UpdateBio;
