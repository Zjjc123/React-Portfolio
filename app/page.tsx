'use client';

import { Container, Card } from '@mantine/core';
import Personal from '../components/Personal';
import Pin from '../components/Pins';
import HoverLink from '../components/HoverLink';
import { motion } from 'framer-motion';

export default function Home() {
  const paperBackground = {
    background: `
      repeating-linear-gradient(transparent, transparent 29px, #f8f8f8 29px, #f8f8f8 30px),
      repeating-linear-gradient(90deg, transparent, transparent 29px, #f8f8f8 29px, #f8f8f8 30px),
      linear-gradient(#ffffff, #fdfdfd)
    `,
    backgroundSize: '100% 100%, 20px 20px, 20px 20px',
  };

  return (
    <>
      <Container py="xl" style={{ position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <Pin top="10px" right="30%" color="red" />
          <motion.div
            whileHover={{ rotateZ: -2 }}
            style={{
              transformOrigin: '70% 50%',
            }}
          >
            <Card
            shadow="sm"
            radius="md"
            withBorder
            style={{
              ...paperBackground,
              transform: 'rotate(-3deg)',
              marginBottom: '4rem',
            }}
          >
              <Personal />
            </Card>
          </motion.div>
        </div>

        <div style={{ position: 'relative' }}>
          <Pin top="10px" left="50%" color="red" />
          <motion.div
            whileHover={{ rotateZ: -2 }}
            style={{
              transformOrigin: 'center',
            }}
          >
            <Card
              shadow="sm"
              radius="md"
              withBorder
              style={{
                ...paperBackground,
                marginBottom: '4rem',
                marginLeft: '4rem',
                paddingTop: '2rem',
              }}
            >
              <HoverLink href="/stories" text="STORIES" />
            </Card>
          </motion.div>
        </div>

        <div style={{ position: 'relative' }}>
          <Pin top="10px" left="30%" color="red" />
          <motion.div
            whileHover={{ rotateZ: -5 }}
            style={{
              transformOrigin: '30% 50%',
            }}
          >
            <Card
              shadow="sm"
              radius="md"
              withBorder
              style={{
                ...paperBackground,
                transform: 'rotate(2deg)',
                marginLeft: '2rem',
                paddingTop: '4rem',
              }}
            >
              <HoverLink href="/videos" text="VIDEOS" />
            </Card>
          </motion.div>
        </div>
      </Container>
    </>
  );
}
