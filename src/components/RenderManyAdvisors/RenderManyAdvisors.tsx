"use client";
import React from "react";
import { useAdvisorContext } from "@/providers/AdvisorProvider";
import { IAdvisorContext } from "@/types/advisorContext";
import RenderAdvisor from "@/components/RenderManyAdvisors/RenderAdvisor";
import { AdvisorList } from "@/components/RenderManyAdvisors/ManyAdvisors.style";

function RenderManyAdvisors() {
  const { advisors } = useAdvisorContext() as IAdvisorContext;
  return (
    <AdvisorList>
      {advisors &&
        advisors.map((advisor) => (
          <RenderAdvisor key={advisor.id} advisor={advisor} />
        ))}
    </AdvisorList>
  );
}

export default RenderManyAdvisors;
