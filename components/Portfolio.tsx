'use client';

import { Text } from '@mantine/core';
import Link from 'next/link';

type Props = {};

export default function Portfolio({}: Props) {
  return (
    <Link href="/videos" style={{ textDecoration: 'none' }}>
      <Text
        size="xl"
        fw={500}
        className="mb-8"
        variant="gradient"
        gradient={{ from: 'gray.8', to: 'gray.4', deg: 90 }}
      >
        VIDEOS
      </Text>
    </Link>
  );
}
