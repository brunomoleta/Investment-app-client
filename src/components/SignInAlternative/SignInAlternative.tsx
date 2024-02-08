"use client";
import React from "react";
import Button from "@/components/Button";
import { Wrapper } from "@/components/SignInAlternative/SignIn.style";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

function SignInAlternative({
  href,
  isSignin = true,
}: {
  href: string;
  isSignin?: boolean;
}) {
  const { setStep } = useUtilsContext() as IUtilsContext;

  return (
    <Wrapper>
      <h2>Não tem uma conta?</h2>

      <Button
        href={href}
        isPrimary={false}
        content={isSignin ? "cadastre-se" : "fazer login"}
      />
    </Wrapper>
  );
}

export default SignInAlternative;
