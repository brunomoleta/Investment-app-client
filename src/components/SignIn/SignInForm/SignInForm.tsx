"use client";
import React from "react";
import UserName from "@/components/SignIn/SignInForm/UserName";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Email from "@/components/Login/LoginForm/Email";
import PhoneNumber from "@/components/SignIn/SignInForm/PhoneNumber";
import Image from "@/components/SignIn/SignInForm/Image";
import Amount from "@/components/SignIn/SignInForm/Amount";
import Confirmation from "@/components/SignIn/SignInForm/Confirmation";
import DoublePassword from "@/components/SignIn/SignInForm/DoublePassword";
import { UserType } from "@/types/userContext";

function SignInForm({ userType }: { userType: UserType }) {
  const { step } = useUtilsContext() as IUtilsContext;

  return (
    <>
      {step === 0 && <UserName />}
      {step === 1 && <Email />}
      {step === 2 && <PhoneNumber />}
      {step === 3 && <Image />}
      {step === 4 && <Amount />}
      {step === 5 && <Confirmation />}
      {step === 6 && <DoublePassword userType={userType} />}
    </>
  );
}

export default SignInForm;
