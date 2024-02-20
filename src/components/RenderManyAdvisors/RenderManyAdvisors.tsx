import React from "react";
import RenderAdvisor from "@/components/RenderManyAdvisors/RenderAdvisor";
import { AdvisorList } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import { IAdvisor } from "@/types/users";

function RenderManyAdvisors({ advisors }: { advisors: IAdvisor[] }) {
  return (
    <AdvisorList>
      {advisors.map((advisor) => (
        <RenderAdvisor key={advisor.id} advisor={advisor} />
      ))}
    </AdvisorList>
  );
}

export default RenderManyAdvisors;
