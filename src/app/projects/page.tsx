import React from 'react';
import Link from 'next/link';

export default function Project() {
  return (
    <>
      <div className="w-full h-auto md:h-[70vh] bg-red-100 text-white text-4xl">
        <h1 className="text-3xl md:text-4xl text-black text-center py-10 font-bold">Projects</h1>

        <div className="flex flex-col md:flex-row text-center md:ml-10 py-5 gap-10 md:gap-5">
          <div className="w-[90%] md:w-[23%] h-auto md:h-[50vh] mx-auto md:ml-20 text-black font-bold p-5 bg-white rounded-lg shadow-lg">
            <h2 className="w-full h-8 text-2xl text-center">My Resume</h2>
            <p className="w-full h-auto text-lg py-4 text-center">This is my resume, created with HTML, CSS, and TypeScript. Click to view on Vercel.</p>
            <Link href="https://milestone-1-2-plum.vercel.app/">
              <p className="text-center w-full h-10 text-black text-lg py-4 hover:font-bold hover:text-blue-700">View On Vercel</p>
            </Link>
          </div>

          <div className="w-[90%] md:w-[23%] h-auto md:h-[50vh] mx-auto md:ml-20 text-black font-bold p-5 bg-white rounded-lg shadow-lg">
            <h2 className="w-full h-8 text-2xl text-center">Editable Resume</h2>
            <p className="w-full h-auto text-lg py-4 text-center">Editable resume created with HTML, CSS, and TypeScript. Click to view on Vercel.</p>
            <Link href="https://milesotne-3.vercel.app/">
              <p className="text-center w-full h-10 text-black text-lg py-11 hover:font-bold hover:text-blue-700">View On Vercel</p>
            </Link>
          </div>

          <div className="w-[90%] md:w-[23%] h-auto md:h-[50vh] mx-auto md:ml-20 text-black font-bold p-5 bg-white rounded-lg shadow-lg">
            <h2 className="w-full text-2xl h-8 text-center">Insta Like Feature</h2>
            <p className="w-full h-auto text-lg py-4 text-center">Instagram-like feature created with HTML, CSS, and JavaScript. Click to view on Vercel.</p>
            <Link href="https://java-script-dom-projects-sgqx.vercel.app/">
              <p className="text-center w-full h-10 text-black text-lg py-4 hover:font-bold hover:text-blue-700">View On Vercel</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
