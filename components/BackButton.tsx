import { Button } from '@mantine/core';
import Link from 'next/link';

interface BackButtonProps {
  href: string;
}

export function BackButton({ href }: BackButtonProps) {
  return (
    <Button component={Link} href={href} variant="outline" color="dark" mb="xl">
      Back
    </Button>
  );
}
