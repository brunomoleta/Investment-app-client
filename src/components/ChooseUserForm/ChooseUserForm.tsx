"use client";
import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import { useForm } from "react-hook-form";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

function ChooseUserForm() {
  const id = React.useId();
  const investorId = `${id}-investor`;
  const advisorId = `${id}-advisor`;

  const { setUserType } = useUserContext() as IUserContext;
  const { changeUrl } = useUtilsContext() as IUtilsContext;

  const { register, setFocus, handleSubmit } = useForm<RadioOutput>({
    defaultValues: { radioOutput: "investor" },
  });

  React.useEffect(() => {
    setFocus("radioOutput");
  }, [setFocus]);

  function onSubmit(formData: RadioOutput): void {
    changeUrl(`/user/${formData.radioOutput}`);
    setUserType(formData.radioOutput);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("radioOutput")}
        id={investorId}
        value="investor"
        type="radio"
        label="investidor"
      />
      <Input
        {...register("radioOutput")}
        id={advisorId}
        value="advisor"
        type="radio"
        label="assessor"
      />
      <Button type="submit" content="Avançar" />
    </Form>
  );
}

export default ChooseUserForm;

interface RadioOutput {
  radioOutput: "investor" | "advisor";
}
