"use client";
import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

const useRetrieveUser = (): IRetrieveUserHook => {
  const { retrieveUserFromId } = useUserContext() as IRetrieveUserHook;
  const { setIsLoading } = useUtilsContext() as IUtilsContext;

  React.useEffect(() => {
    setIsLoading(true);
    const savedToken = window.localStorage.getItem("@TOKEN");
    const savedUserType = window.localStorage.getItem("@TYPE");

    const token = JSON.parse(savedToken as string);
    const userType = JSON.parse(savedUserType as string);
    const fetchData = async () => {
      await retrieveUserFromId(token, userType);
    };

    fetchData();
  }, []);

  return { retrieveUserFromId };
};

export default useRetrieveUser;

interface IRetrieveUserHook {
  retrieveUserFromId(token: string, userType: string): Promise<void>;
}
