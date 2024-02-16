"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IAdvisorContext } from "@/types/advisorContext";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { IAdvisor } from "@/types/users";

const AdvisorContext = React.createContext({});

function useAdvisorContext() {
  return React.useContext(AdvisorContext);
}

function AdvisorProvider(props: { children: React.ReactNode }) {
  const { setIsLoading } = useUtilsContext() as IUtilsContext;

  const route = useRouter();

  const [advisors, setAdvisors] = React.useState<IAdvisor[] | null>(null);

  async function getAdvisorsNoAuth() {
    setIsLoading(true);
    try {
      const { data } = await api.get("/advisor", {
        params: {
          page: 1,
        },
      });
      console.log(data.advisors);
      setAdvisors(data.advisors);
    } catch (error: any) {
      toast.error("Verifique sua conexão com a internet");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleMeetClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    await getAdvisorsNoAuth();
    route.push("/meet");
  }

  const values: IAdvisorContext = {
    getAdvisorsNoAuth,

    advisors,
    setAdvisors,

    handleMeetClick,
  };
  return (
    <AdvisorContext.Provider value={values}>
      {props.children}
    </AdvisorContext.Provider>
  );
}

export { AdvisorProvider, useAdvisorContext };
