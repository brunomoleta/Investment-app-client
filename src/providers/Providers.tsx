"use client";

import { UserProvider } from "@/providers/UserProvider";
import GlobalStyle from "@/styled-components/Global.style";
import { ToastContainer } from "react-toastify";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <>
      <UserProvider>{props.children}</UserProvider>
      <GlobalStyle />
      <ToastContainer position="bottom-right" autoClose={4 * 1000} />
    </>
  );
};

export default Providers;
