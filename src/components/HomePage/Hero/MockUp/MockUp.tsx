import React from 'react';
import Mock from '@/assets/images/image-mockups.png';
import MockBackgroundImage from '../../../../assets/images/bg-intro-mobile.svg';
import { MockBackground, MockImage, Wrapper } from '@/components/HomePage/Hero/MockUp/Mock.style';


function MockUp() {
  return (
    <Wrapper>
      <MockBackground src={MockBackgroundImage} alt="" />
      <MockImage src={Mock} alt="app of the product running" />
    </Wrapper>
  );
}

export default MockUp;
