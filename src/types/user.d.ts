import {ILogin} from "@/types/login";

export interface IUserContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;

  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  loginRequest: (formData: ILogin) => Promise<void>;

  quitAccount: () => void;

  changePasswordVisibility: () => void;

  token: string | null | undefined;

  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
