import React from "react";

export enum Experience {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
  Expert = "expert",
}

export enum InvestmentAmount {
  Starter = "starter",
  WellRounded = "well-rounded",
  Multimillionaire = "multimillionaire",
  Wealthy = "wealthy",
}

export const Upper = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

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

export const isStringFunction = (
  input: string | React.ReactNode
): string | React.ReactNode => {
  if (typeof input === "string") {
    return Upper(input);
  }
  return input;
};

export function formatPhoneNumber(phoneNumber: string): string {
  const areaCode = phoneNumber.slice(0, 2);
  const prefix = phoneNumber.slice(2, 3);
  const firstPart = phoneNumber.slice(3, 7);
  const secondPart = phoneNumber.slice(7);

  return `(${areaCode})${prefix}-${firstPart}-${secondPart}`;
}

export function renderExperience(experience: Experience) {
  if (experience === Experience.Beginner) {
    return "de até R$ 20 mil";
  } else if (experience === Experience.Intermediate) {
    return "entre R$20-50 mil";
  } else if (experience === Experience.Advanced) {
    return "entre R$50-250 mil";
  }
  return "maiores que R$250 mil";
}

export function renderAmount(amount: InvestmentAmount) {
  if (amount === InvestmentAmount.Starter) {
    return "de até R$ 20 mil";
  } else if (amount === InvestmentAmount.WellRounded) {
    return "entre R$20-50 mil";
  } else if (amount === InvestmentAmount.Wealthy) {
    return "entre R$50-250 mil";
  }
  return "maiores que R$250 mil";
}
