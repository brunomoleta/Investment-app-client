import LoginPage from "../../../components/Login/LoginPage";
import LoginForm from "@/components/Login/LoginForm";
import SignInAlternative from "@/components/SignInAlternative";
import SignInForm from "@/components/SignIn/SignInForm";

export default function AdvisorSignUp() {
  return (
    <LoginPage
        isLogin={false}
        loginForm={<SignInForm userType="advisor" />}
        signInAlternative={
          <SignInAlternative isSignin={false} href={"/advisor"} />
        }
    />
  );
}
