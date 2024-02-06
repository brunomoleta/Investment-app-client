import React from "react";
import { Heading, Wrapper } from '@/components/HomePage/WhyUs/WhyUsText/WhyUsText.style';

function WhyUsText() {
  return (
    <Wrapper>
      <Heading>Por que escolher o Easybank?</Heading>
      <p>
        Nós combinamos proteção de dados de leis suíças ,assessoria financeira
        personalizada e
        <em>
          uma experiência bancária premiada para ajudar você a alcançar seus
          objetivos financeiros.
        </em>
      </p>
    </Wrapper>
  );
}

export default WhyUsText;
