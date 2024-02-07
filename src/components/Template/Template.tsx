"use client";
import React from "react";
import Header from "@/components/Header";
import { ChildrenProps } from "@/types/children";
import Footer from "@/components/Footer";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/user";

const Template: React.FC<ChildrenProps> = ({ children }) => {
  const {
    isLoggedIn,
    retrieveUserFromId,
  } = useUserContext() as IUserContext;

  React.useEffect(() => {


    const asyncFunc = async () => {
        await retrieveUserFromId();

    };

    asyncFunc();
  }, [isLoggedIn]);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Template;
