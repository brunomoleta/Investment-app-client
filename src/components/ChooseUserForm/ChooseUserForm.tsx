import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";

function ChooseUserForm() {
  const router = useRouter();
  const id = React.useId();
  const investorId = `${id}-investor`;
  const advisorId = `${id}-advisor`;

  const { setUserType } = useUserContext() as IUserContext;

  const { register, setFocus, handleSubmit } = useForm<RadioOutput>({
    defaultValues: { radioOutput: "investor" },
  });

  React.useEffect(()=>{setFocus("radioOutput")},[])

  function onSubmit(formData: RadioOutput): void {
    router.push(`/${formData.radioOutput}`);
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
