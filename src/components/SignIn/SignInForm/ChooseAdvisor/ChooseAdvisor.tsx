import React from "react";
import { useAdvisorContext } from "@/providers/AdvisorProvider";
import { IAdvisorContext } from "@/types/advisorContext";
import ErrorMessage from "@/components/ErrorMessage";
import ChooseAdvisorForm from "@/components/SignIn/SignInForm/ChooseAdvisor/ChooseAdvisorForm";

function ChooseAdvisor() {
  const { advisors } = useAdvisorContext() as IAdvisorContext;

  if (!advisors) {
    return (
      <ErrorMessage>
          Não é possível apresentar os assessores para ti no momento, por favor
          cadastre-se mais tarde :)
      </ErrorMessage>
    );
  }
  return <ChooseAdvisorForm />;
}

export default ChooseAdvisor;
