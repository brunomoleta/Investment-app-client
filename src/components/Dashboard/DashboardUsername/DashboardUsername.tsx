"use client";
import React from "react";
import Spinner from "@/components/Spinner";
import { Highlight } from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import styled from "styled-components";

function DashboardUsername() {
  const { activeUser } = useUserContext() as IUserContext;

  return (
    <Header>
      Dashboard de{" "}
      {!activeUser ? <Spinner /> : <Highlight>{activeUser.name}</Highlight>}{" "}
    </Header>
  );
}

export default DashboardUsername;

const Header = styled.h1`
    margin-block-end: var(--s-2);
`