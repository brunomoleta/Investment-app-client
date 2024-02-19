"use client";
import React from "react";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import {
  ActiveUser,
  IUserContext,
  TokenType,
  UserType,
} from "@/types/userContext";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { UpdateUser } from "@/types/users";
import { getCookies, deleteCookie } from "cookies-next";

const UserContext = React.createContext({});

function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider(props: { children: React.ReactNode }) {
  const { setIsLoading, changeUrl, setIsEditing } =
    useUtilsContext() as IUtilsContext;

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userType, setUserType] = React.useState<UserType>(null);
  const [activeUser, setActiveUser] = React.useState<ActiveUser>(null);
  const [tokenState, setTokenState] = React.useState<string | null>(null);

  const retrieveUserFromId = React.useCallback(async function (
    token: TokenType,
    userRole: UserType
  ) {
    if (!token) {
      changeUrl("/");
      return;
    }

    try {
      const { data } = await api.get(`/${userRole}/id`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setActiveUser(data);
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
    }
  },
  []);


  React.useEffect(() => {
    const cookies = getCookies();
    const savedUserType = cookies["userRole"] as UserType | undefined;
    const savedToken = cookies["token"] as TokenType;

    if (!savedToken || !savedUserType) {
      changeUrl("/");
    } else {
      setUserType(savedUserType);
      setTokenState(savedToken);
      const fetchData = async (): Promise<void> => {
        await retrieveUserFromId(savedToken, savedUserType);
      };
      fetchData();
    }
  }, [retrieveUserFromId]);

  function getIsLoggedIn() {
    if (!tokenState) {
      changeUrl("/choose-user");
    } else {
      changeUrl(`/${userType}/dashboard`);
    }
  }

  async function updatePassword(formData: {
    currentPassword: string;
    newPassword: string;
  }) {
    setIsLoading(true);
    try {
      await api.patch(`/${userType}/password`, formData, {
        headers: {
          Authorization: `Bearer ${tokenState}`,
        },
      });

      toast.success(`Senha atualizada com sucesso`);
      changeUrl(`/${userType}/dashboard`);
    } catch (error: any) {
      if (error?.response) {
        switch (error.response.status) {
          case 401:
            toast.error("Senha atual incorreta.");
            break;
          case 404:
            toast.error("Por favor verifique sua conexão com a internet :)");
            break;
          case 400:
            console.log(error.message);
            toast.error("Erro no envio de dados");
            break;
          case 409:
            console.log(error.message);
            toast.error("Senha atual incorreta.");
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

  async function updateUser(formData: UpdateUser) {
    try {
      await api.patch(`/${userType}`, formData, {
        headers: {
          Authorization: `Bearer ${tokenState}`,
        },
      });

      setIsEditing(false);
      toast.success(`Edição feita com sucesso`);
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
            break;
          case 500:
            console.error("Error:", error);
            toast.error("Houve um erro inesperado :)");
            break;
        }
      } else {
        console.error("Error:", error);
        toast.error("An unexpected error occurred :)");
      }
    }
  }

  async function removeAccount(): Promise<void> {
    try {
      await api.delete(`/${userType}`, {
        headers: {
          Authorization: `Bearer ${tokenState}`,
        },
      });

      setIsEditing(false);
      toast.success(`Conta removida com sucesso`);
    } catch (error: any) {
      if (error?.response) {
        switch (error.response.statusCode) {
          case 404:
            toast.error("Este usuário não existe :(");
            break;
          case 403:
            console.log(error.message);
            toast.error("Não tens permissão para remove esta conta");
            break;
          case 500:
            console.error("Error:", error);
            toast.error("Houve um erro inesperado :)");
            break;
        }
      } else {
        console.error("Error:", error);
        toast.error("An unexpected error occurred :)");
      }
    }
  }

  function quitAccount(isDelete: boolean = false): void {
    if (!isDelete) {
      toast.success("Volte sempre :)");
    }

    changeUrl("/");

    deleteCookie("@TOKEN");
    deleteCookie("@TYPE");

    setTokenState(null);
    setUserType(null);
  }

  const values: IUserContext = {
    updatePassword,

    removeAccount,

    quitAccount,

    activeUser,
    setActiveUser,

    tokenState,
    setTokenState,

    retrieveUserFromId,

    getIsLoggedIn,

    isLoggedIn,
    setIsLoggedIn,

    setUserType,
    userType,

    updateUser,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}

export { UserProvider, useUserContext };
