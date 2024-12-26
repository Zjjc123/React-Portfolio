'use client';

import { Container, Card, Box, Text } from '@mantine/core';
import Personal from '../components/Personal';
import Pin from '../components/Pins';
import HoverLink from '../components/HoverLink';
import { motion } from 'framer-motion';
import PageAnimationWrapper from '../components/PageAnimationWrapper';

export default function Home() {
  const paperBackground = {
    background: `
      repeating-linear-gradient(transparent, transparent 29px, #d8d8d8 29px, #d8d8d8 30px),
      repeating-linear-gradient(90deg, transparent, transparent 29px, #FEF7B1 29px, #FEF7B1 30px),
      linear-gradient(#FFFAC8, #FEF7B1)
    `,
    backgroundSize: '100% 100%, 20px 20px, 20px 20px',
  };

  return (
    <PageAnimationWrapper>
      <Box
        py="xl"
        style={{
          backgroundColor: '#f0f0f0',
          minHeight: '100vh',
          backgroundImage: 'radial-gradient(#a0a0a0 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <Container pt="xl">
          <div style={{ position: 'relative' }}>
            <Pin top="10px" right="30%" color="red" />
            <motion.div
              whileHover={{ rotateZ: -2 }}
              style={{
                transformOrigin: '70% 50%',
                width: '85%',
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
            <Pin top="10px" left="30%" color="red" />
            <motion.div
              whileHover={{ rotateZ: -5 }}
              style={{
                width: '50%',
                transformOrigin: '70% 20%',
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
                  paddingTop: '3rem',
                }}
              >
                <HoverLink
                  href="/videos"
                  text="📺 videos"
                  style={{
                    fontSize: '2rem',
                  }}
                />
              </Card>
            </motion.div>
          </div>

          <div style={{ position: 'relative' }}>
            <Pin top="10px" left="40%" color="red" />
            <motion.div
              whileHover={{ rotateZ: 2 }}
              style={{
                width: '70%',
                marginTop: '15px',
              }}
            >
              <Card
                shadow="sm"
                radius="md"
                withBorder
                style={{
                  ...paperBackground,
                  transform: 'rotate(-1deg)',
                  marginLeft: '20rem',
                  paddingTop: '3rem',
                  width: '100%',
                }}
              >
                <HoverLink
                  href="/bookshelf"
                  text="📚 bookshelf"
                  style={{
                    fontSize: '2rem',
                  }}
                />
              </Card>
            </motion.div>
          </div>

          <div style={{ position: 'relative' }}>
            <Pin top="10px" left="50%" color="red" />
            <motion.div
              whileHover={{ rotateZ: -2 }}
              style={{
                transformOrigin: 'center',
                marginTop: '40px',
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
                <HoverLink
                  href="/stories"
                  text="📖 stories"
                  style={{
                    fontSize: '2rem',
                  }}
                />
              </Card>
            </motion.div>
          </div>
        </Container>
      </Box>
    </PageAnimationWrapper>
  );
}
