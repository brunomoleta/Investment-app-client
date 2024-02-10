"use client";
import React from "react";
import UserName from "@/components/SignIn/SignInForm/UserName";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Email from "@/components/Login/LoginForm/Email";
import PhoneNumber from "@/components/SignIn/SignInForm/PhoneNumber";
import Image from "@/components/SignIn/SignInForm/Image";
import Amount from "@/components/SignIn/SignInForm/Amount";
import DoublePassword from "@/components/SignIn/SignInForm/DoublePassword";
import { UserType } from "@/types/userContext";
import ChooseAdvisor from "@/components/SignIn/SignInForm/ChooseAdvisor";
import Experience from "@/components/SignIn/SignInForm/Experience";
import AdvisorBio from "@/components/SignIn/SignInForm/AdvisorBio";
import AdvisorSpeciality from "@/components/AdvisorSpeciality";

function SignInForm({ userType }: { userType: UserType }) {
  const { step } = useUtilsContext() as IUtilsContext;

  return (
    <>
      {step === 0 && <UserName />}
      {step === 1 && <Email />}
      {step === 2 && <PhoneNumber />}
      {step === 3 && <Image />}

      {step === 4 && userType === "investor" && <Amount />}
      {step === 4 && userType === "advisor" && <Experience />}

      {step === 5 && userType === "investor" && <ChooseAdvisor />}
      {step === 5 && userType === "advisor" && <AdvisorBio />}

      {step === 6 && userType === "investor" && <DoublePassword />}
      {step === 6 && userType === "advisor" && <AdvisorSpeciality />}


      {step === 7 && userType === "advisor" && <DoublePassword />}
    </>
  );
}

export default SignInForm;
