"use client";
import React from "react";
import Template from "@/components/Template";
import { IAdvisorContext } from "@/types/advisorContext";
import { useAdvisorContext } from "@/providers/AdvisorProvider";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Spinner from "@/components/Spinner";
import {Heading} from "@/components/HomePage/WhyUs/WhyUsText/WhyUsText.style";
import RenderManyAdvisors from "@/components/RenderManyAdvisors";
import {MainWrapper} from "@/components/RenderManyAdvisors/ManyAdvisors.style";

function MeetAdvisors() {
  const { getAdvisorsNoAuth } = useAdvisorContext() as IAdvisorContext;
  const { isLoading } = useUtilsContext() as IUtilsContext;

  React.useEffect(() => {
    const fetchData = async () => {
      await getAdvisorsNoAuth();
    };

    fetchData();
  }, [getAdvisorsNoAuth]);
  return (
    <Template>
      <MainWrapper>
        <Heading>Nossos Especialistas</Heading>
        {isLoading ? <Spinner /> : <RenderManyAdvisors />}
      </MainWrapper>

    </Template>
  );
}

export default MeetAdvisors;
