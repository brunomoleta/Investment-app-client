import React from 'react';


import { Wrapper } from '@/components/HomePage/Hero/Hero.style';
import MockUp from '@/components/HomePage/Hero/MockUp';
import TextHero from '@/components/HomePage/Hero/TextHero';

function Hero() {
  return (
    <Wrapper>
      <MockUp />
      <TextHero />
    </Wrapper>
  );
}

export default Hero;
