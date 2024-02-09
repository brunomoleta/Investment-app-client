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
  const { cleanForm, step } = useUtilsContext() as IUtilsContext;

  return (
    <Wrapper>
      {step === 0 ? (
        <>
          <h2>{isSignin ? "Ainda não tens uma conta?" : "Já possui uma conta?"}</h2>
          <Button
            onClick={cleanForm}
            href={href}
            isPrimary={false}
            content={isSignin ? "Cadastre-se" : "Entrar"}
          />
        </>
      ) : (
        <>
          <Button
            onClick={cleanForm}
            isPrimary={false}
            content={isSignin ? "alterar e-mail" : "voltar ao início"}
          />
        </>
      )}
    </Wrapper>
  );
}

export default SignInAlternative;
