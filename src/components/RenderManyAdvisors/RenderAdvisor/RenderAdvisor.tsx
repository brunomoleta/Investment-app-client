import DefaultImage from "../../../assets/illustrations/profile.svg";
import React from "react";
import { IAdvisor } from "@/types/users";
import {
  AdvisorImage,
  Bio,
  Card,
  Highlight,
  ImageWrapper,
  Li,
  Line,
} from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import AdvisorInfo from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorInfo";

export enum Experience {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
  Expert = "expert",
}

function RenderAdvisor({ advisor }: { advisor: IAdvisor }) {
  const { bio } = advisor;

  return (
    <Li>
      <Card>
        <AdvisorInfo advisor={advisor} />
        <Bio>
          O que me motiva: <Highlight>{bio}</Highlight>
        </Bio>
      </Card>
    </Li>
  );
}

export default RenderAdvisor;
