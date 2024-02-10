"use client";
import React from "react";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { ILogin, UserSignIn } from "@/types/login";
import { IUserContext, UserName, UserType } from "@/types/userContext";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useRouter } from "next/navigation";

const UserContext = React.createContext({});

function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider(props: { children: React.ReactNode }) {
  const router = useRouter();
  const { setIsLoading, setStep } = useUtilsContext() as IUtilsContext;

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [userType, setUserType] = React.useState<UserType>("investor");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const [userName, setUserName] = React.useState<UserName>(null);

  const loginRequest = async (formData: ILogin, userType: UserType) => {
    try {
      setIsLoading(true);
      const { data } = await api.post(`/session/${userType}`, formData);
      window.localStorage.setItem("@TYPE", JSON.stringify(userType));
      window.localStorage.setItem("@TOKEN", JSON.stringify(data.token));

      toast.success("Tu estás logado :)");

      setUserType(userType);
      setIsLoggedIn(true);

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
    }
  };

  const signUpRequest = async (formData: UserSignIn): Promise<void> => {
    try {
      setIsLoading(true);

      const { data } = await api.post(`/${userType}`, formData);

      toast.success(`Cadastro realizado com sucesso :)`);

      setIsLoggedIn(true);

      setStep(0);
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
      setIsLoading(false);
    }
  };

  async function retrieveUserFromId() {
    try {
      const savedToken = window.localStorage.getItem("@TOKEN");
      const savedType = window.localStorage.getItem("@TYPE");

      if (!savedToken || !savedType) {
        return;
      }

      const userToken = JSON.parse(savedToken);
      const userType = JSON.parse(savedType);

      const { data } = await api.get(`/${userType}/id`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      toast.success(`Bem vindo ${data.name} :)`);
      setUserName(data.name);
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
        toast.error("An unexpected error occurred :)");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function changePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  function quitAccount(): void {
    localStorage.removeItem("@TOKEN");
    router.push("/");
  }

  const values: IUserContext = {
    signUpRequest,

    isLoggedIn,
    setIsLoggedIn,

    changePasswordVisibility,

    isPasswordVisible,
    setIsPasswordVisible,

    userName,
    setUserName,

    loginRequest,

    retrieveUserFromId,

    setUserType,
    userType,

    quitAccount,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export { UserProvider, useUserContext };
