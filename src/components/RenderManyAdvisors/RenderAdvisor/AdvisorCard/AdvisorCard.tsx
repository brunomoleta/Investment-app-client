import React from "react";
import {
  CardImage,
  ImageWrapper,
} from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import AdvisorInfo from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo";
import { IAdvisor } from "@/types/users";
import { MainInfoWrapper } from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo/AdvisorInfo.style";
import DefaultImage from "@/assets/illustrations/profile.svg";

function AdvisorCard({ advisor }: { advisor: IAdvisor }) {
  const { image, name } = advisor;
  const advisorImage = image ? image : DefaultImage;

  return (
    <MainInfoWrapper>
      <ImageWrapper>
        <CardImage
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={true}
          src={advisorImage}
          alt={name}
        />
      </ImageWrapper>
      <AdvisorInfo advisor={advisor} />
    </MainInfoWrapper>
  );
}

export default AdvisorCard;
