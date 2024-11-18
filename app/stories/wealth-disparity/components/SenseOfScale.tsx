import { Box } from '@mantine/core';
import { motion } from 'framer-motion';

export function SenseOfScale() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        style={{
        position: 'relative',
        height: 400,
        width: 600,
        margin: '0 auto',
      }}
    >
      {/* Fulcrum/base of the scale */}
      <Box
        style={{
          position: 'absolute',
          bottom: 100,
          left: '70%',
          transform: 'translateX(-50%)',
          width: 30,
          height: 100,
          backgroundColor: '#666',
          borderRadius: '4px',
        }}
      />

      {/* Balance beam */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 200,
          left: '70%',
          width: 400,
          height: 12,
          backgroundColor: '#444',
          transformOrigin: 'center',
          marginLeft: -200,
        }}
        animate={{
          rotate: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Left scale pan */}
        <Box
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: '#888',
            transform: 'translateY(40px)',
          }}
        />

        {/* Right scale pan */}
        <Box
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: '#888',
            transform: 'translateY(40px)',
          }}
        />
      </motion.div>
      </Box>
    </motion.div>
  );
}
