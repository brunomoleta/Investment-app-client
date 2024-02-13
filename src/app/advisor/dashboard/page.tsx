"use client";
import Dashboard from "@/components/Dashboard";
import Modal from "@/components/Modal";
import FinishSession from "@/components/FinishSession";
import React from "react";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

export default function AdvisorDashboard() {
  const { isModalOpen, setIsModalOpen } = useUtilsContext() as IUtilsContext;

  return (
    <>
      <Dashboard />
      <Modal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title="Encerrar sessão"
        element={<FinishSession />}
      />
    </>
  );
}
