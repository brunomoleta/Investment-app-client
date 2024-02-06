import Template from "@/components/Template";
import LoginForm from "../../components/Login/LoginForm";

export default function InvestorLogin() {
  return (
    <>
      <Template>
        <div>Login Investidor</div>
        <LoginForm userType="investor" />
      </Template>
    </>
  );
}
