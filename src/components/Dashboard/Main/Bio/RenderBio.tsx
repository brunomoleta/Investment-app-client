'use client';
import Spinner from "@/components/Spinner";
import UpdateBio from "@/components/Dashboard/Main/Bio/UpdateBio";
import BioData from "@/components/Dashboard/Main/Bio/BioData";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

function RenderBio() {
  const { activeUser } = useUserContext() as IUserContext;
  const { isEditing } = useUtilsContext() as IUtilsContext;

  if (!activeUser) {
    return <Spinner />;
  }
  if (isEditing) {
    return <UpdateBio />;
  } else {
    return <BioData />;
  }
}

export default RenderBio;
