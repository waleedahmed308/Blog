import Headlines from "@/components/Headlines";
import LatestNews from "@/components/LatestNews";
import Layout from "@/components/Layout";
import React from "react";

export default function News() {
  const data = [
    {
      image: "/weatherNews.png",
      title: "Global Climate Summit Addresses Urgent Climate Action",
      description:
        " World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
      category: " Environment",
      date: "October 10, 2023",
      author: "Jane Smith",
    },
  ];
  const headlinesArray = [
    {
      image: "/politics.png",
      title: " A Decisive Victory for Progressive Policies",
      category: "Politics",
    },
    {
      image: "/technology.png",
      title: " Tech Giants Unveil Cutting-Edge AI Innovations",
      category: "Technology",
    },
    {
      image: "/covid.png",
      title: " COVID-19 Variants",
      category: "Health",
    },
  ];
  return (
    <Layout>
      <div className="font-inter ">
        <div className="bg-[#141414] sm:px-20 px-10 pt-16 pb-20">
          <h1 className="font-medium md:text-5xl sm:text-4xl text-2xl">
            Today&apos;s Headlines: Stay
          </h1>
          <div className="flex justify-between items-center mt-6">
            <p className="font-medium md:text-5xl sm:text-4xl text-2xl">
              Informed
            </p>
            <p className="text-gray-500 w-[77%] text-sm">
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover the world through our news coverage.
            </p>
          </div>
        </div>
        <div className="bg-[#141414]">
          <LatestNews data={data} />
          <Headlines data={headlinesArray} />
        </div>
      </div>
    </Layout>
  );
}
