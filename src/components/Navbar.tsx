'use client';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="w-full bg-red-100 h-20 flex justify-between items-center">
        {/* Logo */}
     <Link href="/">   <div className="mt-10 w-auto h-[80px] ml-6 md:ml-12 items-center font-bold text-lg text-black cursor-pointer hover:text-blue-700">
          Ahmed Ur <span className="text-blue-700 hover:text-black">Rehman</span>
        </div></Link>

        {/* Desktop Links */}
        <div className="hidden md:flex">
          <ul className="flex text-black text-center space-x-6 md:space-x-10 font-bold mr-10">
            <Link href="/page.tsx">
              <li className="cursor-pointer hover:text-blue-700">Home</li>
            </Link>
            <Link href="/projects">
              <li className="cursor-pointer hover:text-blue-700">Our Projects</li>
            </Link>
            <Link href="/contactus">
              <li className="cursor-pointer hover:text-blue-700">Contact Us</li>
            </Link>
            <Link href="/AboutUS">
              <li className="cursor-pointer hover:text-blue-700">About Us</li>
            </Link>
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden bg-gray-900 p-2 text-white mr-6"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-red-100 text-black font-bold text-lg flex flex-col items-start p-4 space-y-4">
          <Link href="/page.tsx">
            <span onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-blue-700">Home</span>
          </Link>
          <Link href="/projects">
            <span onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-blue-700">Our Projects</span>
          </Link>
          <Link href="/contactus">
            <span onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-blue-700">Contact Us</span>
          </Link>
          <Link href="/AboutUS">
            <span onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-blue-700">About Us</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
