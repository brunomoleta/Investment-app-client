"use client";
import React from "react";
import Header from "@/components/Header";
import { ChildrenProps } from "@/types/children";
import Footer from "@/components/Footer";

const Template: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Template;
