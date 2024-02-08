"use client";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Email from "@/components/Login/LoginForm/Email";
import Password from "@/components/Login/LoginForm/Password";
import {UserType} from "@/types/user";

function LoginForm({ userType }: { userType: UserType }) {
  const { step } = useUtilsContext() as IUtilsContext;



  return <>

      {step === 0 && <Email/>}
      {step === 1 && <Password userType={userType}/>}

  </>;
}

export default LoginForm;
