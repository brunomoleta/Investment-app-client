"use client";
import React from "react";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Button from "@/components/Button";

function Experience() {
  const { setStep, formInfo, setFormInfo } = useUtilsContext() as IUtilsContext;

  const id = React.useId();
  const beginnerId = `${id}-${ExperienceLevel.Beginner}}`;
  const intermediateId = `${id}-${ExperienceLevel.Intermediate}}`;
  const advancedId = `${id}-${ExperienceLevel.Advanced}}`;
  const expertId = `${id}-${ExperienceLevel.Expert}}`;

  const { register, handleSubmit, setFocus } = useForm<IExperience>({
    defaultValues: { experience: ExperienceLevel.Advanced },
  });
  React.useEffect(() => {
    setFocus("experience");
  }, []);

  function onSubmit(formData: IExperience): void {
    setFormInfo({ ...formInfo, ...formData });
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <>
      <h2>Experiência</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("experience")}
          type="radio"
          id={beginnerId}
          name="experience"
          value={ExperienceLevel.Beginner}
          label="até 2 anos"
        />

        <Input
          {...register("experience")}
          type="radio"
          id={intermediateId}
          name="experience"
          value={ExperienceLevel.Intermediate}
          label="3 a 4 anos"
        />

        <Input
          {...register("experience")}
          type="radio"
          id={advancedId}
          name="experience"
          value={ExperienceLevel.Advanced}
          label="7 a 15 anos"
        />

        <Input
          {...register("experience")}
          type="radio"
          id={expertId}
          name="experience"
          value={ExperienceLevel.Expert}
          label="mais de 15 anos"
        />
        <Button type="submit" content="Avançar" />
      </Form>
    </>
  );
}

export default Experience;

enum ExperienceLevel {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
  Expert = "expert",
}

interface IExperience {
  experience: ExperienceLevel;
}
