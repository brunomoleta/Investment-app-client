import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function useVerifyToken(): void {
  const token = getCookie("token", { cookies });
  if (!token) {
    console.log(
      "Tu não tem acesso a esta página sem autenticação. Por favor faça login.",
    );
    redirect("/");
  }
}
