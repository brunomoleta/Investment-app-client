import { ILogin } from "@/types/login";
import { UserType } from "@/types/userContext";

export interface ISessionContext {
  loginRequest: (formData: ILogin, userType: UserType) => Promise<void>;
  signUpRequest: (UserSignIn) => Promise<void>;
}
