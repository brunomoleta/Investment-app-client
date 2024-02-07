import LoginForm from "../../components/Login/LoginForm";
import LoginPage from "@/components/LoginPage";
import SignInAlternative from "@/components/SignInAlternative";

export default function InvestorLogin() {
  return (
    <LoginPage
      loginForm={<LoginForm userType="investor" />}
      signInAlternative={<SignInAlternative />}
    />
  );
}
