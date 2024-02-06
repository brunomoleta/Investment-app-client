import React from "react";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { ILogin } from "@/types/login";
import { IUserContext } from "@/types/user";
import { redirect } from "next/navigation";

const UserContext = React.createContext({});

function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider(props: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [whoLoggedIn, setWhoLoggedIn] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const [step, setStep] = React.useState(0);

  const storedToken = localStorage.getItem("@TOKEN");
  const token: string | null | undefined = storedToken || null;

  const loginRequest = async (formData: ILogin) => {
    try {
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@TOKEN", JSON.stringify(data.token));

      toast.success("Tu estás logado :)");
      setIsLoggedIn(!isLoggedIn);
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

    step,
    setStep,

    loginRequest,

    isLoading,
    setIsLoading,

    token,

    quitAccount,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export { UserProvider, useUserContext };
