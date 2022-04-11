import React from "react";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <div className=" my-20 flex justify-center items-center flex-col">
      <p className="text-md uppercase text-violet-500 font-semibold py-2">
        {" "}
        Information
      </p>
      <h1 className="text-center text-5xl">
        Contact <span className="font-bold">Us</span>{" "}
      </h1>
      <p className=" pt-6 text-xl md:mx-40 mx-10 text-center text-violet-500">
        Have a great idea? Let's get in touch. The coffee is on us!
      </p>
      <div className="flex justify-center items-center gap-10">
        <div className="group md:w-72 w-80 h-12 rounded-md my-10  cursor-pointer flex justify-center items-center  hover:shadow-lg border border-violet-500 hover:bg-violet-500 ">
          <Link href="#">
            <h1 className="text-violet-500 group-hover:text-white text-xl">
              Get In Touch
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
