import React from "react";
import Image from "next/image";
import HeroImage from "../public/images/hero.jpg";

function heroPage() {
  return (
    <div className="min-w-7xl mx-0 md:mx-20">
      <div className=" flex md:flex-row flex-col justify-between items-center my-10">
        <div className="flex-col px-10 ">
          <h1 className="text-6xl text-violet-500 font-bold">
            We are the{" "}
            <span className="text-violet-900">complete solution </span> for your{" "}
            <span className="text-violet-900 border-b border-blue-200">
              brand
            </span>
          </h1>
          <p className="text-2xl text-gray-400 mt-5 mb-10">
            We build beautiful and scalable web and mobile applications.
          </p>
          <button className="border-2 border-blue-500 text-violet-400 hover:bg-violet-500 hover:shadow-lg px-8 h-14 rounded-md hover:text-white ">
            See Our Work
          </button>
        </div>
        <div className="px-10">
          <Image src={HeroImage} width={900} height={900} objectFit="contain" />
        </div>
      </div>
    </div>
  );
}

export default heroPage;
