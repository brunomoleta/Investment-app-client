"use client";
import React from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import {
  DMContent,
  DMItem,
  DMItemRed,
  DMSeparator,
  DMTrigger,
} from "@/components/Dashboard/DashboardNav/DashboardNav.style";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { useAdvisorContext } from "@/providers/AdvisorProvider";
import { IAdvisorContext } from "@/types/advisorContext";

function DashboardDropdown() {
  const { userType } = useUserContext() as IUserContext;
  const { getAdvisorsNoAuth } = useAdvisorContext() as IAdvisorContext;
  const { setIsEditing, setIsLoading, setIsModalOpen, changeUrl } =
    useUtilsContext() as IUtilsContext;

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  function DashboardItemType() {
    if (userType === AccessType.Investor) {
      return "advisor";
    }
    return "speciality";
  }

  const handleClick = (url: string) => {
    setIsLoading(true);
    setIsEditing(false);
    changeUrl(`/${userType}/dashboard/${url}`);
    setIsLoading(false);
  };
  const renderAdvisorsAndChangeUrl = async () => {
    setIsLoading(true);
    await getAdvisorsNoAuth();
    handleClick(DashboardItemType());
    setIsLoading(false);
  };
  return (
    <DropdownMenu.Root open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DMTrigger asChild>
        <button aria-label="Abre ou fecha opções">
          {!isDropdownOpen ? <HamburgerMenuIcon /> : <Cross1Icon />}
        </button>
      </DMTrigger>

      <DropdownMenu.Portal>
        <DMContent sideOffset={5}>
          <DMItem onClick={() => handleClick("personal-info")}>
            Dados pessoais
          </DMItem>
          <DMItem onClick={() => handleClick("password")}>
            Trocar de senha
          </DMItem>
          <DMSeparator />
          {userType === AccessType.Investor ? (
            <DMItem onClick={renderAdvisorsAndChangeUrl}>
              Trocar de Assessor
            </DMItem>
          ) : (
            <DMItem onClick={() => handleClick(DashboardItemType())}>
              Sua especialidade
            </DMItem>
          )}
          {userType === AccessType.Admin && (
            <DMItem onClick={() => handleClick("specialities")}>
              Especialidades
            </DMItem>
          )}

          {userType === AccessType.Advisor && (
            <DMItem onClick={() => handleClick(`bio`)}>Biografia</DMItem>
          )}
          {userType === AccessType.Investor && (
            <>
              <DMSeparator />
              <DMItemRed onClick={() => handleClick("delete-account")}>
                Excluir conta
              </DMItemRed>
            </>
          )}
          <DMSeparator />
          <DMItem onClick={() => setIsModalOpen(true)}>Sair da sessão</DMItem>

          <DropdownMenu.Arrow />
        </DMContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default DashboardDropdown;

export enum AccessType {
  Admin = "admin",
  Advisor = "advisor",
  Investor = "investor",
}
