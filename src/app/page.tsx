// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer"
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-red-100 h-auto md:h-[70vh] items-center justify-center text-center text-blue-100 font-bold">
        <div className="w-full md:w-[50vw] h-auto md:h-[50vh] mb-10 text-center md:text-left items-center px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl text-black mt-10 md:mt-20 hover:bg-red-100 hover:text-blue-700">
            Hello, I am <span className="text-blue-700">Ahmed Ur Rehman</span>
          </h1>
          <h2 className="text-xl md:text-3xl text-black mt-4 md:mt-6">Frontend Developer.</h2>
          <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-10">
            <button className="w-full md:w-[10vw] h-[6vh] bg-blue-700 text-red-100 hover:bg-red-100 hover:text-blue-700 cursor-pointer">
              Contact Us
            </button>
            <button className="w-full md:w-[10vw] h-[6vh] bg-blue-700 text-red-100 hover:bg-red-100 hover:text-blue-700 cursor-pointer">
              Our Projects
            </button>
          </div>
        </div>

        <div className="w-full md:w-[50vw] h-auto md:h-[70vh] flex justify-center md:justify-end">
          <img className="w-[90%] md:w-auto mt-6 md:mt-20" src="/OPP.jpeg" alt="Profile" />
        </div>
      </div>
    </>
  );
}
