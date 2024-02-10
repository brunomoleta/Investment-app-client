"use client";
import React from "react";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import advisorBioSchema from "@/schemas/advisorBioSchema";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Button from "@/components/Button";
import Textarea from "@/components/Input/Textarea";

function AdvisorBio() {
  const { setStep, formInfo, setFormInfo } = useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const bioId = `${id}-bio`;

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IBio>({
    resolver: zodResolver(advisorBioSchema),
  });

  function onSubmit(formData: IBio) {
    setFormInfo({ ...formInfo, ...formData });
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        {...register("bio")}
        error={errors.bio}
        id={bioId}
        name="bio"
        label="Biografia em até 240 caracteres:"
      />
      <Button type="submit" content="Avançar" />
    </Form>
  );
}

export default AdvisorBio;

interface IBio {
  bio: string;
}
