import React, { ReactNode } from "react";
import {
  CardImage,
  ImageWrapper,
} from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import { IAdvisor } from "@/types/users";
import { MainInfoWrapper } from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo/AdvisorInfo.style";
import DefaultImage from "@/assets/illustrations/profile.svg";

function AdvisorCard({
  children,
  advisor,
}: {
  advisor: IAdvisor;
  children: ReactNode;
}) {
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
      {children}
    </MainInfoWrapper>
  );
}

export default AdvisorCard;
