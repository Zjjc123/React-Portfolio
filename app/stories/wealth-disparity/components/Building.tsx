import { Box, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { Person } from './Person';

export default function Building() {
  return (
    <Box
      style={{
        position: 'relative',
        height: '400px',
        width: '100%',
      }}
    >
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '350px' }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          position: 'absolute',
          left: '40%',
          bottom: 0,
          width: '4px',
          backgroundColor: '#228be6',
        }}
      >
        <Text
          size="sm"
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          32 meters
        </Text>
      </motion.div>
      <Person />
      <Box
        className="ground"
        style={{
          position: 'absolute',
          left: '60%',
          bottom: 0,
          width: '100px',
          height: '350px',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0, y: -10 }}
            whileInView={{ scaleY: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: i * 0.1,
              ease: 'easeOut',
            }}
            style={{ height: '10%' }}
          >
            <Box
              style={{
                position: 'relative',
                height: '100%',
                width: '100%',
                backgroundColor: '#868e96',
                borderTop: '1px solid #495057',
                borderLeft: '8px solid #495057',
                borderRight: '8px solid #adb5bd',
                transformOrigin: 'bottom',
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,0.1) 100%)',
                backgroundSize: '100% 100%',
              }}
            />
          </motion.div>
        ))}
        <Text
          size="sm"
          style={{
            position: 'absolute',
            left: '120px',
            top: '50%',
            transform: 'translateY(-50%)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          10 story building
        </Text>
      </Box>
      <Box
        className="ground death"
        style={{
          position: 'absolute',
          left: '25%',
          bottom: 0,
          width: '50%',
          height: '20px',
          backgroundColor: '#495057',
          borderTop: '2px solid #343a40',
          backgroundImage:
            'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,0.1) 100%)',
        }}
      />
    </Box>
  );
}
