import React from "react";

export const Upper = (word: string) => word.charAt(0).toUpperCase()
  + word.slice(1).toLowerCase();

export function handleDigits(value: string) {
    value = value.replace(/\D/g, "");

    if (value.length > 0) {
        value = "(" + value;
    }

    if (value.length > 3) {
        value = value.replace(/(\d{2})(\d)/, "$1)$2");
    }

    if (value.length > 7) {
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
    }

    if (value.length > 9) {
        value = value.replace(/(\d{1})(\d{4})(\d)/, "$1-$2-$3");
    }

    if (value.length > 14) {
        value = value.substring(0, 14);
    }

    return value;
}

export const isStringFunction = (input: string | React.ReactNode): string | React.ReactNode => {
    if (typeof input === "string") {
        return Upper(input);
    }
    return input;
}


