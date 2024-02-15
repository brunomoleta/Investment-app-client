import React from 'react';

import MockUp from '@/components/HomePage/Hero/MockUp';
import TextHero from '@/components/HomePage/Hero/TextHero';
import {Wrapper} from "@/components/HomePage/Hero/Hero.style";

function Hero() {
  return (
    <Wrapper>
      <MockUp />
      <TextHero />
    </Wrapper>
  );
}

export default Hero;
