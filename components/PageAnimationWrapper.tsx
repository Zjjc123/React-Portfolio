import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageAnimationWrapperProps {
  children: ReactNode;
  first?: boolean;
}

export default function PageAnimationWrapper({
  children,
  first = false,
}: PageAnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{
        type: 'spring',
        stiffness: 140,
        damping: 25,
      }}
    >
      {children}
    </motion.div>
  );
}
