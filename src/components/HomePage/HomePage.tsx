import React from "react";
import Template from "@/components/Template";
import Hero from "@/components/HomePage/Hero";
import WhyUs from "@/components/HomePage/WhyUs";
import BlogFeed from "@/components/BlogFeed";

function HomePage() {
  return (
    <Template>
      <main>
        <Hero />
        <WhyUs />
        <BlogFeed />
      </main>
    </Template>
  );
}

export default HomePage;
