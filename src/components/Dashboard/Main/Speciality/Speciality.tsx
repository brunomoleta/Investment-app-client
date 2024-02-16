"use client";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Spinner from "@/components/Spinner";
import CurrentSpeciality from "@/components/Dashboard/Main/Speciality/CurrentSpeciality";
import UpdateSpeciality from "@/components/Dashboard/Main/Speciality/UpdateSpeciality";

function Speciality() {
  const { activeUser } = useUserContext() as IUserContext;
  const { isEditing } = useUtilsContext() as IUtilsContext;

  if (!activeUser) {
    return <Spinner />;
  }
  if (isEditing) {
    return <UpdateSpeciality />;
  } else {
    return <CurrentSpeciality />;
  }
}

export default Speciality;
