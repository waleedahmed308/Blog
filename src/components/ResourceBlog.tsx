import React, { useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";

interface ResourceBlogProps {
  icon: React.JSX.Element;
  title: string;
  description: string;
  buttonText: string;
  topics: string;
  topicDescription: string;
  image: string;
  ebookTitle: string;
  totalEbook: string;
  downloadFormat: string;
  downloadFormatDescription: string;
  averageAuthor: string;
  averageAuthorDescription: string;
}

interface Resource {
  resourcesArr: ResourceBlogProps[];
}

const ResourceBlog: React.FC<Resource> = ({ resourcesArr }) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleDownload = (index: number) => {
    console.log("index", index);
  };

  const handlePreview = (index: number) => {
    console.log("Preview index", index);
  };

  return (
    <>
      {resourcesArr.map((resource, index) => (
        <div
          key={index}
          className="sm:px-16 px-10 font-inter bg-[#141414] flex lg:flex-row flex-col border-b border-gray-800"
        >
          <div className="lg:w-[35%] w-full pt-36 lg:border-r border-gray-800 sm:pr-16">
            {resource.icon}
            <h1 className="font-semibold text-3xl mt-8">{resource.title}</h1>
            <p className="text-gray-500 mt-3 ">{resource.description}</p>
            <button
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => handleDownload(index)}
              className="w-full relative h-[57px] bg-[#191919] text-gray-500 mt-6 flex justify-center items-center border border-gray-700"
            >
              <span
                className={`absolute  inset-0 bg-gray-800 transition-all ease-in-out duration-300  ${
                  isHovered === index ? "w-full" : "w-0"
                }`}
              ></span>
              <span
                className={`z-10 flex gap-1 ${isHovered ? "text-white" : ""}`}
              >
                {" "}
                {resource.buttonText}
                <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />
              </span>
            </button>
          </div>
          <div className="lg:pl-10 lg:w-[65%] w-full pt-14">
            <div className="flex justify-between ">
              <p className="font-semibold text-xl mt-2">{resource.topics}</p>
              <p className="font-normal text-base text-gray-500 w-[73%]">
                {resource.topicDescription}
              </p>
            </div>
            <Image
              src={resource.image}
              alt="Ebook"
              width={500}
              height={500}
              className="w-full mt-6"
            />
            <div className="mt-6 flex gap-4">
              <div className="bg-[#191919] w-[188px] h-[101px] flex flex-col px-4 justify-center rounded-[4px] border border-gray-800">
                <p className="text-sm text-gray-500">{resource.ebookTitle}</p>
                <p className="font-semibold text-base">{resource.totalEbook}</p>
              </div>
              <div className="bg-[#191919] w-5/6 sm:h-[101px] rounded-[4px] border border-gray-800 px-4 flex sm:flex-row flex-col py-2 justify-between items-center  ">
                <div>
                  <p className="text-sm text-gray-500">
                    {resource.downloadFormat}
                  </p>
                  <p className="font-semibold text-base">
                    {resource.downloadFormatDescription}
                  </p>
                </div>
                <button
                  onClick={() => handlePreview(index)}
                  className="px-4 py-2 flex gap-1 items-center border border-gray-800 rounded-[4px] hover:bg-gray-800 hover:text-white text-sm text-gray-500"
                >
                  Preview <IoEyeOutline size={20} color="yellow" />
                </button>
              </div>
            </div>
            <div className="bg-[#191919] mb-12 w-full mt-6 sm:h-[101px] flex flex-col px-4 justify-center rounded-[4px] border border-gray-800">
              <p className="text-sm text-gray-500">{resource.averageAuthor}</p>
              <p className="font-medium text-base">
                {resource.averageAuthorDescription}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResourceBlog;
