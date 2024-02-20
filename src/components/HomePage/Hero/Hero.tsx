import React from "react";

import MockUp from "@/components/HomePage/Hero/MockUp";
import TextHero from "@/components/HomePage/Hero/TextHero";
import { Wrapper } from "@/components/HomePage/Hero/Hero.style";
import { WidthWrapper } from "@/styled-components/MaxWidth.style";

function Hero() {
  return (
    <Wrapper>
      <WidthWrapper>
        <MockUp />
        <TextHero />
      </WidthWrapper>
    </Wrapper>
  );
}

export default Hero;
