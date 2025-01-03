import Link from "next/link";
import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const data = [
    {
      title: "Home",
      subtitles: [
        {
          name: "Features",
          link: "/features",
        },
        {
          name: "Blogs",
          link: "/blog",
          icon: "",
        },
        {
          name: "Resources",
          link: "/resources",
        },
        {
          name: "Testimonials",
          link: "/testimonials",
        },
        {
          name: "Contact us",
          link: "/contactus",
        },
        {
          name: "News Letter",
          link: "/newsletter",
        },
      ],
    },
    {
      title: "News",
      subtitles: [
        {
          name: "Trending Stories",
          link: "/trending-stories",
          icon: "New",
        },
        {
          name: "Featured Videos",
          link: "/fratured-videos",
        },
        {
          name: "Technology",
          link: "/technology",
        },
        {
          name: "Health",
          link: "/health",
        },
        {
          name: "Politics",
          link: "/politics",
        },
        {
          name: "Environment",
          link: "/environment",
        },
      ],
    },
    {
      title: "Blogs",
      subtitles: [
        {
          name: "Quantum Computing",
          link: "/quantum-Computing",
        },
        {
          name: "AI Ethics",
          link: "/ai-ethics",
        },
        {
          name: "Space Exploration",
          link: "/space-Exploration",
        },
        {
          name: "Biotechnology",
          link: "/biotechnology",
        },
        {
          name: "Renewable Energy",
          link: "/renewable-Energy",
        },
        {
          name: "Biohacking",
          link: "/biohacking",
        },
      ],
    },
    {
      title: "Podcasts",
      subtitles: [
        {
          name: "AI Revolution",
          link: "/ai-revolution",
        },
        {
          name: "AI Revolution",
          link: "/ai-revolution",
        },
        {
          name: "TechTalk AI",
          link: "/techTalk AI",
        },
        {
          name: "AI Conversations",
          link: "/ai-Conversations",
        },
      ],
    },
    {
      title: "Resources",
      subtitles: [
        {
          name: "Whitepapers",
          link: "/whitepaper",
          icon: <CgArrowTopRight className="text-yellow-500 w-6 h-6" />,
        },
        {
          name: "Ebook",
          link: "/ebook",
          icon: <CgArrowTopRight className="text-yellow-500 w-6 h-6" />,
        },
        {
          name: "Reports",
          link: "/reports",
          icon: <CgArrowTopRight className="text-yellow-500 w-6 h-6" />,
        },
        {
          name: "Research Papers",
          link: "/research-papers",
          icon: <CgArrowTopRight className="text-yellow-500 w-6 h-6" />,
        },
      ],
    },
  ];
  return (
    <div className="w-full lg:px-20 sm:px-16 px-10 bg-[#141414] font-inter">
      <div className="w-full flex lg:justify-between lg:flex-row flex-col lg:items-start items-center pb-6 ">
        {data.map((item, index) => (
          <div key={index} className="pt-14">
            <p className="font-medium text-lg text-white pb-2">{item.title}</p>
            {item.subtitles.map((txt, idx) => (
              <Link
                href={txt.link}
                key={idx}
                className={`text-gray-500 text-sm flex gap-2 ${
                  index === data.length - 1
                    ? "mb-4 px-4 rounded-md border border-gray-700"
                    : ""
                }`}
              >
                <p className="my-2 hover:text-white">{txt.name}</p>
                {txt.icon && (
                  <p
                    className={`${
                      typeof txt.icon === "string"
                        ? "border border-gray-700"
                        : ""
                    } hover:text-white px-2 h-[27px] grid place-content-center mt-1 rounded-md text-xs`}
                  >
                    {txt.icon}
                  </p>
                )}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t-2 border-gray-600 flex md:justify-between md:flex-row flex-col gap-2 items-center text-gray-500 py-8">
        <div className="flex gap-2  text-sm ">
          <p className="px-2">Terms & Conditions</p>
          <span className="border-r-2 border-gray-600 h-4 mt-1"></span>
          <p className="px-2">Privacy Policy</p>
        </div>
        <div className="flex gap-1 text-white text-xl">
          <FaTwitter />
          <FaWhatsapp />
          <FaLinkedin />
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} FutureTech. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
