'use client'
import HomePage from '@/components/HomePage';
import {useUserContext} from "@/providers/UserProvider";
import {IUserContext} from "@/types/user";
import React from "react";

export default function Home() {
    const { isLoggedIn } = useUserContext() as IUserContext;

    React.useEffect(()=> {
        const savedToken = window.localStorage.getItem("@TOKEN")

        // set
    })
  return (
    <>
        <HomePage />
    </>
  );
}
