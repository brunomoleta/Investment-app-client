"use client";
import React from "react";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import { Optional } from "@/components/SignIn/SignInForm/ImageForm/Image.style";
import { useForm } from "react-hook-form";
import { IImageOnly } from "@/types/login";
import Button from "@/components/Button";

function ImageForm() {
  const { setStep, formInfo, setFormInfo } = useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const imageId = `${id}-image`;

  const { register, handleSubmit } = useForm<IImageOnly>();

  function submit(formData: IImageOnly) {
    setFormInfo({ ...formInfo, ...formData });
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Input
        label="imagem de perfil"
        type="text"
        {...register("image")}
        id={imageId}
      />
      <Optional>(opcional)</Optional>

      <Button type="submit" content="Avançar" />
    </Form>
  );
}

export default ImageForm;
