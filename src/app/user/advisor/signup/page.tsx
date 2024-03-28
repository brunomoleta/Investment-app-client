import LoginPage from "../../../../components/Login/LoginPage";
import SignInAlternative from "@/components/SignInAlternative";
import SignInForm from "@/components/SignIn/SignInForm";

export default function AdvisorSignUp() {
  return (
    <LoginPage
      isLogin={false}
      loginForm={<SignInForm userType="advisor" />}
      signInAlternative={
        <SignInAlternative isSignin={false} href={"/user/advisor"} />
      }
    />
  );
}
