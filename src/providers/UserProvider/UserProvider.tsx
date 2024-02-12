"use client";
import React from "react";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { ILogin, UserSignIn } from "@/types/login";
import { IUserContext, UserName, UserType } from "@/types/userContext";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useRouter } from "next/navigation";
import { Upper } from "@/services/service";

const UserContext = React.createContext({});

function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider(props: { children: React.ReactNode }) {
  const router = useRouter();
  const { cleanForm, setIsLoading } = useUtilsContext() as IUtilsContext;

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [userType, setUserType] = React.useState<UserType>("investor");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const [userName, setUserName] = React.useState<UserName>(null);

  function renderUserType(user: UserType | null) {
    if (user === "advisor") {
      return Upper("assessor");
    }
    if (user === "investor") {
      return Upper("investidor");
    } else {
      return Upper("admin");
    }
  }

  const loginRequest = async (formData: ILogin, userType: UserType) => {
    try {
      setIsLoading(true);

      const { data } = await api.post(`/session/${userType}`, formData);
      window.localStorage.setItem("@TYPE", JSON.stringify(userType));
      window.localStorage.setItem("@TOKEN", JSON.stringify(data.token));

      toast.success("Tu estás logado :)");

      setUserType(userType);

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

  async function retrieveUserFromId(token: string, savedUserType: string) {
    try {
      setIsLoading(true)
      if (!token || !savedUserType) {
        return;
      }

      const { data } = await api.get(`/${savedUserType}/id`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(`Bem vindo ${data.name} :)`);
      setUserName(data.name)

      window.localStorage.setItem("@NAME", JSON.stringify(data.name))

    } catch (error: any) {
      if (error?.response) {
        switch (error.response.statusCode) {
          case 401:
            toast.error("Senha ou e-mail incorreto :)");
            break;
          case 404:
            toast.error("Por favor verifique sua conexão com a internet :)");
            break;
          case 400:
            console.log(error.message);
            toast.error("Erro no envio de dados");
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
    window.localStorage.removeItem("@TOKEN");
    window.localStorage.removeItem("@TYPE");
    window.localStorage.removeItem("@NAME");

    router.push("/");
  }


  function getIsLoggedIn() {
    const savedToken = window.localStorage.getItem("@TOKEN");
    const savedUserType = window.localStorage.getItem("@TYPE");

    if (!savedToken || !savedUserType) {
      router.push("/choose-user");
      return;
    }

    const userType = JSON.parse(savedUserType);
    router.push(`/${userType}/dashboard`)

  }

  const values: IUserContext = {
    retrieveUserFromId,

    getIsLoggedIn,

    renderUserType,
    signUpRequest,

    isLoggedIn,
    setIsLoggedIn,

    changePasswordVisibility,

    isPasswordVisible,
    setIsPasswordVisible,

    userName,
    setUserName,

    loginRequest,

    setUserType,
    userType,

    quitAccount,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export { UserProvider, useUserContext };
