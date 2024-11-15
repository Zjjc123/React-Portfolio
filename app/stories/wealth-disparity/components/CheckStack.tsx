import { Box } from '@mantine/core';
import { motion } from 'framer-motion';

export function CheckStack() {
  return (
    <Box
      style={{
        position: 'relative',
        height: '500px',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        style={{
          position: 'absolute',
          left: '50%',
          top: '70%',
          transform: 'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.03, duration: 1 }}
            viewport={{ once: true }}
            style={{
              transform: `translateZ(${i * 4}px)`,
            }}
          >
            <Box
              style={{
                position: 'absolute',
                width: '120px',
                height: '60px',
                backgroundColor: '#fff',
                border: '1px solid #000',
                boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
