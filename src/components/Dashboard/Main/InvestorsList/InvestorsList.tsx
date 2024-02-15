"use client";
import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { IFullAdvisor, IInvestor } from "@/types/users";
import Spinner from "@/components/Spinner";
import { PostsUl } from "@/components/BlogFeed/BlogPosts/BlogPosts.style";
import InvestorItem from "@/components/Dashboard/Main/InvestorsList/InvestorItem";

function InvestorsList() {
  const { activeUser } = useUserContext() as IUserContext;

  if (!activeUser) {
    return <Spinner />;
  }

  const { investors } = activeUser as IFullAdvisor;

  if (activeUser) {
    return (
      <PostsUl as="ol">
        {investors.map((investor: IInvestor) => (
          <InvestorItem key={investor.id} investor={investor} />
        ))}
      </PostsUl>
    );
  }
}

export default InvestorsList;
