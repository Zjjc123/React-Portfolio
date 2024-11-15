'use client';

import {
  Box,
  Card,
  Center,
  Text,
  Button,
  Blockquote,
  Container,
} from '@mantine/core';
import { BackButton } from '../../../components/BackButton';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SpendPage from './spend';
import { CoffeeComparison } from './components/CoffeeComparison';
import { MoneyScale } from './components/MoneyScale';
import { MillionDollarCheck } from './components/check';
import { CheckStack } from './components/CheckStack';
import { Person } from './components/Person';

const textContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  textAlign: 'center',
  margin: 'auto 0',
} as const;

export default function StoriesPage() {
  const [totalEarned, setTotalEarned] = useState(0);
  const [floatingNumbers, setFloatingNumbers] = useState<number[]>([]);

  const [sectionNumber, setSectionNumber] = useState(0);
  const [intersectingSections, setIntersectingSections] = useState<number[]>(
    [],
  );
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const [allSectionsPassed, setAllSectionsPassed] = useState(false);

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

        const allPassed = newIntersectingSections.length === 0;
        setAllSectionsPassed(allPassed);
        setIntersectingSections(newIntersectingSections);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
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

  const updateSectionRefs = (ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current = [...sectionRefs.current, ref];
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
      <BackButton
        style={{ position: 'fixed', top: 10, left: 0 }}
        href="/stories"
      />
      <Container bg="white" style={{ minHeight: '100vh' }}>
        <div
          className={allSectionsPassed ? 'full-width' : ''}
          style={{
            float: 'left',
            top: 0,
            width: '30%',
          }}
        >
          <section ref={updateSectionRefs} id="0" style={textContainer}>
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              Most of the time, we think we have a good understanding of money.
              In 2024, a 10 dollar coffee would be outrageous and a 3 dollar
              coffee would seem like a good deal.
            </Text>
          </section>
          <section ref={updateSectionRefs} id="1" style={textContainer}>
            <Text size="xl" my={500} style={{ textAlign: 'center' }}>
              We have a very good understanding of the value of money in our
              daily lives.
            </Text>
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              But when we think about money in terms of tens, hundreds, or even
              thousands of million dollars, we start to lose our sense of scale.
            </Text>
          </section>
          <section ref={updateSectionRefs} id="2" style={textContainer}>
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              But when it comes to the net worth of the world's richest people,
              we think we understand it.
            </Text>
            <Text size="xl" fw={700} mb="md" style={{ textAlign: 'center' }}>
              Do we really?
            </Text>
          </section>
          <section ref={updateSectionRefs} id="3" style={textContainer}>
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
          <section ref={updateSectionRefs} id="4" style={textContainer}>
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
          <section
            ref={updateSectionRefs}
            id="5"
            style={{ ...textContainer, paddingBottom: '200px' }}
          >
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              <b>To put this in perspective:</b> If you jump off this stack of 1
              million dollar checks... You will most definitely{' '}
              <Text component="span" c="red" fw={700}>
                die
              </Text>{' '}
              if you try.
            </Text>

            <Blockquote mt="md" p="md" color="red">
              Try dragging and releasing the person to see what happens...
            </Blockquote>
            {/* <Text size="xl" mt="md" style={{ textAlign: 'center' }}>
              If you somehow made a <b>$1 million per hour</b>, it'll take you
              more than a <b>century</b> to make as much as Elon Musk.
            </Text> */}
          </section>

          <Container
            style={{
              width: '100vw',
              position: 'relative',
            }}
            mt={150}
          >
            <Text size="xl" mt="xl" style={{ textAlign: 'center' }}>
              To make it even clearer, let's see how you would spend Elon Musk's
              net worth.
            </Text>

            <SpendPage />
          </Container>
        </div>

        <div
          className="right"
          style={{
            position: 'fixed',
            float: 'right',
            top: 0,
            left: '30%',
            width: '70%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
            opacity: allSectionsPassed ? '0' : '1',
            pointerEvents: allSectionsPassed ? 'none' : 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              padding: '2rem',
            }}
          >
            {sectionNumber === 0 && <CoffeeComparison />}
            {sectionNumber === 1 && <MoneyScale />}
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
                <MillionDollarCheck />
              </motion.div>
            )}
            {sectionNumber === 4 && <CheckStack />}
            {sectionNumber === 5 && (
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
                  backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,0.1) 100%)',
                }}
              />
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
    </>
  );
}
