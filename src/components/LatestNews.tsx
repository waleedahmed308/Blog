import React, { useState } from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

type Props = {
  image: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
};

type LatestNewsArray = {
  data: Props[];
};

export default function LatestNews({ data }: LatestNewsArray) {
  const [hearctClicked, setHeartClicked] = useState<number[]>([]);
  const handleHeartClick = (index: number) => {
    setHeartClicked((prev) => {
      const updated = [...prev];
      updated[index] = updated[index] === 1 ? 0 : 1;
      return updated;
    });
  };

  const handleShowNews = (index: number) => {
    console.log("Read more index", index);
  };
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className=" sm:px-20 px-10 border-t border-gray-800 flex lg:flex-row flex-col gap-8 font-inter  py-14"
        >
          <Image
            src={item.image}
            alt="Weather News"
            width={450}
            height={450}
            className="lg:w-[450px] w-full"
          />
          <div className="flex flex-col justify-center lg:mt-0 mt-6 ">
            <p className="font-semibold text-2xl">{item.title}</p>
            <p className="text-gray-500 text-base mt-3">{item.description}</p>
            <div className="xl:w-[55%] mt-7 flex sm:flex-row flex-col sm:gap-y-0 gap-y-4  justify-between">
              <div>
                <p className="text-base text-gray-500">Category</p>
                <p className="text-base">{item.category}</p>
              </div>
              <div>
                <p className="text-base text-gray-500">Publication Date</p>
                <p className="text-base">{item.date}</p>
              </div>
              <div>
                <p className="text-base text-gray-500">Author</p>
                <p className="text-base">{item.author}</p>
              </div>
            </div>
            <div className="flex justify-between mt-8 items-center">
              <div className="flex gap-2">
                <div className="w-[70px] py-2 flex justify-center items-center gap-2 rounded-full bg-[#191919] border border-gray-800">
                  {hearctClicked[index] > 0 ? (
                    <FaHeart
                      onClick={() => handleHeartClick(index)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <FaRegHeart
                      onClick={() => handleHeartClick(index)}
                      className="cursor-pointer"
                    />
                  )}
                  <p className="text-sm text-gray-500">
                    {hearctClicked[index]}
                  </p>
                </div>
                <div className="w-[70px] py-2 flex justify-center items-center gap-2 rounded-full bg-[#191919] border border-gray-800">
                  <FiSend className="text-gray-500" />
                  <p className="text-sm text-gray-500">204</p>
                </div>
              </div>
              <button
                onClick={() => handleShowNews(index)}
                className="border border-gray-800 rounded-[5px] px-4 py-2 text-gray-500 text-sm hover:bg-gray-800 hover:text-white"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
