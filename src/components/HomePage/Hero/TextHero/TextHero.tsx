import React from 'react';
import { HomeHero } from '@/services/data';
import Button from '@/components/Button';
import { HeroH1, SubTitle, Wrapper } from '@/components/HomePage/Hero/TextHero/TextHero.style';

function TextHero() {
  return (
    <Wrapper>
      <HeroH1>{HomeHero.heading}</HeroH1>
      <SubTitle>{HomeHero.subheading}</SubTitle>
      <Button content="conhecer assessores" href="/advisors" />
    </Wrapper>
  );
}

export default TextHero;
