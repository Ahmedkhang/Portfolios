'use client';
import Link from 'next/link';
import { BsLinkedin } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import React from 'react';

export default function Footer() {
    return (
        <div className="flex w-full h-[20vh] bg-red-100 text-white justify-center items-center">
            <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8">
                <Link href="https://www.linkedin.com/in/ahmed-ur-rehman-b98121279/">
                    <h3 className="text-black p-3 md:p-4 lg:p-5 flex text-2xl">
                        <BsLinkedin />
                    </h3>
                </Link>
                <Link href="https://github.com/Ahmedkhang">
                    <h3 className="text-black p-3 md:p-4 lg:p-5 flex text-2xl">
                        <FaGithub />
                    </h3>
                </Link>
                <Link href="https://vercel.com/new/ahmeds-projects-bafb690a?onboarding=true">
                    <h3 className="text-black p-3 md:p-4 lg:p-5 flex text-2xl">
                        <IoLogoVercel />
                    </h3>
                </Link>
                <Link href="https://discord.com/channels/@me">
                    <h3 className="text-black p-3 md:p-4 lg:p-5 flex text-2xl cursor-pointer">
                        <FaDiscord />
                    </h3>
                </Link>
            </div>
        </div>
    );
}
