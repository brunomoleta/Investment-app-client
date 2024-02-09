import React, { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string | React.ReactNode;
  href?: string;
  isPrimary?: boolean;
}
