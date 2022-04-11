import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Stream<span className="text-indigo-600">line</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer text-gray-500 hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer text-gray-500 hover:text-violet-600" />
              <FaLinkedin className="text-2xl cursor-pointer text-gray-500 hover:text-violet-600" />
              <FaYoutube className="text-2xl cursor-pointer text-gray-500 hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Web Apps
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Apps
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Color Generator <span className="text-violet-600">New</span>
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Themes
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Services
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Blog
            </li>

            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              FAQ's
            </li>

            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className="text-sm text-gray-800 font-semibold">
          © 2019-2021 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-violet-600 font-semibold cursor-pointer">
            Streamline{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
