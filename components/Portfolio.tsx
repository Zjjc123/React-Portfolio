'use client';

import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Portfolio({}: Props) {
  const [hover2, setHover2] = React.useState(false);

  return (
    <div className="flex flex-col">
      <Link
        href="/videos"
        className="text-4xl mb-8 text-gray-800 hover:text-gray-400"
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
      >
        {hover2 ? '> VIDEOS' : 'VIDEOS'}
      </Link>
    </div>
  );
}
