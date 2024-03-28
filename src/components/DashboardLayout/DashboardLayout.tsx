import React from "react";
import { useVerifyToken } from "@/hooks/useVerifyToken";
import { Wrapper } from "@/app/advisor/dashboard/Layout.style";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import { DashboardMain } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import DashboardUsername from "@/components/Dashboard/DashboardUsername";
import Modal from "@/components/Modal";
import FinishSession from "@/components/FinishSession";
import Footer from "@/components/Footer";
import { ChildrenProps } from "@/types/children";

function DashboardLayout({ children }: ChildrenProps) {
  useVerifyToken();
  return (
    <Wrapper>
      <DashboardNav />
      <DashboardMain>
        <div style={{ maxWidth: "var(--page-max-width)", margin: "auto" }}>
          <div style={{ width: "fit-content", margin: "auto" }}>
            <DashboardUsername />
            {children}
          </div>
        </div>
        <Modal title="Encerrar sessão?" element={<FinishSession />} />
      </DashboardMain>

      <Footer isDashboard={true} />
    </Wrapper>
  );
}

export default DashboardLayout;
