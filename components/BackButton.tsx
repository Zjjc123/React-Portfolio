import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BackButtonProps {
  href: string;
  style?: React.CSSProperties;
  color?: string;
}

export function BackButton({ href, style, color }: BackButtonProps) {
  return (
    <Button
      component={Link}
      href={href}
      color={color || 'gray'}
      mb="lg"
      variant="transparent"
      style={{ position: 'fixed', top: 10, left: 0, ...style }}
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        <IconArrowLeft size={32} />
      </motion.div>
    </Button>
  );
}
