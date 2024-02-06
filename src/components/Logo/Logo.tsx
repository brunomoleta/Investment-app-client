import React from 'react';
import { LogoStyle } from '@/components/Logo/Logo.style';
import Image from 'next/image';

type LogoProps = {
  src: string;
};

const Logo: React.FC<LogoProps> = ({src}) => {
  return (
    <LogoStyle href={"/"}>
      <Image alt="app logo" src={src} />
    </LogoStyle>
  );
}

export default Logo;