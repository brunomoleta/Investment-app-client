import { IAdvisor } from "@/types/users";
import React from "react";

export interface IAdvisorContext {
  getAdvisorsNoAuth: () => Promise<void>;

  advisors: IAdvisor[] | null;
  setAdvisors: React.Dispatch<React.SetStateAction<IAdvisor[] | null>>;

  handleMeetClick: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => Promise<void>;
}
