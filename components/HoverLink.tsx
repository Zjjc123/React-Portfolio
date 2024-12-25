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
      <Text style={{ ...style }} c={style?.color || 'dark'}>
        {isHovered && '>'} {text}
      </Text>
    </Link>
  );
}
