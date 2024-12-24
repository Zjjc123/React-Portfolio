import { useState } from 'react';
import Link from 'next/link';
import { Text } from '@mantine/core';

interface HoverLinkProps {
  href: string;
  text: string;
  style?: React.CSSProperties;
}

export default function HoverLink({ href, text, style }: HoverLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{ textDecoration: 'none', ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text size={style?.fontSize || 'xl'} fw={500} c={style?.color || 'dark'}>
        {isHovered && '>'} {text}
      </Text>
    </Link>
  );
}
