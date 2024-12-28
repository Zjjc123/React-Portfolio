'use client';

import { Container, Box, Text, Card } from '@mantine/core';
import { motion } from 'framer-motion';
import { BackButton } from '../../components/BackButton';
import PageAnimationWrapper from '../../components/PageAnimationWrapper';
import { useEffect, useState } from 'react';

import thoughts from './thoughts.json';

export default function ThoughtsPage() {
  const [activeThoughtIndex, setActiveThoughtIndex] = useState(0);
  const [randomRotations] = useState(() =>
    thoughts.map(() => (Math.random() - 0.5) * 10),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThoughtIndex((prev) => (prev + 1) % thoughts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BackButton href="/" />
        <Container
          style={{ position: 'relative' }}
          w="100%"
          size="md"
          pt="xl"
          mx="lg"
        >
          {thoughts.map((thought, index) => (
            <motion.div
              key={thought.id}
              animate={{
                scale: activeThoughtIndex === index ? 1.02 : 0.9,
                opacity:
                  Math.abs(activeThoughtIndex - index) < 2
                    ? activeThoughtIndex === index
                      ? 1
                      : 0.5
                    : 0,
                y:
                  activeThoughtIndex === index
                    ? 0
                    : index < activeThoughtIndex
                      ? -100
                      : 100,
                rotate:
                  activeThoughtIndex === index ? 0 : randomRotations[index],
                zIndex: activeThoughtIndex === index ? 1 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 20,
              }}
              style={{
                position: 'absolute',
                width: '100%',
                left: 0,
                top: '-5rem',
              }}
            >
              <Card
                shadow="sm"
                radius="md"
                withBorder
                style={{
                  ...paperBackground,
                  padding: '2rem',
                }}
              >
                <Text size="xl" style={{ lineHeight: 1.6 }}>
                  {thought.content}
                </Text>
                <Text size="sm" c="dimmed" mt="md">
                  {thought.date}
                </Text>
              </Card>
            </motion.div>
          ))}
        </Container>
      </Box>
    </PageAnimationWrapper>
  );
}
