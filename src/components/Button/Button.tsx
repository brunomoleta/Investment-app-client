"use client";
import React from "react";
import { ButtonProps } from "@/types/children";
import {ButtonStyle, PrimaryButton} from "@/styled-components/Button.style";
import Link from "next/link";

const Button: React.FC<ButtonProps> = ({ isPrimary = true, href, content, ...delegated}) => {
    const Component = isPrimary ? PrimaryButton : ButtonStyle;
    const props = {
        as: href ? Link : "button",
        href: href,
        children: content,
        ...delegated,
    };

    return <Component {...props} />;
};
export default Button;
