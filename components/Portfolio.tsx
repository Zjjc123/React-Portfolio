'use client';

import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Portfolio({}: Props) {
  const [hover1, setHover1] = React.useState(false);
  const [hover2, setHover2] = React.useState(false);
  const [hover3, setHover3] = React.useState(false);
  const [hover4, setHover4] = React.useState(false);

  return (
    <div className="flex flex-col">
      <Link
        href="/projects"
        className="text-4xl mb-8 text-gray-800 hover:text-gray-400"
        onMouseEnter={() => setHover1(true)}
        onMouseLeave={() => setHover1(false)}
      >
        {hover1 ? '> PROJECTS' : 'PROJECTS'}
      </Link>
      <Link
        href="/videos"
        className="text-4xl mb-8 text-gray-800 hover:text-gray-400"
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
      >
        {hover2 ? '> VIDEOS' : 'VIDEOS'}
      </Link>
      {/* <Link
        href="/photography"
        className="text-4xl mb-8 text-gray-800 hover:text-gray-400"
        onMouseEnter={() => setHover3(true)}
        onMouseLeave={() => setHover3(false)}
      >
        {hover3 ? '> PHOTOGRAPHY' : 'PHOTOGRAPHY'}
      </Link>
      <Link
        href="/resume"
        className="text-4xl mb-8 text-gray-800 hover:text-gray-400"
        onMouseEnter={() => setHover4(true)}
        onMouseLeave={() => setHover4(false)}
      >
        {hover4 ? '> RESUME' : 'RESUME'}
      </Link> */}
    </div>
  );
}
