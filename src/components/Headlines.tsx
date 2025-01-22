import React, { useState } from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { CgArrowTopRight } from "react-icons/cg";

type Props = {
  image: string;
  title: string;
  category: string;
};

type HeadlinesProps = {
  data: Props[];
};

export default function Headlines({ data }: HeadlinesProps) {
  const [hearctClicked, setHeartClicked] = useState<number[]>([]);
  const handleHeartClick = (index: number) => {
    setHeartClicked((prev) => {
      const updated = [...prev];
      updated[index] = updated[index] === 1 ? 0 : 1;
      return updated;
    });
  };

  const handleShowNews = (index: number) => {
    console.log("HeadLines news index", index);
  };

  return (
    <div className="w-full sm:px-20 px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 border-t border-gray-800 pt-14">
      {data.map((item, index) => (
        <div key={index} className="pb-4">
          <Image
            src={item.image}
            alt="politics"
            width={370}
            height={370}
            className=" h-[185px] md:w-[370px] w-full"
          />
          <div className="pr-5">
            <p className="font-semibold text-base mt-3">{item.title}</p>
            <p className="text-gray-500 text-sm mt-1">{item.category}</p>
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
                className="border border-gray-800 px-4 py-2 flex gap-1 rounded-[5px] text-gray-500 text-sm hover:bg-gray-800 hover:text-white"
              >
                Read More{" "}
                <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
