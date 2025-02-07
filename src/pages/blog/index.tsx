import Layout from "@/components/Layout";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowDown, FaHeart, FaRegEye, FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import Headlines from "@/components/Headlines";
import { CgArrowTopRight } from "react-icons/cg";
import Testimonials from "@/components/Testimonials";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeartClick, setIsHeartClick] = useState<number>(0);

  const array = [
    {
      heading: "Publication Date",
      title: "October 15, 2023",
    },
    {
      heading: "Publication Date",
      title: "October 15, 2023",
    },
    {
      heading: "Publication Date",
      title: "October 15, 2023",
    },
    {
      heading: "Publication Date",
      title: "October 15, 2023",
    },
  ];

  const list = [
    "Introduction",
    "AI in Diagnostic Imaging",
    "Predictive Analytics and Disease Prevention",
    "Personalized Treatment Plans",
    "Drug Discovery and Research",
    "AI in Telemedicine",
    "Ethical Considerations",
    "The Future of AI in Healthcare",
    "Conclusion",
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
      <div className="font-inter ">
        <div className="relative flex flex-col items-center border-b border-gray-800">
          <Image
            src={"/blogbanner.png"}
            alt="Banner"
            width={500}
            height={500}
            className="w-full h-[400px] object-cover"
          />
          <h1 className=" text-center text-semibold lg:text-5xl sm:text-4xl text-3xl absolute bottom-8">
            The Rise of Artificial Intelligence in Healthcare
          </h1>
        </div>
        <div className="bg-[#141414] flex lg:flex-row flex-col border-b border-gray-800 ">
          <div className="lg:w-3/5 w-full border-r border-gray-800 relative">
            <div className=" py-14 ">
              <p className="font-medium text-xl sm:px-20 px-10">Introduction</p>
              <p className="text-base mt-1 text-gray-500 sm:px-20 px-10">
                Artificial Intelligence (AI) has emerged as a transformative
                force in the healthcare industry, reshaping patient care,
                diagnostics, and research. In this blog post, we explore the
                profound impact of AI in healthcare, from revolutionizing
                diagnostic accuracy to enhancing patient outcomes.
              </p>
            </div>
            <div className="border-t border-gray-800 py-14">
              <p className="font-medium text-2xl sm:px-20 px-10">
                Artificial Intelligence (AI)
              </p>
              <p className="text-base text-gray-500 mt-4 text-justify sm:px-20 px-10">
                Artificial Intelligence (AI) has permeated virtually every
                aspect of our lives, and healthcare is no exception. The
                integration of AI in healthcare is ushering in a new era of
                medical practice, where machines complement the capabilities of
                healthcare professionals, ultimately improving patient outcomes
                and the efficiency of the healthcare system. In this blog post,
                we will delve into the diverse applications of AI in healthcare,
                from diagnostic imaging to personalized treatment plans, and
                address the ethical considerations surrounding this
                revolutionary technology.
              </p>
              <p className="text-base text-gray-500 mt-4 text-justify sm:px-20 px-10">
                Artificial Intelligence (AI) has permeated virtually every
                aspect of our lives, and healthcare is no exception. The
                integration of AI in healthcare is ushering in a new era of
                medical practice, where machines complement the capabilities of
                healthcare professionals, ultimately improving patient outcomes
                and the efficiency of the healthcare system. In this blog post,
                we will delve into the diverse applications of AI in healthcare,
                from diagnostic imaging to personalized treatment plans, and
                address the ethical considerations surrounding this
                revolutionary technology.
              </p>
              <p className="mt-5 font-medium text-2xl sm:px-20 px-10">
                Predictive Analytics and Disease Prevention
              </p>
              <p
                className={`text-base text-gray-500 mt-4 text-justify sm:px-20 px-10  ${
                  isVisible ? "" : "opacity-40"
                }`}
              >
                Artificial Intelligence (AI) has permeated virtually every
                aspect of our lives, and healthcare is no exception. The
                integration of AI in healthcare is ushering in a new era of
                medical practice, where machines complement the capabilities of
                healthcare professionals, ultimately improving patient outcomes
                and the efficiency of the healthcare system. In this blog post,
                we will delve into the diverse applications of AI in healthcare,
                from diagnostic imaging to personalized treatment plans, and
                address the ethical considerations surrounding this
                revolutionary technology.
              </p>
              {!isVisible ? (
                <button
                  onClick={() => setIsVisible(true)}
                  className="flex gap-2 absolute bottom-10 text-justify left-1/4 border border-gray-600 px-4 py-3 text-sm items-center rounded-[10px]"
                >
                  Read Full Blog <FaArrowDown />
                </button>
              ) : (
                <p className="text-base text-gray-500 sm:px-20 px-10 text-justify">
                  {" "}
                  Artificial Intelligence (AI) has permeated virtually every
                  aspect of our lives, and healthcare is no exception. The
                  integration of AI in healthcare is ushering in a new era of
                  medical practice, where machines complement the capabilities
                  of healthcare professionals, ultimately improving patient
                  outcomes and the efficiency of the healthcare system. In this
                  blog post, we will delve into the diverse applications of AI
                  in healthcare, from diagnostic imaging to personalized
                  treatment plans, and address the ethical considerations
                  surrounding this revolutionary technology.{" "}
                  <span
                    onClick={() => setIsVisible(false)}
                    className={`text-white underline  text-sm cursor-pointer`}
                  >
                    Show Less
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className="lg:w-[40%] w-full">
            <div className="border-b border-gray-800 flex gap-2 pl-14 items-center py-8">
              <div className="px-4 py-2 border border-gray-800 rounded-full flex gap-1 items-center justify-center">
                {isHeartClick > 0 ? (
                  <FaHeart color="#FF5500" className="cursor-pointer " />
                ) : (
                  <FaRegHeart
                    onClick={() => setIsHeartClick(isHeartClick + 1)}
                    className="cursor-pointer "
                  />
                )}
                <p className="text-gray-500 text-sm">{isHeartClick}</p>
              </div>
              <div className="px-4 py-2 border border-gray-800 rounded-full flex gap-1 items-center justify-center">
                <FaRegEye />
                <p className="text-gray-500 text-sm">50k</p>
              </div>
              <div className="px-4 py-2 border border-gray-800 rounded-full flex gap-1 items-center justify-center">
                <LuSend />
                <p className="text-gray-500 text-sm">50k</p>
              </div>
            </div>
            <div className="grid grid-cols-2 px-14 pt-4 pb-6 ">
              {array.map((item, index) => (
                <div key={index} className="pt-6">
                  <p className="text-gray-500 text-base">{item.heading}</p>
                  <p className="text-sm mt-1">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 sm:px-14 px-8">
              <p className="text-base text-gray-500 ">Table of Contents</p>
              <div className="bg-[#191919] w-full rounded-[10px] mt-2 pb-6 px-6">
                {list.map((item, index) => (
                  <li key={index} className="text-sm pt-4">
                    {item}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-[#141414]">
          <div className="sm:px-20 px-10 flex justify-between items-center pb-8">
            <p className="font-meidum text-xl">Similar News</p>
            <button className="text-sm text-gray-500 flex gap-1 items-center border border-gray-800 rounded-[5px] px-4 py-2">
              View all news{" "}
              <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />
            </button>
          </div>
          <Headlines data={headlinesArray} className="border-none py-0" />
        </div>
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
// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   const [time, setTime] = useState(0); // Timer value in seconds
//   const [isRunning, setIsRunning] = useState(false); // To track if the timer is running

//   useEffect(() => {
//     let timerInterval: NodeJS.Timeout;

//     if (isRunning) {
//       timerInterval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     }

//     // Cleanup interval when the component unmounts or the timer stops
//     return () => clearInterval(timerInterval);
//   }, [isRunning]);

//   const handleStart = () => {
//     setIsRunning(true);
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//   };

//   const handleReset = () => {
//     setTime(0);
//     setIsRunning(false);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Timer</h1>
//       <div className="text-3xl mb-4">{time}s</div>
//       <div className="space-x-2">
//         <button
//           onClick={handleStart}
//           disabled={isRunning}
//           className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
//         >
//           Start
//         </button>
//         <button
//           onClick={handleStop}
//           disabled={!isRunning}
//           className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
//         >
//           Stop
//         </button>
//         <button
//           onClick={handleReset}
//           className="bg-gray-500 text-white px-4 py-2 rounded"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timer;
