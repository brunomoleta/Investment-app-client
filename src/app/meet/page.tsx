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

function MeetAdvisors() {
  const { getAdvisorsNoAuth } = useAdvisorContext() as IAdvisorContext;
  const { isLoading, setIsLoading } = useUtilsContext() as IUtilsContext;

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await getAdvisorsNoAuth();
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <Template>
        <Heading>Nossos Especialistas</Heading>
        {isLoading ? <Spinner /> : <RenderManyAdvisors />}

    </Template>
  );
}

export default MeetAdvisors;
