import LoginPage from "../../../components/Login/LoginPage";
import SignInAlternative from "@/components/SignInAlternative";
import SignInForm from "@/components/SignIn/SignInForm";

export default function InvestorSignIn() {
  return (
    <LoginPage
      isLogin={false}
      loginForm={<SignInForm userType="investor" />}
      signInAlternative={
        <SignInAlternative isSignin={false} href={"/investor"} />
      }
    />
  );
}
