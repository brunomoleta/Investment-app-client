import React from "react";
import {
  Exp,
  Name,
  Speciality,
} from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo/AdvisorInfo.style";
import { Highlight } from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import { formatPhoneNumber, renderAmount } from "@/services/service";
import { IInvestor } from "@/types/users";

function InvestorInfo({ investor }: { investor: IInvestor }) {
  const { name, amount, email, phone_number } = investor;
  return (
    <div>
      <Name>
        Nome: <Highlight>{name}</Highlight>
      </Name>
      <Speciality>
        Capital: <Highlight>{renderAmount(amount)}</Highlight>
      </Speciality>
      <Exp>
        Contato: <Highlight>{formatPhoneNumber(phone_number)}</Highlight>
      </Exp>
      <Exp as="h6">
        Email: <Highlight>{email}</Highlight>
      </Exp>
    </div>
  );
}

export default InvestorInfo;
