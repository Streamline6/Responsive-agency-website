import React from "react";
import {
  MdWeb,
  MdOutlineDesignServices,
  MdChatBubbleOutline,
} from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GiGrowth } from "react-icons/gi";
import { SiAzuredevops } from "react-icons/si";

function services() {
  return (
    <div className="flex-col justify-center items-center my-20">
      <p className="text-violet-500 uppercase text-center">Services</p>
      <h2 className="text-5xl  text-center">
        Our Best<span className="font-bold"> Services</span>
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 md:mx-0 mx-10 md:grid-cols-3 gap-5 my-20">
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <MdWeb className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              Web Development
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <AiOutlineAppstoreAdd className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              App Development
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <MdOutlineDesignServices className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              UI/UX Design
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <MdChatBubbleOutline className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              AI Chatbot
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <GiGrowth className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              Growth Hacking
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
            <SiAzuredevops className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              Devops
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
