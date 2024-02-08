"use client";
import React from "react";
import { ButtonProps } from "@/types/children";
import {ButtonStyle, PrimaryButton} from "@/styled-components/Button.style";
import Link from "next/link";
import { Upper } from "@/services/service";

const Button: React.FC<ButtonProps> = ({ isPrimary = true, href, content }) => {
    const Component = isPrimary ? PrimaryButton : ButtonStyle;
    const props = {
        as: href ? Link : "button",
        href: href,
        children: Upper(content)
    };

    return <Component {...props} />;
};
export default Button;
