import React from "react";
import { useAdvisorContext } from "@/providers/AdvisorProvider";
import { IAdvisorContext } from "@/types/advisorContext";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import AdvisorCard from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { FormWrapper } from "@/components/SignIn/SignInForm/ChooseAdvisor/ChooseAdvisor.style";
import AdvisorInfo from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo";

function ChooseAdvisor() {
  const { advisors } = useAdvisorContext() as IAdvisorContext;
  const { setStep, formInfo, setFormInfo } = useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const { register, handleSubmit } = useForm<{ advisor_id: string }>({});

  if (!advisors) {
    return null;
  }
  const onSubmit = (formData: { advisor_id: string }) => {
    setFormInfo({ ...formInfo, ...formData });
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <h2>Escolha seu assessor:</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          {advisors.map((advisor) => (
            <Input
              type="radio"
              key={advisor.id}
              {...register("advisor_id")}
              id={`${id}-${advisor.id}`}
              value={advisor.id}
              label={
                <AdvisorCard advisor={advisor}>
                  <AdvisorInfo advisor={advisor} />
                </AdvisorCard>
              }
            />
          ))}
        </FormWrapper>
        <Button type="submit" content="Avançar" />
      </Form>
    </>
  );
}

export default ChooseAdvisor;
