import React from "react";
import { IInvestor } from "@/types/users";
import { ImageWrapper } from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import { CardImage } from "../../../RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import DefaultImage from "@/assets/illustrations/profile.svg";
import InvestorInfo from "@/components/Dashboard/InvestorsList/InvestorItem/InvestorInfo";

function InvestorItem({ investor }: { investor: IInvestor }) {
  const { name, image } = investor;

  const advisorImage = image ? image : DefaultImage;
  return (
    <li>
      <ImageWrapper>
        <CardImage
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={true}
          src={advisorImage}
          alt={name}
        />
      </ImageWrapper>
      <InvestorInfo investor={investor} />
    </li>
  );
}

export default InvestorItem;
