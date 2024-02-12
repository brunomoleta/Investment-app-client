"use client";
import React from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import {
  DMContent,
  DMItem, DMSeparator,
  DMTrigger,
} from "@/components/DashboardNav/DashboardNav.style";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

function DashboardDropdown({ userType }: { userType: AccessType }) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const { setIsModalOpen } = useUtilsContext() as IUtilsContext;
  return (
    <DropdownMenu.Root open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DMTrigger asChild>
        <button aria-label="Abre ou fecha opções">
          {!isDropdownOpen ? <HamburgerMenuIcon /> : <Cross1Icon />}
        </button>
      </DMTrigger>

      <DropdownMenu.Portal>
        <DMContent sideOffset={5}>
          <DMItem>Editar dados pessoais</DMItem>
          <DMSeparator />
          {userType !== AccessType.Admin && (
            <DMItem>
              {userType === AccessType.Investor
                ? "Trocar de Assessor"
                : "Trocar de Especialidade"}
            </DMItem>
          )}
          <DMItem>Trocar de senha</DMItem>
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
