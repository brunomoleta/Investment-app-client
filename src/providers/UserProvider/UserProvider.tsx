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

  const retrieveUserFromId = React.useCallback(
    async function (token: TokenType, userRole: UserType) {
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
    [changeUrl]
  );

  React.useEffect(() => {
    const savedToken = window.localStorage.getItem("@TOKEN");
    const savedUserType = window.localStorage.getItem("@TYPE");

    if (!savedUserType || !savedToken) {
      const fetchData = async (): Promise<void> => {
        await retrieveUserFromId(null, null);
      };
      fetchData();
    } else {
      const token = JSON.parse(savedToken);
      const userType = JSON.parse(savedUserType);

      setUserType(userType);
      setTokenState(token);
      const fetchData = async (): Promise<void> => {
        await retrieveUserFromId(token, userType);
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
      console.log(formData);
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
        }
      } else {
        console.error("Error:", error);
        toast.error("An unexpected error occurred :)");
      }
    }
  }

  function quitAccount(): void {
    changeUrl("/");

    window.localStorage.removeItem("@TOKEN");
    window.localStorage.removeItem("@TYPE");
    setTokenState(null);
    setUserType(null);

    toast.success("Volte sempre :)");
  }

  const values: IUserContext = {
    updatePassword,

    quitAccount,

    activeUser,
    setActiveUser,

    tokenState,

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
