import React, { useState } from "react";
import Logo from "./icons/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Header = () => {
    const [isOpen,setIsOpen] = useState(false);
  const router = useRouter();
  const tab = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "News",
      link: "/news",
    },
    {
      title: "Podcast",
      link: "/podcast",
    },
    {
      title: "Resources",
      link: "/resources",
    },
  ];
  return (
    <div className="py-6 lg:px-20 px-10 flex justify-between relative bg-[#141414]">
      <div className="flex gap-2 items-center">
        <Logo />
        <p className="font-semibold text-lg">Future Tech</p>
      </div>
      <div className="md:flex hidden gap-2">
        {tab.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`w-[90px] h-[50px] grid place-content-center ${
              item?.link === router?.pathname ||
              (router?.pathname?.startsWith(item?.link) && item?.link !== "/")
                ? "bg-black border border-gray-900 rounded"
                : "text-gray-500"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="md:hidden flex items-center " onClick={()=>setIsOpen(true)}><FaBars/></div>
      <button className="w-[120px] h-[45px] md:block hidden rounded-[4px] bg-yellow-400 text-black">Contact us</button>
      {isOpen && (
      <div className="bg-white w-full absolute top-0 left-0 z-20">
        <div className="flex justify-end text-black px-4 py-2"><ImCross onClick={()=>setIsOpen(false)} /></div>
        {tab.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`w-full h-[50px] grid place-content-center ${
              item?.link === router?.pathname ||
              (router?.pathname?.startsWith(item?.link) && item?.link !== "/")
                ? "bg-black border border-gray-900"
                : "text-gray-500"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      )}
    </div>
  );
};
export default Header;
