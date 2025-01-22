import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Props {
  profile:string;
  name:string;
  rating:number;
  address:string;
  description:string;
}

interface ReadersProps {
  reader:Props[]
}

const Readers: React.FC<ReadersProps> = ({ reader }) => {
  return (
    <div className="bg-[#141414]   grid lg:grid-cols-3 md:grid-cols-2">
      {reader.map((reader,index)=>(
      <div key={index} className="flex flex-col border-t pt-14 justify-center items-center border-r border-gray-800">
        <div className="flex gap-2">
          <Image
            src={reader.profile}
            alt="Readers"
            width={20}
            height={20}
            className="w-[50px] h-[50px] rounded-full"
          />
          <div>
            <p className="text-lg font-medium">{reader.name}</p>
            <p className="font-normal text-sm text-gray-500">
              {reader.address}
            </p>
          </div>
        </div>
        <div className=" md:w-[337px] mb-16 relative rounded-[10px] flex flex-col items-center bg-[#191919] mt-10 border border-gray-800">
          <div className=" px-3 py-3 absolute top-[-25px] rounded-full border border-gray-800 bg-[#141414] flex gap-1">
            {[...Array(Math.min(reader.rating,5) )].map((_, index) => (
              <FaStar
                key={index}
                className={`text-[#FFAD33] w-[20px] h-[20px]`}
              />
            ))}
          </div>
          <p className="text-base text-center  text-white px-6 py-6 mt-2">
           {reader.description}
          </p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Readers;
