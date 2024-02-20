import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import React from "react";
import "./custom.variables.css";
import Providers from "@/providers/Providers";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  fallback: ["sistem-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Easybank",
  description: "Invest with a personalized advisor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
        <body className={publicSans.className}>
          <Providers>{children}</Providers>
        </body>
    </html>
  );
}
