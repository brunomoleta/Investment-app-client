'use client';
import React from 'react';
import { ButtonProps } from '@/types/children';
import { PrimaryButton } from '@/styled-components/Button.style';
import Link from 'next/link';
import { Upper } from '@/services/service';

const Button: React.FC<ButtonProps> = ({ href, content }) => {
  return <PrimaryButton
    as={href ? Link : 'button'}
    href={href}
  >
    {Upper(content)}
  </PrimaryButton>;
};

export default Button;