"use client";
import React from "react";
import { ButtonProps } from "@/types/children";
import { ButtonStyle, PrimaryButton } from "@/styled-components/Button.style";
import Link from "next/link";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Spinner from "@/components/Spinner";

const Button: React.FC<ButtonProps> = ({
  isPrimary = true,
  href,
  content,
  ...delegated
}) => {
  const { isLoading } = useUtilsContext() as IUtilsContext;

  const Component = isPrimary ? PrimaryButton : ButtonStyle;
  const props = {
    as: href ? Link : "button",
    href: href,
    children: isLoading ? <Spinner /> : content,
    ...delegated,
  };

  return <Component disabled={isLoading} {...props} />;
};
export default Button;
