"use client";
import React from "react";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { ActiveUser, IUserContext, UserType } from "@/types/userContext";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useRouter } from "next/navigation";
import { Upper } from "@/services/service";
import { UpdateUser } from "@/types/users";

const UserContext = React.createContext({});

function useUserContext() {
  return React.useContext(UserContext);
}

function UserProvider(props: { children: React.ReactNode }) {
  const router = useRouter();
  const { setIsLoading } = useUtilsContext() as IUtilsContext;

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [userType, setUserType] = React.useState<UserType>(null);

  const [activeUser, setActiveUser] = React.useState<ActiveUser>(null);

  React.useEffect(() => {
    setIsLoading(true);
    const savedToken = window.localStorage.getItem("@TOKEN");
    const savedUserType = window.localStorage.getItem("@TYPE");

    if (!savedToken || !savedUserType) {
      setIsLoading(false);
      return;
    }

    const token = JSON.parse(savedToken);
    const userType = JSON.parse(savedUserType);
    setUserType(userType);
    const fetchData = async (): Promise<void> => {
      await retrieveUserFromId(token, userType);
      setIsLoading(false);
    };

    fetchData();
  }, []);

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

  async function retrieveUserFromId(token: string, savedUserType: UserType) {
    try {
      setIsLoading(true);
      if (!token || !savedUserType) {
        router.push("/");
      }

      const { data } = await api.get(`/${savedUserType}/id`, {
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
    } finally {
      setIsLoading(false);
    }
  }

  function getIsLoggedIn() {
    const savedToken = window.localStorage.getItem("@TOKEN");
    const savedUserType = window.localStorage.getItem("@TYPE");

    if (!savedToken || !savedUserType) {
      router.push("/choose-user");
      return;
    }

    const userType = JSON.parse(savedUserType);
    router.push(`/${userType}/dashboard`);
  }

  async function updateUser(
    token: string,
    formData: UpdateUser,
    savedUserType: UserType
  ) {
    try {
      setIsLoading(true);
      if (!token || !savedUserType) {
        router.push("/");
      }

      console.log(formData);
      await api.patch(`/${savedUserType}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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

  const values: IUserContext = {
    activeUser,
    setActiveUser,

    retrieveUserFromId,

    getIsLoggedIn,

    renderUserType,

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
