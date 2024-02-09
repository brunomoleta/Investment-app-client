import React from "react";
import { HomeHero } from "@/services/data";
import Button from "@/components/Button";
import {
  HeroH1,
  SubTitle,
  Wrapper,
} from "@/components/HomePage/Hero/TextHero/TextHero.style";
import { useAdvisorContext } from "@/providers/AdvisorProvider";
import { IAdvisorContext } from "@/types/advisorContext";

function TextHero() {
  const { handleMeetClick } = useAdvisorContext() as IAdvisorContext;

  return (
    <Wrapper>
      <HeroH1>{HomeHero.heading}</HeroH1>
      <SubTitle>{HomeHero.subheading}</SubTitle>
      <Button
        onClick={handleMeetClick}
        content="Conhecer assessores"
      />
    </Wrapper>
  );
}

export default TextHero;
