import React from "react";

import {
  Bio,
  Card,
  Highlight,
  Li,
} from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import AdvisorCard from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard";
import { IAdvisor } from "@/types/users";
import AdvisorInfo from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo";

export enum Experience {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
  Expert = "expert",
}

function RenderAdvisor({ advisor }: { advisor: IAdvisor }) {
  return (
    <Li>
      <Card>
        <AdvisorCard advisor={advisor}>
          <AdvisorInfo advisor={advisor} />
        </AdvisorCard>

        <Bio>
          O que me motiva: <Highlight>{advisor.bio}</Highlight>
        </Bio>
      </Card>
    </Li>
  );
}

export default RenderAdvisor;
