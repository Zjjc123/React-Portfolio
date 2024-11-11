import { useState } from 'react';
import Link from 'next/link';
import { Text } from '@mantine/core';

interface HoverLinkProps {
  href: string;
  text: string;
}

export default function HoverLink({ href, text }: HoverLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text size="xl" fw={500} c="dark">
        {isHovered && '>'} {text}
      </Text>
    </Link>
  );
} 