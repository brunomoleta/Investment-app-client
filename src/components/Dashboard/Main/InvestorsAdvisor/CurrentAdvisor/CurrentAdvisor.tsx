import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import AdvisorInfo from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo";
import { IFullInvestor } from "@/types/users";
import AdvisorCard from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard";
import {
  Bio,
  Card,
  Highlight,
} from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";

function CurrentAdvisor() {
  const { activeUser } = useUserContext() as IUserContext;

  if (!activeUser) {
    return;
  }
  const { advisor } = activeUser as IFullInvestor;

  return (
    <Card>
      <AdvisorCard advisor={advisor}>
        <AdvisorInfo isDashboard={true} advisor={advisor} />
      </AdvisorCard>

      <Bio>
        O que me motiva: <Highlight>{advisor.bio}</Highlight>
      </Bio>
    </Card>
  );
}

export default CurrentAdvisor;
