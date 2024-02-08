import LoginPage from "../../../components/Login/LoginPage";
import LoginForm from "@/components/Login/LoginForm";

export default function AdvisorSignUp() {
  return (
    <LoginPage isLogin={false} loginForm={<LoginForm userType="advisor" />} />
  );
}
