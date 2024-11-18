import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

interface BackButtonProps {
  href: string;
  style?: React.CSSProperties;
}

export function BackButton({ href, style }: BackButtonProps) {
  return (
    <Button
      component={Link}
      href={href}
      color="gray"
      mb="lg"
      variant="transparent"
      style={{ position: 'fixed', top: 10, left: 0, ...style }}
    >
      <IconArrowLeft size={32} />
    </Button>
  );
}
