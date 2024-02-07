"use client";
import React from "react";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { ILogin } from "@/types/login";
import { IUserContext, UserName, UserType } from "@/types/user";
import { redirect } from "next/navigation";

const UserContext = React.createContext({});

function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider(props: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  const [userType, setUserType] = React.useState<UserType>("investor");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const [step, setStep] = React.useState(0);

  const [userName, setUserName] = React.useState<UserName>(null);

  const loginRequest = async (formData: ILogin, userType: UserType) => {
    try {
      const { data } = await api.post(`/session/${userType}`, formData);
      window.localStorage.setItem("@TYPE", JSON.stringify(userType));
      window.localStorage.setItem("@TOKEN", JSON.stringify(data.token));

      toast.success("Tu estás logado :)");

      setIsLoggedIn(!isLoggedIn);
      setUserType(userType);
    } catch (error: any) {
      if (error.response.status === 404) {
        toast.error("Por favor verifique sua conexão com a internet :)");
      } else if (error.response.status === 401) {
        toast.error("Senha ou e-mail incorreto :)");
      }
      console.log(error);
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
      toast.success(`Bem vindo ${data.name} :)`)
      setUserName(data.name);
    } catch (error: any) {
      if (error.response.status === 404) {
        toast.error("Conexão inexistente. Por favor prove mais tarde.");
      }
      if (error.response.status === 401) {
        toast.error("Este id não foi encontrado.");
      }
      console.log(error);
    }
  }

  function changePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  function quitAccount(): void {
    localStorage.removeItem("@TOKEN");
    redirect("/");
  }

  const values: IUserContext = {
    isLoggedIn,
    setIsLoggedIn,

    changePasswordVisibility,

    isPasswordVisible,
    setIsPasswordVisible,

    userName,
    setUserName,

    step,
    setStep,

    loginRequest,

    retrieveUserFromId,

    isLoading,
    setIsLoading,

    setUserType,
    userType,

    quitAccount,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export { UserProvider, useUserContext };
