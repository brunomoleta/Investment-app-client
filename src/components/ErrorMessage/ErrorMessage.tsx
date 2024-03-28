import React from "react";
import { Heading } from "@/components/HomePage/WhyUs/WhyUsText/WhyUsText.style";
import { ChildrenProps } from "@/types/children";
import { Wrapper } from "@/components/BlogFeed/BlogFeed.style";

function ErrorMessage({ children }: ChildrenProps) {
  return (
    <Wrapper>
      <Heading>Erro de conexão com a rede</Heading>
      <p>{children}</p>
    </Wrapper>
  );
}

export default ErrorMessage;
