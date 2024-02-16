"use client";
import React from "react";
import { useAdvisorContext } from "@/providers/AdvisorProvider";
import { IAdvisorContext } from "@/types/advisorContext";
import { useForm } from "react-hook-form";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import {
  IAdvisor,
  IFullInvestor,
} from "@/types/users";
import { Form } from "@/components/Login/LoginForm/LoginForm.style";
import Input from "@/components/Input";
import AdvisorInfo from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo";
import AdvisorCard from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard";
import { FormWrapper } from "@/components/SignIn/SignInForm/ChooseAdvisor/ChooseAdvisor.style";
import Button from "@/components/Button";
import {zodResolver} from "@hookform/resolvers/zod";
import advisorSchema from "@/schemas/advisorSchema";

function UpdateAdvisor() {
  const { setIsLoading, changeUrl } = useUtilsContext() as IUtilsContext;
  const { activeUser, tokenState, userType, updateUser, retrieveUserFromId } =
    useUserContext() as IUserContext;
  const { advisors, getAdvisorsNoAuth } =
    useAdvisorContext() as IAdvisorContext;

  React.useEffect(() => {
    const fetchData = async () => {
      await getAdvisorsNoAuth();
    };
    fetchData();
  }, [getAdvisorsNoAuth]);

  const ReactId = React.useId();

  const { advisor } = activeUser as IFullInvestor;
  console.log(activeUser);
  console.log(advisor);
  const { register, handleSubmit } = useForm<{ advisor_id: string }>({
    defaultValues: { advisor_id: advisor.id },
    resolver: zodResolver(advisorSchema)
  });

  if (!advisors) {
    return null;
  }

  async function onSubmit(formData: { advisor_id: string }) {
    setIsLoading(true);
    await updateUser(formData);
    await retrieveUserFromId(tokenState, userType);
    changeUrl('/advisor/dashboard')
    setIsLoading(false);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          {advisors.map((advisor: IAdvisor) => (
            <Input
              type="radio"
              key={advisor.id}
              {...register("advisor_id")}
              id={`${ReactId}-${advisor.id}}`}
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
      <Button
        onClick={() => changeUrl("/investor/dashboard")}
        isPrimary={false}
        content="cancelar"
      />
    </>
  );
}

export default UpdateAdvisor;
