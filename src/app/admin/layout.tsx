import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login Admin | Easybank",
    description: "Invest with a personalized advisor",
};

export default function LoginLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
