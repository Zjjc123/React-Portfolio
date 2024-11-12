'use client';

import {
  Box,
  Card,
  Center,
  Container,
  Text,
  Button,
  Title,
} from '@mantine/core';
import { BackButton } from '../../../components/BackButton';
import { useState } from 'react';

const floatUpKeyframes = `
  @keyframes floatUp {
    0% {
      opacity: 1;
      bottom: 0%;
    }
    100% {
      opacity: 0;
      bottom: 100%;
    }
  }
`;

export default function StoriesPage() {
  const [totalEarned, setTotalEarned] = useState(0);
  const [floatingNumbers, setFloatingNumbers] = useState<number[]>([]);

  const addMillion = () => {
    setTotalEarned((prev) => prev + 1_000_000);
    setFloatingNumbers((prev) => [...prev, Date.now()]);
    // Clean up old floating numbers after animation
    setTimeout(() => {
      setFloatingNumbers((prev) => prev.slice(1));
    }, 2000);
  };

  return (
    <>
      <style>{floatUpKeyframes}</style>
      <Container>
        <BackButton href="/stories" />
        <Card shadow="sm" radius="md" withBorder>
          <Text size="xl">
            Imagine you have a check for{' '}
            <Text component="span" fw={700}>
              a million dollars.
            </Text>
          </Text>
          <Card
            mt="md"
            my="xl"
            padding="xl"
            radius="md"
            withBorder
            style={{
              backgroundColor: '#f8f9fa',
              fontFamily: 'serif',
              position: 'relative',
              minHeight: '200px',
            }}
          >
            <Text
              size="sm"
              c="dimmed"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
              }}
            >
              No. 12345
            </Text>

            <Text
              size="xl"
              fw={700}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '2.5rem',
              }}
            >
              $1,000,000.00
            </Text>

            <Text
              size="sm"
              style={{
                position: 'absolute',
                bottom: '40px',
                left: '20px',
              }}
            >
              PAY TO THE ORDER OF ___________________________
            </Text>

            <Text
              size="sm"
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                fontStyle: 'italic',
              }}
            >
              MEMO: this is a piece of paper
            </Text>
          </Card>
          <Text size="xl">
            Now, imagine stacking the checks on top of each other.
          </Text>

          <Box
            mt="xl"
            style={{
              position: 'relative',
              height: '200px',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <Box
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform:
                  'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {[...Array(30)].map((_, i) => (
                <Box
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '120px',
                    height: '60px',
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                    transform: `translateZ(${i * 4}px)`,
                    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                  }}
                />
              ))}
            </Box>

            <Text
              size="sm"
              c="dimmed"
              style={{
                position: 'absolute',
                left: '25%',
                top: '40px',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
              }}
            >
              Stack of $1M checks...
            </Text>
          </Box>
          <Text size="xl" mt="xl">
            <Center>
              And keep stacking{' '}
              <Text component="span" fw={700}>
                ...
              </Text>
            </Center>
          </Text>
          <Box
            mt="xl"
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
                top: '75%',
                transform:
                  'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {[...Array(100)].map((_, i) => (
                <Box
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '120px',
                    height: '60px',
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                    transform: `translateZ(${i * 4}px)`,
                    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                  }}
                />
              ))}
            </Box>
          </Box>
          <Text size="xl" mt="xl">
            <Center>
              AND STILL STACKING{' '}
              <Text component="span" fw={700}>
                ...
              </Text>
            </Center>
          </Text>
          <Box
            mt="xl"
            style={{
              position: 'relative',
              height: '1000px',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <Box
              style={{
                position: 'absolute',
                left: '50%',
                top: '75%',
                transform:
                  'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {[...Array(250)].map((_, i) => (
                <Box
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '120px',
                    height: '60px',
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                    transform: `translateZ(${i * 4}px)`,
                    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                  }}
                />
              ))}
            </Box>
          </Box>
          <Text size="xl" mt="xl">
            Until you have the net worth of the world's richest man{' '}
            <Text component="span" fw={700}>
              Elon Musk
            </Text>
          </Text>
          <Box mt="xl">
            <Text size="xl" mb="md">
              It'll reach the height of a <b>10-story</b> building.
            </Text>
            <Box
              style={{ position: 'relative', height: '400px', width: '100%' }}
            >
              <Box
                style={{
                  position: 'absolute',
                  left: '20%',
                  bottom: 0,
                  width: '4px',
                  height: '300px',
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
                  }}
                >
                  32 meters
                </Text>
              </Box>

              <Box
                style={{
                  position: 'absolute',
                  left: '60%',
                  bottom: 0,
                  width: '100px',
                  height: '300px',
                  backgroundColor: '#868e96',
                  display: 'flex',
                  flexDirection: 'column-reverse',
                }}
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <Box
                    key={i}
                    style={{
                      position: 'relative',
                      height: '10%',
                      width: '100%',
                      backgroundColor: '#868e96',
                      borderTop: '1px solid #495057',
                      borderLeft: '8px solid #495057',
                      borderRight: '8px solid #adb5bd',
                    }}
                  />
                ))}
                <Text
                  size="sm"
                  style={{
                    position: 'absolute',
                    left: '120px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  10 story building
                </Text>
              </Box>
            </Box>
          </Box>
          <Text size="xl" mt={150} mb="md">
            To put this in perspective:
          </Text>
          <Text size="xl" mt="md">
            You will most definitely <b>die</b> if you jump off this stack of
            checks...
          </Text>

          <Title order={3} mt={100}>
            Another way to put it,
          </Title>

          <Text size="xl" mt="md">
            If you earn a million dollars every hour, it'll take you more than a{' '}
            <b>century</b> to earn as much as Elon Musk.
          </Text>

          <Text size="xl" mt="md">
            Don't believe me? Try it yourself!
          </Text>
          <Box
            mt="xl"
            style={{
              position: 'relative',
              height: '100px',
              overflow: 'hidden',
            }}
          >
            {floatingNumbers.map((timestamp) => (
              <Text
                key={timestamp}
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: '#40c057',
                  animation: 'floatUp 2s linear forwards',
                }}
              >
                +$1,000,000
              </Text>
            ))}
            <Title order={2} mt="md" style={{ textAlign: 'center' }}>
              Total earned: ${totalEarned.toLocaleString()}
            </Title>
          </Box>
          <Button mt="md" onClick={addMillion} color="green">
            Get $1M
          </Button>

          <Text size="sm" mt="md">
            * This is a demo. No money will be transferred.
          </Text>
        </Card>
      </Container>
    </>
  );
}
