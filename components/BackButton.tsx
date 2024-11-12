import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

interface BackButtonProps {
  href: string;
}

export function BackButton({ href }: BackButtonProps) {
  return (
    <Button
      component={Link}
      href={href}
      color="gray"
      mb="lg"
      variant="transparent"
    >
      <IconArrowLeft size={32} />
    </Button>
  );
}
