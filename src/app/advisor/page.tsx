import LoginPage from "@/components/LoginPage";
import LoginForm from "@/components/Login/LoginForm";
import SignInAlternative from "@/components/SignInAlternative";

export default function AdvisorLogin() {
    return (
        <LoginPage
            loginForm={<LoginForm userType="advisor" />}
            signInAlternative={<SignInAlternative />}
        />
    );
}
