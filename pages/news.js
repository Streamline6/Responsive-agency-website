import React from "react";
import { FcBbc } from "react-icons/fc";
import { SiCnn, SiDesignernews } from "react-icons/si";

function news() {
  return (
    <div className="flex-col justify-center items-center my-20">
      <p className="text-violet-500 uppercase text-center">Press</p>
      <h2 className="text-5xl text-center">
        Press <span className="font-bold">Attention</span>
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-20 mx-10">
          <div className="group flex-col cursor-pointer justify-center items-center border hover:border-violet-500  border-violet-100 rounded-md p-8 ">
            <FcBbc className="text-4xl text-gray-600 0" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-violet-500 my-2">
              Best Agency for App & web product with 100% quality work.
            </h1>
            <a
              href="#"
              className="text-xl text-violet-500 group-hover:text-violet-800 "
            >
              Read More...
            </a>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border   border-violet-100 rounded-md p-8 hover:border-violet-500">
            <SiCnn className="text-4xl text-gray-600 " />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-violet-500 my-2">
              Product Hunt for Online Programming Courses & Tutorials
            </h1>
            <a
              href="#"
              className="text-xl text-violet-500 group-hover:text-violet-800 "
            >
              Read More...
            </a>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <SiDesignernews className="text-4xl text-gray-600 " />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-violet-500 my-2">
              Best Agency for digital product with full ownership.
            </h1>
            <a
              href="#"
              className="text-xl text-violet-500 group-hover:text-violet-800 "
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default news;
