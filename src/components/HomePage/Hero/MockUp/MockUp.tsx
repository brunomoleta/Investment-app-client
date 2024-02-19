import React from "react";
import Mock from "@/assets/images/image-mockups.png";
import Desktop from "../../../../assets/images/bg-intro-desktop.svg";
import Mobile from "../../../../assets/images/bg-intro-mobile.svg";
import {
  BackgroundDesktop,
  BackgroundMobile,
  DevicesImage,
  Wrapper,
} from "@/components/HomePage/Hero/MockUp/Mock.style";

function MockUp() {
  return (
    <Wrapper>
      <BackgroundMobile src={Mobile} alt="" />
      <BackgroundDesktop src={Desktop} alt="" />
      <DevicesImage src={Mock} alt="app of the product running" />
    </Wrapper>
  );
}

export default MockUp;
