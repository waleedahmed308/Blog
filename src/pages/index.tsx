import FutureTechFeatures from "@/components/FutureTechFeatures";
import HeroSectionImage from "@/components/HeroSectionImage";
import HeroSectionTitle from "@/components/HeroSectionTitle";
import Contributors from "@/components/icons/contributors";
import News from "@/components/icons/news";
import Readership from "@/components/icons/redership";
import Layout from "@/components/Layout";
import NewsUpdates from "@/components/NewsUpdates";
import Resources from "@/components/Resources";
import React from "react";

export default function Home() {
  const data = [
    {
      rating: "300",
      title: "Resources Available",
    },
    {
      rating: "12k",
      title: "Total Downloads",
    },
    {
      rating: "10k",
      title: "Active Users",
    },
  ];

  const newsArray = [
    {
      icon: <News />,
      title: "Latest News Updates",
      slogen: "Stay Current",
      description: "Over 1,000 articles published monthly",
    },
    {
      icon: <Contributors />,
      title: "Expert Contributors",
      slogen: "Trusted Insights",
      description: "50+ renowned AI experts on our team",
    },
    {
      icon: <Readership />,
      title: "Global Readership",
      slogen: "Worldwide Impact",
      description: "2 million monthly readers",
    },
  ];
  return (
    <Layout>
      <div className="font-inter">
        <div className="bg-black">
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-[60%] w-full">
              <HeroSectionTitle />
              <Resources resourcesArr={data} />
            </div>
            <HeroSectionImage />
          </div>
          <NewsUpdates updateNews={newsArray} />
        </div>
        <div className="py-20 px-16">
          <p className="w-[162px] py-1 rounded-[4px] bg-[#333333] font-medium text-sm text-center">
            Unlock the Power of
          </p>
          <h1 className="text-4xl font-medium mt-2">FutureTech Features</h1>
        </div>
        <FutureTechFeatures />
      </div>
    </Layout>
  );
}
