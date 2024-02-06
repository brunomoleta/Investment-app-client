"use client";
import React from "react";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { ILogin } from "@/types/login";
import { IUserContext, UserType } from "@/types/user";
import { redirect } from "next/navigation";

const UserContext = React.createContext({});

function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider(props: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  const [whoLoggedIn, setWhoLoggedIn] = React.useState<UserType>(null);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const [step, setStep] = React.useState(0);

  const loginRequest = async (formData: ILogin, userType: UserType) => {
    try {
      const { data } = await api.post(`/session/${userType}`, formData);
      localStorage.setItem("@TOKEN", JSON.stringify(data.token));

      toast.success("Tu estás logado :)");
      setIsLoggedIn(!isLoggedIn);
      setWhoLoggedIn(userType);
    } catch (error: any) {
      if (error.response.status === 404) {
        toast.error("Por favor verifique sua conexão com a internet :)");
      } else if (error.response.status === 401) {
        toast.error("Senha ou e-mail incorreto :)");
      }
      console.log(error);
    }
  };

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

    step,
    setStep,

    loginRequest,

    isLoading,
    setIsLoading,

    quitAccount,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export { UserProvider, useUserContext };
