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
  const { setIsLoading, changeUrl } = useUtilsContext() as IUtilsContext;

  const [advisors, setAdvisors] = React.useState<IAdvisor[] | null>(null);

  const getAdvisorsNoAuth = React.useCallback(async () => {
    try {
      const { data } = await api.get("/advisor", {
        params: {
          page: 1,
        },
      });
      setAdvisors(data.advisors);
    } catch (error: any) {
      toast.error("Verifique sua conexão com a internet");
      console.error(error);
    }
  }, []);

  async function handleMeetClick() {
    setIsLoading(true);
    await getAdvisorsNoAuth();

    setIsLoading(false);

    changeUrl("/meet");
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
