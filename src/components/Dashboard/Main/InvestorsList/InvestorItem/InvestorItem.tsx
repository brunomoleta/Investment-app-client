import React from "react";
import { IInvestor } from "@/types/users";
import {CardImage, ImageWrapper, Li} from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";

import DefaultImage from "@/assets/illustrations/profile.svg";

import {DashboardArticle} from "@/components/BlogFeed/BlogPosts/Article/Article.style";
import InvestorInfo from "@/components/Dashboard/Main/InvestorsList/InvestorItem/InvestorInfo";

function InvestorItem({ investor }: { investor: IInvestor }) {
  const { name, image } = investor;

  const advisorImage = image ? image : DefaultImage;
  return (
    <Li>
      <DashboardArticle>
        <ImageWrapper>
          <CardImage
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill={true}
            src={advisorImage}
            alt={name}
          />
        </ImageWrapper>
        <InvestorInfo investor={investor} />
      </DashboardArticle>
    </Li>
  );
}

export default InvestorItem;
