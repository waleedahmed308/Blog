import AIRevolution from "@/components/AIRevolution";
import Revolution from "@/components/icons/revolution";
import Layout from "@/components/Layout";
import Testimonials from "@/components/Testimonials";
import VisualInsights from "@/components/VisualInsights";
import Image from "next/image";
import React from "react";

// type Props = {};

export default function Podcasts() {
  const podcasts = [
    {
      icon: <Revolution />,
      title: "AI Revolution",
      rating: 5,
      host: "Host",
      hostName: "Dr. Sarah Mitchell",
      videoUrl: "https://www.youtube.com/embed/kwhfmFhQ_fc",
      videoTitle: "Delves into the transformative impact of AI",
      videoDescription:
        "Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.",
    },
    {
      icon: <Revolution />,
      title: "AI Revolution",
      rating: 5,
      host: "Host",
      hostName: "Dr. Sarah Mitchell",
      videoUrl: "https://www.youtube.com/embed/kwhfmFhQ_fc",
      videoTitle: "Delves into the transformative impact of AI",
      videoDescription:
        "Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.",
    },
  ];

  const handleListenPodcast = (index: number) => {
    console.log("Index", index);
  };

  const VidualInsightData = [
    {
      videoUrl: "https://www.youtube.com/embed/JBJY2MwVrJw",
      title: "Mars Exploration: Unveiling Alien Landscapes",
      buttonTitle:"Listen Podcasts",
      description:
        "Embark on a journey through the Red Planet&apos;s breathtaking landscapes and uncover the mysteries of Mars.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/kwhfmFhQ_fc",
      title: "Mars Exploration: Unveiling Alien Landscapes",
      buttonTitle:"Listen Podcasts",
      description:
        "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/X88jQZyvnMQ",
      title: "Blockchain Explained: A Revolution in Finance",
      buttonTitle:"Listen Podcasts",
      description:
        "Delve into the world of blockchain technology and its transformative impact on the financial industry.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/X88jQZyvnMQ",
      title: "Blockchain Explained: A Revolution in Finance",
      buttonTitle:"Listen Podcasts",
      description:
        "Delve into the world of blockchain technology and its transformative impact on the financial industry.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/X88jQZyvnMQ",
      title: "Blockchain Explained: A Revolution in Finance",
      buttonTitle:"Listen Podcasts",
      description:
        "Delve into the world of blockchain technology and its transformative impact on the financial industry.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/X88jQZyvnMQ",
      title: "Blockchain Explained: A Revolution in Finance",
      buttonTitle:"Listen Podcasts",
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
      <div className="font-inter bg-[#141414]">
        <div className="pt-8 sm:px-20 px-10">
          <h1 className="xl:text-5xl sm:text-4xl text-3xl font-medium">
            Unlock the World of Artificial Intelligence
          </h1>
          <div className="mt-4 flex justify-between">
            <p className="xl:text-5xl sm:text-4xl text-3xl font-medium ">
              through Podcasts
            </p>
            <p className="text-gray-500 w-3/5 text-justify">
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore the latest trends, breakthroughs, and
              discussions on artificial intelligence. Whether you re an
              enthusiast or a professional, our AI podcasts offer a gateway to
              knowledge and innovation.
            </p>
          </div>
        </div>
        <AIRevolution
          data={podcasts}
          handleListenPodcast={handleListenPodcast}
        />
          <div className="py-20 px-16 bg-[#191919]">
          <p className="w-[260px] py-1 rounded-[4px] bg-[#333333] font-medium text-sm text-center">
          Stay Informed with Fresh Content
          </p>
          <h1 className="text-4xl font-medium mt-4">Latest Podcast Episodes</h1>
        </div>
        <VisualInsights
          data={VidualInsightData}
          className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
        />
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
