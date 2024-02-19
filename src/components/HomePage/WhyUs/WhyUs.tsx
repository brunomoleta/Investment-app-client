import React from "react";
import { Wrapper } from "@/components/HomePage/WhyUs/WhyUs.style";
import WhyUsList from "@/components/HomePage/WhyUs/WhyUsList";
import WhyUsText from "@/components/HomePage/WhyUs/WhyUsText";
import {InsideWrapper} from "@/components/HomePage/WhyUs/WhyUsList/WhyUsList.style";

function WhyUs() {
  return (
    <Wrapper>
      <InsideWrapper>
        <WhyUsText />
        <WhyUsList />
      </InsideWrapper>
    </Wrapper>
  );
}

export default WhyUs;
