import HeroSectionImage from "@/components/HeroSectionImage";
import HeroSectionTitle from "@/components/HeroSectionTitle";
import Layout from "@/components/Layout";
import React from "react";

export default function Home() {
  return (
  <Layout>
    <div className="px-20 bg-black">
      <div className="flex gap-6">
       <HeroSectionTitle/>
       <HeroSectionImage/>
      </div>
    </div>
  </Layout>
  );
}
