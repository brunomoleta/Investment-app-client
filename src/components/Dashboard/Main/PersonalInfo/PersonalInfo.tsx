'use client'
import React from "react";
import Spinner from "@/components/Spinner";
import UpdatePersonalInfo from "@/components/Dashboard/Main/PersonalInfo/UpdatePersonalInfo";
import RenderPersonalInfo from "@/components/Dashboard/Main/PersonalInfo/RenderPersonalInfo";
import {useUtilsContext} from "@/providers/UtilsProvider";
import {useUserContext} from "@/providers/UserProvider";
import {IUserContext} from "@/types/userContext";
import {IUtilsContext} from "@/types/utils";
function PersonalInfo() {
  const { activeUser } = useUserContext() as IUserContext;
  const { isEditing } = useUtilsContext() as IUtilsContext;

  if (!activeUser) {
    return <Spinner />;
  }
  if (isEditing) {
    return <UpdatePersonalInfo />;
  } else {
    return <RenderPersonalInfo />;
  }
}

export default PersonalInfo;
