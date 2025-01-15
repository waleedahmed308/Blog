import React from "react";

interface cardProps {
  cardTitle: string;
  cardDescription: string;
}

interface data {
  icon: React.JSX.Element;
  title: string;
  description: string;
  card: cardProps[];
}

interface futureTechArrayProps {
  futureTechArray: data[];
}

const FutureTechFeatures: React.FC<futureTechArrayProps> = ({
  futureTechArray,
}) => {
  return (
    <>
      {futureTechArray.map((item, index) => (
        <div
          key={index}
          className="bg-[#141414] flex lg:flex-row flex-col font-inter border-b border-gray-800"
        >
          <div className=" pt-32 border-r  pl-12 border-gray-800 pr-6">
            {item.icon}
            <p className="font-semibold sm:text-[28px] text-2xl mt-6">
              {item.title}
            </p>
            <p className="text-gray-500 sm:text-base text-sm">
              {item.description}
            </p>
          </div>
          <div className="px-10 py-20 grid sm:grid-cols-2 grid-cols-1 gap-4">
            {item.card.map((cardItem, cardIndex) => (
              <div
                key={cardIndex}
                className="bg-[#191919] rounded-[4px] p-6 h-[134px]"
              >
                <p className="font-medium text-lg text-white">
                  {cardItem.cardTitle}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {cardItem.cardDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FutureTechFeatures;
