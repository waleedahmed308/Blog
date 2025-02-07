import Layout from "@/components/Layout";
import React from "react";

// type Props = {};

export default function Podcasts() {
  return (
    <Layout>
      <div className="font-inter bg-[#141414]">
        <div className="pt-8 sm:px-20 px-10">
          <h1 className="xl:text-5xl sm:text-4xl text-3xl font-medium">
            Unlock the World of Artificial Intelligence
          </h1>
          <div className="mt-4 flex justify-between">
            <p className="xl:text-5xl sm:text-4xl text-3xl font-medium ">
              through Podcasts
            </p>
            <p className="text-gray-500 w-3/5 text-justify">
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore the latest trends, breakthroughs, and
              discussions on artificial intelligence. Whether you re an
              enthusiast or a professional, our AI podcasts offer a gateway to
              knowledge and innovation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
