import { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}

export interface ButtonProps{
  content: string;
  href?: string;
  isPrimary?: boolean;
  onClick?: ()=>void;
}