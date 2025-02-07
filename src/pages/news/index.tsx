import ExploreFutureTech from "@/components/ExploreFutureTech";
import Headlines from "@/components/Headlines";
import LatestNews from "@/components/LatestNews";
import Layout from "@/components/Layout";
import VisualInsights from "@/components/VisualInsights";
import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";

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
  const VidualInsightData = [
    {
      videoUrl: "https://www.youtube.com/embed/JBJY2MwVrJw",
      title: "Mars Exploration: Unveiling Alien Landscapes",
      description:
        "Embark on a journey through the Red Planet&apos;s breathtaking landscapes and uncover the mysteries of Mars.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/kwhfmFhQ_fc",
      title: "Mars Exploration: Unveiling Alien Landscapes",
      description:
        "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/X88jQZyvnMQ",
      title: "Blockchain Explained: A Revolution in Finance",
      description:
        "Delve into the world of blockchain technology and its transformative impact on the financial industry.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/X88jQZyvnMQ",
      title: "Blockchain Explained: A Revolution in Finance",
      description:
        "Delve into the world of blockchain technology and its transformative impact on the financial industry.",
    },
  ];
  const testimonials = [
    { 
      title:"Community Forum",
      description:"Join our active community forum to discuss industry trends and collaborate with peers."
    },
    { 
      title:"Community Forum",
      description:"Join our active community forum to discuss industry trends and collaborate with peers."
    },
    { 
      title:"Community Forum",
      description:"Join our active community forum to discuss industry trends and collaborate with peers."
    },
  ]
  return (
    <Layout>
      <div className="font-inter">
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
        <div className="py-20 px-16 w-full flex justify-between items-center lg:flex-row flex-col ">
          <div>
            <p className="w-[211px] py-1 rounded-[4px] bg-[#333333] font-medium text-sm text-center">
              Welcome to Our News Hub
            </p>
            <h1 className="sm:text-4xl text-2xl font-medium mt-4">
              Discover the World of Headlines
            </h1>
          </div>
          <button className="flex gap-1 hover:bg-gray-800 hover:text-white text-gray-500  px-4 py-3 text-sm border border-gray-800 rounded-[5px] lg:mt-0 mt-8">
            View All News{" "}
            <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />
          </button>
        </div>
        <ExploreFutureTech />
        <div className="py-20 px-16 w-full flex justify-between items-center lg:flex-row flex-col ">
          <div>
            <p className="w-[139px] py-1 rounded-[4px] bg-[#333333] font-medium text-sm text-center">
              Featured Videos
            </p>
            <h1 className="sm:text-4xl text-2xl font-medium mt-4">
              Visual Insights for the Modern Viewer
            </h1>
          </div>
          <button className="flex gap-1 items-center text-gray-500 rounded-[5px] hover:bg-gray-800 hover:text-white  px-4 py-3 text-sm border border-gray-800 lg:mt-0 mt-8">
            View All{" "}
            <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />
          </button>
        </div>
        <VisualInsights data={VidualInsightData} />
        <div className="pt-20 px-16 w-full flex gap-12 justify-between items-center lg:flex-row flex-col">
          <Image src={"/Logo.png"} alt="" width={200} height={200} className="w-[120px] h-[120px]" />
          <div>
            <p className="w-[228px] py-1 rounded-[4px] bg-[#333333] font-medium text-sm text-center">
              Learn, Connect, and Innovate
            </p>
            <h1 className="sm:text-4xl text-2xl font-medium mt-4">
              Be Part of the Future Tech Revolution
            </h1>
            <p className="text-base text-gray-500 mt-3">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>
        <div className="pb-32 sm:px-20 px-10 pt-10">
        <Testimonials testimonialsArr={testimonials}/>
        </div>
      </div>
    </Layout>
  );
}
