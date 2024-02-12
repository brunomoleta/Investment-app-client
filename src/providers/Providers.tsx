"use client";

import { UserProvider } from "@/providers/UserProvider";
import GlobalStyle from "@/styled-components/Global.style";
import { ToastContainer } from "react-toastify";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import StyledComponentsRegistry from "../../lib/registry";
import { UtilsProvider } from "@/providers/UtilsProvider";
import { AdvisorProvider } from "@/providers/AdvisorProvider";
import { InvestmentTypeProvider } from "@/providers/InvestmentTypeProvider";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <>
      <StyledComponentsRegistry>
        <UtilsProvider>
          <UserProvider>
            <AdvisorProvider>
              <InvestmentTypeProvider>

                {props.children}

                <GlobalStyle />
                <ToastContainer position="bottom-right" autoClose={4 * 1000} />

              </InvestmentTypeProvider>
            </AdvisorProvider>
          </UserProvider>
        </UtilsProvider>
      </StyledComponentsRegistry>
    </>
  );
};

export default Providers;
