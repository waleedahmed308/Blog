import React, { useState } from "react";
import Image from "next/image";
import { IoIosHeart } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { CgArrowTopRight } from "react-icons/cg";
import { useRouter } from "next/router";

interface data {
  image: string;
  name: string;
  topic: string;
  date: string;
  title: string;
  description: string;
}

interface BlogListProps {
  famousBlogs: data[];
}

const BlogList: React.FC<BlogListProps> = ({ famousBlogs }) => {
  const [hearctClicked, setHeartClicked] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const router = useRouter();

  const handleShowBlog = (index: number) => {
    router.push(`/blogs/${index}`);
  };
  return (
    <>
      {famousBlogs.map((blog, index) => (
        <div
          key={index}
          className="font-inter md:px-20 px-10 border-b border-gray-800 pb-12 pt-10 flex xl:flex-row flex-col justify-between bg-[#141414]"
        >
          <div className="flex gap-3 w-1/4 mt-4">
            <Image
              src={blog.image}
              alt="Profile Image"
              width={40}
              height={40}
              className="w-[60px] h-[60px] rounded-full"
            />
            <div>
              <p className="text-lg font-semibold">{blog.name}</p>
              <p className="font-normal text-base text-gray-500">
                {blog.topic}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base font-semibold text-gray-400 mt-3">
              {blog.date}
            </p>
            <p className="text-xl font-semibold text-white mt-6">
              {blog.title}
            </p>
            <p className="text-sm text-gray-400 font-normal mt-1 text-center w-5/6">
              {blog.description}
            </p>
            <div className="mt-4 flex gap-4">
              <div className="flex gap-1 items-center bg-[#333333]  justify-center  px-3 py-1.5 rounded-full">
                <IoIosHeart
                  onClick={() => setHeartClicked(hearctClicked + 1)}
                  className="cursor-pointer"
                  color={`${hearctClicked > 0 ? "FF5500" : "gray"}`}
                />
                <span className="text-gray-400 text-xs">{hearctClicked}k</span>
              </div>
              <div className="flex gap-1 items-center bg-[#333333]  justify-center  px-3 py-1.5 rounded-full">
                <FaRegComment color="gray" />
                <span className="text-gray-400 text-xs">50k</span>
              </div>
              <div className="flex gap-1 items-center bg-[#333333]  justify-center  px-3 py-1.5 rounded-full">
                <LuSend color="gray" />
                <span className="text-gray-400 text-xs">50k</span>
              </div>
            </div>
          </div>
          <div className="xl:mt-14 mt-4">
            <button
              className="flex gap-1 relative px-4 py-3 text-sm border border-gray-800 rounded lg:mt-0 mt-8"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => handleShowBlog(index)}
            >
              <span
                className={` absolute inset-0 h-full transition-all ease-out duration-300 ${
                  isHovered === index ? "w-full bg-gray-700" : "w-0"
                }`}
              ></span>
              <span className="z-10 flex gap-1">
                View Blogs{" "}
                <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogList;
