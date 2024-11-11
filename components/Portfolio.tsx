'use client';

import { Text } from '@mantine/core';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <Link href="/videos" style={{ textDecoration: 'none' }}>
      <Text size="xl" fw={500}>
        VIDEOS
      </Text>
    </Link>
  );
}
