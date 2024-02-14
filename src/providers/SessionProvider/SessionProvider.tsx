"use client";
import React from "react";
import { ILogin, UserSignIn } from "@/types/login";
import { IUserContext, UserType } from "@/types/userContext";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useUserContext } from "@/providers/UserProvider";
import { ISessionContext } from "@/types/sessionContext";

const SessionContext = React.createContext({});

function useSessionContext(): {} {
  return React.useContext(SessionContext);
}

function SessionProvider(props: { children: React.ReactNode }) {
  const router = useRouter();
  const { cleanForm, setIsLoading } = useUtilsContext() as IUtilsContext;
  const { setUserType, userType, retrieveUserFromId } =
    useUserContext() as IUserContext;
  const loginRequest = async (formData: ILogin, userType: UserType) => {
    try {
      setIsLoading(true);

      const { data } = await api.post(`/session/${userType}`, formData);
      window.localStorage.setItem("@TYPE", JSON.stringify(userType));
      window.localStorage.setItem("@TOKEN", JSON.stringify(data.token));

      setUserType(userType);

      await retrieveUserFromId();


      toast.success("Seja bem vinda(o)")
      router.push(`/${userType}/dashboard`);
    } catch (error: any) {
      if (error?.response) {
        switch (error.response.status) {
          case 401:
            toast.error("Senha ou e-mail incorreto :)");
            break;
          case 404:
            toast.error("Por favor verifique sua conexão com a internet :)");
            break;
        }
      } else {
        console.error("Error:", error);
        toast.error("Verifique sua conexão :)");
      }
    } finally {
      setIsLoading(false);
      cleanForm();
    }
  };

  const signUpRequest = async (formData: UserSignIn): Promise<void> => {
    try {
      setIsLoading(true);

      await api.post(`/${userType}`, formData);

      toast.success(`Cadastro realizado com sucesso :)`);

      router.push(`/${userType}`);
    } catch (error: any) {
      if (error?.response) {
        switch (error.response.status) {
          case 401:
            toast.error("Senha ou e-mail incorreto :)");
            break;
          case 404:
            toast.error("Por favor verifique sua conexão com a internet :)");
            break;
        }
      } else {
        console.error("Error:", error);
        toast.error("Verifique sua conexão :)");
      }
    } finally {
      cleanForm();
      setIsLoading(false);
    }
  };

  const values: ISessionContext = {
    signUpRequest,
    loginRequest,
  };

  return (
    <SessionContext.Provider value={values}>
      {props.children}
    </SessionContext.Provider>
  );
}

export { SessionProvider, useSessionContext };
