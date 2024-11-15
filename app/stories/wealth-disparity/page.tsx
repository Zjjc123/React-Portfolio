'use client';

import {
  Box,
  Card,
  Center,
  Text,
  Button,
  Title,
  Blockquote,
  Flex,
  Container,
} from '@mantine/core';
import { BackButton } from '../../../components/BackButton';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SpendPage from './spend';

const customStyles = `
  .left {
    float: left;
    top: 0;
    width: 30%;
  }

  .right {
    position: fixed;
    float: right;
    top: 0;
    left: 30%;
    width: 70%;
    height: 100vh;
    display: flex;
    justify-content: center;
    transition: transform 0.3s ease-out;
    transform: translateX(${(props) => (props.shouldExit ? '100%' : '0')});
  }

  .graph-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    margin: auto 0;
  }

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

  const [sectionNumber, setSectionNumber] = useState(0);
  const [intersectingSections, setIntersectingSections] = useState<number[]>(
    [],
  );
  const sectionRefs = useRef([]);

  const [shouldExitRight, setShouldExitRight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxIntersectingSection = -1;
        let maxIntersectingRatio = 0;
        let newIntersectingSections: number[] = [];

        entries.forEach((entry) => {
          const sectionId = parseInt(entry.target.id);
          if (
            entry.isIntersecting &&
            entry.intersectionRatio > maxIntersectingRatio
          ) {
            maxIntersectingSection = sectionId;
            maxIntersectingRatio = entry.intersectionRatio;
          }

          if (entry.isIntersecting) {
            newIntersectingSections.push(sectionId);
          }
        });

        setIntersectingSections(newIntersectingSections);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    sectionRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  useEffect(() => {
    if (intersectingSections.length > 0) {
      setSectionNumber(intersectingSections[0]);
    }
  }, [intersectingSections]);

  const updateSectionRefs = (ref: any) => {
    if (ref) {
      sectionRefs.current.push(ref);
    }
  };

  const addMillion = () => {
    setTotalEarned((prev) => prev + 1_000_000);
    setFloatingNumbers((prev) => [...prev, Date.now()]);
    setTimeout(() => {
      setFloatingNumbers((prev) => prev.slice(1));
    }, 2000);
  };

  return (
    <>
      <Container bg="white" style={{ minHeight: '100vh' }}>
        <style>{customStyles}</style>
        <BackButton href="/stories" />

        <div className="left">
          <section className="text-container" ref={updateSectionRefs} id="0">
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              Most of the time, we think we have a good understanding of money.
              In 2024, a 10 dollar coffee would be outrageous and a 3 dollar
              coffee would seem like a good deal.
            </Text>
          </section>
          <section className="text-container" ref={updateSectionRefs} id="1">
            <Text size="xl" my={500} style={{ textAlign: 'center' }}>
              We have a very good understanding of the value of money in our
              daily lives.
            </Text>
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              But when we think about money in terms of tens, hundreds, or even
              thousands of million dollars, we start to lose our sense of scale.
            </Text>
          </section>
          <section className="text-container" ref={updateSectionRefs} id="2">
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              But when it comes to the net worth of the world's richest people,
              we think we understand it.
            </Text>
            <Text size="xl" fw={700} mb="md" style={{ textAlign: 'center' }}>
              Do we really?
            </Text>
          </section>
          <section className="text-container" ref={updateSectionRefs} id="3">
            <Text size="xl" mt="xl" style={{ textAlign: 'center' }}>
              Imagine you have a check for{' '}
              <Text component="span" fw={700}>
                a million dollars.
              </Text>
            </Text>
            <Text size="xl" mt="xl" style={{ textAlign: 'center' }}>
              It's just a piece of paper, it's around <b>0.1mm</b> thick. About
              the width of 2 human hairs.
            </Text>
            <Text size="xl" mt="xl" style={{ textAlign: 'center' }}>
              Now, imagine stacking the checks on top of each other.
            </Text>
          </section>
          <section className="text-container" ref={updateSectionRefs} id="4">
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              Keep stacking those million dollar checks...
            </Text>
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              Until you have the net worth of the world's richest man{' '}
              <Text component="span" fw={700}>
                Elon Musk:
              </Text>
            </Text>
            <Text
              size={'3rem'}
              my="xl"
              fw={800}
              style={{ textAlign: 'center' }}
            >
              $320 Billion
            </Text>
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              It'll reach the height of a <b>10-story</b> building.
            </Text>
          </section>
          <section className="text-container" ref={updateSectionRefs} id="5">
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              <b>To put this in perspective:</b> If you jump off this stack of 1
              million dollar checks... You will most definitely{' '}
              <Text component="span" c="red" fw={700}>
                die
              </Text>{' '}
              if you try.
            </Text>
            <Text size="xl" mt="md" style={{ textAlign: 'center' }}>
              If you somehow made a <b>$1 million per hour</b>, it'll take you
              more than a <b>century</b> to make as much as Elon Musk.
            </Text>
          </section>
        </div>

        <div
          className="right"
          style={{
            transform: shouldExitRight ? 'translateX(100%)' : 'translateX(0)',
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div className="graph-container">
            {sectionNumber === 0 && (
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '2rem',
                  fontSize: '4rem',
                  margin: '2rem 0',
                }}
              >
                <Text size="2rem" fw={700} component="span" c="red">
                  ☕ $10
                </Text>
                <Text size="2rem" fw={700} component="span" c="green">
                  ☕ $3
                </Text>
              </Box>
            )}
            {sectionNumber === 1 && (
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: '2rem',
                  fontSize: '4rem',
                  margin: '2rem 0',
                }}
              >
                <Text size="2rem" fw={700} component="span">
                  💵 $1,000
                </Text>
                <Text size="2rem" fw={700} component="span">
                  💰 $1,000,000
                </Text>
                <Text size="2rem" fw={700} component="span">
                  🏦 $1,000,000,000
                </Text>
              </Box>
            )}
            {sectionNumber === 2 && (
              <Text size="xl" style={{ textAlign: 'center' }}>
                Text
              </Text>
            )}
            {sectionNumber === 3 && (
              <motion.div
                initial={{ rotateX: -90, opacity: 0 }}
                whileInView={{
                  rotateX: 0,
                  opacity: 1,
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 1.4,
                  type: 'spring',
                  rotate: {
                    repeat: Infinity,
                    duration: 1.4,
                    ease: 'easeInOut',
                  },
                }}
                viewport={{ once: true }}
              >
                <Card
                  mt="md"
                  my="xl"
                  padding="xl"
                  radius="md"
                  withBorder
                  w="30vw"
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
              </motion.div>
            )}
            {sectionNumber === 4 && (
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
                    transform:
                      'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {[...Array(100)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.05, duration: 1 }}
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
            )}
            {sectionNumber === 5 && (
              <Box
                style={{
                  position: 'relative',
                  height: '400px',
                  width: '100%',
                }}
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
                    bottom: '300px',
                    width: '20px',
                    height: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {/* Head */}
                  <Box
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#000',
                    }}
                  />
                  {/* Body */}
                  <Box
                    style={{
                      width: '2px',
                      height: '14px',
                      backgroundColor: '#000',
                    }}
                  />
                  {/* Arms */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: '12px',
                      width: '16px',
                      height: '2px',
                      backgroundColor: '#000',
                    }}
                  />
                  {/* Legs */}
                  <Box
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      width: '12px',
                      height: '8px',
                      borderBottom: '2px solid #000',
                      borderLeft: '2px solid #000',
                      borderRight: '2px solid #000',
                      transform: 'rotate(180deg)',
                    }}
                  />
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
            )}
            {sectionNumber === 6 && (
              <Card m="xl" shadow="sm" radius="md" withBorder>
                <Text
                  fw={700}
                  size="xl"
                  mt="sm"
                  style={{ textAlign: 'center' }}
                >
                  Try it yourself!
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
                  <Text style={{ textAlign: 'center' }}>
                    {totalEarned >= 320_000_000_000 ? (
                      <Text c="green" component="span">
                        Congratulations! You're now richer than Elon Musk! ↑
                      </Text>
                    ) : (
                      <Text c="red" component="span">
                        ↓ You're still poorer than Elon Musk...
                      </Text>
                    )}
                  </Text>
                  <Text
                    size={'2rem'}
                    fw={700}
                    my="md"
                    style={{ textAlign: 'center' }}
                  >
                    Total earned: ${totalEarned.toLocaleString()}
                  </Text>
                </Box>

                <Center>
                  <Button w="20%" onClick={addMillion} color="green">
                    Add $1,000,000
                  </Button>
                </Center>
                <Blockquote mt="md" p="md">
                  * This is a demo. No money will be transferred.
                </Blockquote>
              </Card>
            )}
          </div>
        </div>
      </Container>

      {/* <Text size="xl" mt="xl" style={{ textAlign: 'center' }}>
        To make it even clearer, let's see how you would spend Elon Musk's net
        worth.
      </Text>
      <SpendPage /> */}
    </>
  );
}
