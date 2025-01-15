import ExploreFutureTech from "@/components/ExploreFutureTech";
import FutureTechFeatures from "@/components/FutureTechFeatures";
import HeroSectionImage from "@/components/HeroSectionImage";
import HeroSectionTitle from "@/components/HeroSectionTitle";
import Contributors from "@/components/icons/contributors";
import FutureTechnology from "@/components/icons/futuretechnology";
import News from "@/components/icons/news";
import Readership from "@/components/icons/redership";
import ResearchIcon from "@/components/icons/researchIcon";
import Layout from "@/components/Layout";
import NewsUpdates from "@/components/NewsUpdates";
import Resources from "@/components/Resources";
import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

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

  const futureTechArray = [
    {
      icon: <FutureTechnology />,
      title: "Future Technology Blog",
      description:
        "Dive deep into future technology concepts with our research section articles.",
      card: [
        {
          cardTitle: "Quantity",
          cardDescription:
            "Over 1,000 articles on emerging tech trends and breakthroughs.",
        },
        {
          cardTitle: "Variety",
          cardDescription:
            "Articles cover fields like AI, robotics, biotechnology, and more.",
        },
        {
          cardTitle: "Frequency",
          cardDescription: "Fresh content added daily to keep you up to date.",
        },
        {
          cardTitle: "Authoritative",
          cardDescription:
            "Written by our team of tech experts and industry professionals.",
        },
      ],
    },
    {
      icon: <ResearchIcon />,
      title: "Research Insights Blogs",
      description:
        "Dive deep into future technology concepts with our research section.",
      card: [
        {
          cardTitle: "Depth",
          cardDescription: "500+ research articles for in-depth understanding.",
        },
        {
          cardTitle: "Graphics",
          cardDescription:
            "Visual aids and infographics to enhance comprehension.",
        },
        {
          cardTitle: "Trends",
          cardDescription:
            "Explore emerging trends in future technology research.",
        },
        {
          cardTitle: "Contributors",
          cardDescription: "Contributions from tech researchers and academics.",
        },
      ],
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
        <FutureTechFeatures futureTechArray={futureTechArray} />
        <div className="py-20 px-16 w-full flex justify-between items-center lg:flex-row flex-col ">
        <div>
          <p className="w-[224px] py-1 rounded-[4px] bg-[#333333] font-medium text-sm text-center">
            A Knowledge Treasure Trove
          </p>
          <h1 className="sm:text-4xl text-2xl font-medium mt-4">
            Explore FutureTech&apos;s In-Depth Blog Posts
          </h1>
        </div>
        <button className="flex gap-1 px-4 py-3 text-sm border border-gray-800 rounded lg:mt-0 mt-8">
          View All Blogs{" "}
          <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />
        </button>

        </div>
        <ExploreFutureTech />
      </div>
    </Layout>
  );
}
