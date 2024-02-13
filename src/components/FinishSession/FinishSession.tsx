import React from "react";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import {NormalButton, QuitButton} from "@/styled-components/Button.style";
import {Wrapper} from "@/components/FinishSession/FinishSession.style";

function FinishSession() {
  const { setIsModalOpen } = useUtilsContext() as IUtilsContext;
  const { quitAccount } = useUserContext() as IUserContext;
  return (
    <Wrapper>
      <NormalButton onClick={() => setIsModalOpen(false)}>cancelar</NormalButton>
      <QuitButton
        onClick={() => {
          quitAccount();
          setIsModalOpen(false);
        }}
      >
        sim
      </QuitButton>
    </Wrapper>
  );
}

export default FinishSession;
