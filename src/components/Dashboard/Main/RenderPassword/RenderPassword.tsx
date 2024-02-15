"use client";
import Spinner from "@/components/Spinner";
import UpdatePasswordForm from "@/components/Dashboard/Main/RenderPassword/UpdatePasswordForm";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";

function RenderPassword() {
  const { activeUser } = useUserContext() as IUserContext;
  if (!activeUser) {
    return <Spinner />;
  }
  return <UpdatePasswordForm />;
}

export default RenderPassword;
