"use client";
import useRetrieveUser from "@/hooks/useRetrieveUser";

export default function AdminDashboard() {
  useRetrieveUser();

  return <div>ADMIN</div>;
}
