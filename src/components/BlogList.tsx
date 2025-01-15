import React from "react";
import Image from "next/image";

const BlogList = () => {
  return (
    <div className="font-inter px-20 flex justify-between">
      <div className="flex gap-3 items-center">
        <Image
          src="/image.png"
          alt="Profile Image"
          width={40}
          height={40}
          className="w-[60px] h-[60px] rounded-full"
        />
        <div>
          <p className="text-lg font-semibold">John Techson</p>
          <p className="font-normal text-base text-gray-500">
            Quantum Computing
          </p>
        </div>
      </div>
      <div>
        <p className="text-base font-semibold text-gray-400">
          October 15, 2023
        </p>
        <p className="text-xl font-semibold text-white">
          The Quantum Leap in Computing
        </p>
        <p className="text-sm text-gray-400 font-normal">
            Explore the revolution in quantum computing, its applications, and
            its potential impact on various industries.
          </p>
      </div>
    </div>
  );
};

export default BlogList;
