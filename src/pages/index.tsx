import ExploreFutureTech from "@/components/ExploreFutureTech";
import FutureTechFeatures from "@/components/FutureTechFeatures";
import HeroSectionImage from "@/components/HeroSectionImage";
import HeroSectionTitle from "@/components/HeroSectionTitle";
import Contributors from "@/components/icons/contributors";
import Ebook from "@/components/icons/ebook";
import FutureTechnology from "@/components/icons/futuretechnology";
import News from "@/components/icons/news";
import Readership from "@/components/icons/redership";
import ResearchIcon from "@/components/icons/researchIcon";
import Whitespaper from "@/components/icons/whitespaper";
import Layout from "@/components/Layout";
import NewsUpdates from "@/components/NewsUpdates";
import Readers from "@/components/Readers";
import ResourceBlog from "@/components/ResourceBlog";
import Resources from "@/components/Resources";
import Testimonials from "@/components/Testimonials";
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
  const resourcesArr = [
    {
      icon: <Ebook />,
      title: "Ebooks",
      description:
        "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
      buttonText: "Download Ebooks Now",
      topics: "Variety of Topics",
      topicDescription:
        "Topics include AI in education, renewable energy ,healthcare, space exploration, and biotechnology.",
      image: "/ebook.png",
      ebookTitle: "Total Ebooks",
      totalEbook: "Over 100 ebooks",
      downloadFormat: "Download Formats",
      downloadFormatDescription: "PDF format for access.",
      averageAuthor: "Average Author Expertise",
      averageAuthorDescription:
        "Ebooks are authored by renowned experts with an average of 15 years of experience",
    },
    {
      icon: <Whitespaper />,
      title: "Whitepapers",
      description:
        "EDive into comprehensive reports and analyses with our collection of whitepapers.",
      buttonText: "Download Whitepapers Now",
      topics: "Topics Coverage",
      topicDescription:
        "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
      image: "/whitespaper.png",
      ebookTitle: "Total Whitepapers",
      totalEbook: "Over 50 whitepapers",
      downloadFormat: "Download Formats",
      downloadFormatDescription: "PDF format for access.",
      averageAuthor: "Average Author Expertise",
      averageAuthorDescription:
        "Whitepapers are authored by subject matter experts with an average of 20 years of experience.",
    },
  ];

  const readers = [
    {
      profile: "/readers.png",
      name: "Sarah Thompson",
      address: "San Francisco, USA",
      rating: 3,
      description:
        "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
    },
    {
      profile: "/readers.png",
      name: "Sarah Thompson",
      address: "San Francisco, USA",
      rating: 8,
      description:
        "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
    },
    {
      profile: "/readers.png",
      name: "Sarah Thompson",
      address: "San Francisco, USA",
      rating: 8,
      description:
        "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
    },
    {
      profile: "/readers.png",
      name: "Sarah Thompson",
      address: "San Francisco, USA",
      rating: 3,
      description:
        "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
    },
    {
      profile: "/readers.png",
      name: "Sarah Thompson",
      address: "San Francisco, USA",
      rating: 8,
      description:
        "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
    },
    {
      profile: "/readers.png",
      name: "Sarah Thompson",
      address: "San Francisco, USA",
      rating: 8,
      description:
        "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
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
          <button className="flex gap-1 px-4 py-3 text-sm border hover:bg-gray-800 hover:text-white border-gray-800 rounded lg:mt-0 mt-8">
            View All Blogs{" "}
            <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />
          </button>
        </div>
        <ExploreFutureTech />
        <div className="py-20 sm:px-16 px-10 w-full flex justify-between items-center lg:flex-row flex-col ">
          <div>
            <p className="w-[274px] py-1 rounded-[4px] bg-[#333333] font-medium text-sm text-center">
              Your Gateway to In-Depth Information
            </p>
            <h1 className="sm:text-4xl text-2xl font-medium mt-4">
              Unlock Valuable Knowledge with FutureTech&apos;s <br /> Resources
            </h1>
          </div>
          <button className="flex gap-1 px-4 py-3 hover:bg-gray-800 hover:text-white text-sm border border-gray-800 rounded lg:mt-0 mt-8">
            View All Resources{" "}
            <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />
          </button>
        </div>
        <ResourceBlog resourcesArr={resourcesArr} />
        <div className="py-20 px-16 w-full flex justify-between items-center lg:flex-row flex-col ">
          <div>
            <p className="w-[179px] py-1 rounded-[4px] bg-[#333333] font-medium text-sm text-center">
              What Our Readers Say
            </p>
            <h1 className="sm:text-4xl text-2xl font-medium mt-4">
              Real Words from Real Readers
            </h1>
          </div>
          <button className="flex gap-1 hover:bg-gray-800 hover:text-white  px-4 py-3 text-sm border border-gray-800 rounded lg:mt-0 mt-8">
            View All Testimonials{" "}
            <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />
          </button>
        </div>
        <Readers reader={readers} />
        <div className=" w-full py-20 flex justify-between items-center  flex-col ">
          <div className=" sm:px-16 px-10">
            <p className="w-[228px] py-1 rounded-[4px] bg-[#333333] font-medium text-sm text-center">
              Learn, Connect, and Innovate
            </p>
            <h1 className="sm:text-4xl text-2xl font-medium mt-4">
              Be Part of the Future Tech Revolution
            </h1>
            <p className="font-inter font-normal text-sm mt-2 text-gray-500">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        <Testimonials testimonialsArr={testimonials}/>
        </div>
      </div>
    </Layout>
  );
}
