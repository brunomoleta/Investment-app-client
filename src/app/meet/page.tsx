"use client";
import React from "react";
import Template from "@/components/Template";
import { IAdvisorContext } from "@/types/advisorContext";
import { useAdvisorContext } from "@/providers/AdvisorProvider";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Spinner from "@/components/Spinner";
import { Heading } from "@/components/HomePage/WhyUs/WhyUsText/WhyUsText.style";
import RenderManyAdvisors from "@/components/RenderManyAdvisors";
import { MainWrapper } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import ErrorMessage from "@/components/ErrorMessage";

function MeetAdvisors() {
  const { getAdvisorsNoAuth, advisors } =
    useAdvisorContext() as IAdvisorContext;
  const { isLoading } = useUtilsContext() as IUtilsContext;

  React.useEffect(() => {
    const fetchData = async () => {
      await getAdvisorsNoAuth();
    };

    fetchData();
  }, []);

  function renderPage() {
    if (!advisors) {
      return (
        <>
          <ErrorMessage>
            Não foi possível apresentar nossos especialistas no momento, por
            favor volte mais tarde :)
          </ErrorMessage>
        </>
      );
    }
    return (
      <>
        <Heading>Nossos Especialistas</Heading>
        {isLoading ? <Spinner /> : <RenderManyAdvisors advisors={advisors} />}
      </>
    );
  }

  return (
    <Template>
      <MainWrapper>{renderPage()}</MainWrapper>
    </Template>
  );
}

export default MeetAdvisors;
