'use client';

import Link from 'next/link';
import React from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

type Props = {};

export default function Personal({}: Props) {
  return (
    <>
      <div className="col-span-2">
        <h2 className="text-md">JASON ZHANG</h2>
        <p className="py-2">
          Computer science student at the University of Washington, I am
          passionate about using technology to solve real-world problems in
          various interdisciplinary fields.
        </p>
        <p className="py-2">
          Also a photographer and videographer. I love to capture moments and
          tell stories with digital media.
        </p>
      </div>
      <div className="flex items-center justify-between max-w-[380px] m-auto py-5">
        <a
          href="https://www.linkedin.com/in/zjjc123/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-cubic duration-300">
            <FaLinkedinIn />
          </div>
        </a>
        <a href="https://github.com/zjjc123" target="_blank" rel="noreferrer">
          <div className="rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-cubic duration-300">
            <FaGithub />
          </div>
        </a>
      </div>
    </>
  );
}
