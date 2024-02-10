import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function ChooseUserForm() {
  const router = useRouter();
  const id = React.useId();
  const investorId = `${id}-investor`;
  const advisorId = `${id}-advisor`;

  const { register, handleSubmit } = useForm<RadioOutput>();

  function onSubmit(formData: RadioOutput): void {
    router.push(`/${formData.radioOutput}`);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("radioOutput")}
        id={advisorId}
        value="advisor"
        type="radio"
        label="assessor"
      />
      <Input
        {...register("radioOutput")}
        id={investorId}
        value="investor"
        type="radio"
        label="investidor"
      />
      <Button type="submit" content="Avançar" />
    </Form>
  );
}

export default ChooseUserForm;

interface RadioOutput {
  radioOutput: "investor" | "advisor";
}
