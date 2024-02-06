import React from "react";
import { Wrapper } from "@/components/HomePage/WhyUs/WhyUs.style";
import WhyUsList from "@/components/HomePage/WhyUs/WhyUsList";
import WhyUsText from '@/components/HomePage/WhyUs/WhyUsText';

function WhyUs() {
  return (
    <Wrapper>
      <WhyUsText/>
      <WhyUsList />
    </Wrapper>
  );
}

export default WhyUs;
