"use client";
import React from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import {
  DMContent,
  DMItem,
  DMSeparator,
  DMTrigger,
} from "@/components/Dashboard/DashboardNav/DashboardNav.style";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";

function DashboardDropdown() {
  const { userType } = useUserContext() as IUserContext;
  const { setIsModalOpen, changeUrl } = useUtilsContext() as IUtilsContext;

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  function DashboardItemType() {
    if (userType === AccessType.Investor) {
      return "advisor";
    }
    return "speciality";
  }

  return (
    <DropdownMenu.Root open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DMTrigger asChild>
        <button aria-label="Abre ou fecha opções">
          {!isDropdownOpen ? <HamburgerMenuIcon /> : <Cross1Icon />}
        </button>
      </DMTrigger>

      <DropdownMenu.Portal>
        <DMContent sideOffset={5}>
          <DMItem
            onClick={() => changeUrl(`/${userType}/dashboard/personal-info`)}
          >
            Dados pessoais
          </DMItem>
          <DMItem onClick={() => changeUrl(`/${userType}/dashboard/password`)}>
            Trocar de senha
          </DMItem>
          <DMSeparator />
          {
            <DMItem
              onClick={() =>
                changeUrl(`/${userType}/dashboard/${DashboardItemType()}`)
              }
            >
              {userType === AccessType.Investor
                ? "Trocar de Assessor"
                : "Sua especialidade"}
            </DMItem>
          }
          {userType === AccessType.Advisor && (
            <DMItem
              onClick={() => changeUrl(`/advisor/dashboard/specialities`)}
            >
              Especialidades
            </DMItem>
          )}

          {userType === AccessType.Advisor && (
            <DMItem onClick={() => changeUrl(`/advisor/dashboard/bio`)}>
              Biografia
            </DMItem>
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
