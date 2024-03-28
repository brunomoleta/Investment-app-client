import { useVerifyToken } from "@/hooks/useVerifyToken";

export default function AdminDashboard() {
  useVerifyToken();

  return <div>ADMIN</div>;
}
