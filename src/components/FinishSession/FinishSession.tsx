import React from "react";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { QuitButton } from "@/styled-components/Button.style";

function FinishSession() {
  const { setIsModalOpen } = useUtilsContext() as IUtilsContext;
  const { quitAccount } = useUserContext() as IUserContext;
  return (
    <>
      <button onClick={() => setIsModalOpen(false)}>cancelar</button>
      <QuitButton
        onClick={() => {
          quitAccount();
          setIsModalOpen(false);
        }}
      >
        sim
      </QuitButton>
    </>
  );
}

export default FinishSession;
