import React from "react";
import {
  FaMicrosoft,
  FaDiscord,
  FaApple,
  FaAmazon,
  FaUber,
} from "react-icons/fa";

function clients() {
  return (
    <div className="flex-col justify-center items-center my-40">
      <p className="text-violet-500 uppercase text-center">Clients</p>
      <h2 className="text-5xl   text-center">
        Awesome <span className="font-bold"> Clients</span>
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-5 grid-cols-3 mt-10 gap-8">
          <FaMicrosoft className="text-6xl text-gray-300 cursor-pointer hover:text-black" />
          <FaDiscord className="text-6xl text-gray-300 cursor-pointer hover:text-black" />
          <FaApple className="text-6xl text-gray-300 cursor-pointer hover:text-black" />
          <FaAmazon className="text-6xl text-gray-300 cursor-pointer hover:text-black" />
          <FaUber className="text-6xl text-gray-300 cursor-pointer hover:text-black" />
        </div>
      </div>
    </div>
  );
}

export default clients;
