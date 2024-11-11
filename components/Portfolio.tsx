'use client';

import { Text } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';

export default function Portfolio() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/videos"
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text size="xl" fw={500} c="dark">
        {isHovered && '>'} VIDEOS
      </Text>
    </Link>
  );
}
