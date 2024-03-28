import React from "react";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined | string;
  type?: string | undefined;
  label: string | React.ReactNode;
  id: string;
}
export interface ITextarea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError | undefined | string;
  label: string | React.ReactNode;
  id: string;
}
