'use client';

import { Text, Blockquote, Container } from '@mantine/core';
import { BackButton } from '../../../components/BackButton';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpendPage from './spend';
import { CoffeeComparison } from './components/CoffeeComparison';
import { MoneyScale } from './components/MoneyScale';
import { MillionDollarCheck } from './components/Check';
import { CheckStack } from './components/CheckStack';
import { SenseOfScale } from './components/SenseOfScale';
import MoneyClicker from './components/MoneyClicker';
import Building from './components/Building';
import { IconChevronDown } from '@tabler/icons-react';

const textContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  textAlign: 'center',
  padding: '0 1rem',
} as const;

const lastSectionId = 6;

export default function StoriesPage() {
  const [sectionNumber, setSectionNumber] = useState(0);
  const [intersectingSections, setIntersectingSections] = useState<number[]>(
    [],
  );
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const [allSectionsPassed, setAllSectionsPassed] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxIntersectingSection = -1;
        let maxIntersectingRatio = 0;
        let newIntersectingSections: number[] = [];

        entries.forEach((entry) => {
          const sectionId = parseInt(entry.target.id);
          if (entry.isIntersecting) {
            newIntersectingSections.push(sectionId);
            if (entry.intersectionRatio > maxIntersectingRatio) {
              maxIntersectingSection = sectionId;
              maxIntersectingRatio = entry.intersectionRatio;
            }
          }
        });

        if (newIntersectingSections.length > 0) {
          setIntersectingSections(newIntersectingSections);
        } else {
          setIntersectingSections([sectionNumber]);
        }

        const allPassed = !newIntersectingSections.some(
          (id) => id <= lastSectionId,
        );
        setAllSectionsPassed(allPassed);
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
  }, [sectionNumber]);

  useEffect(() => {
    if (intersectingSections.length > 0) {
      setSectionNumber(intersectingSections[0]);
    }
  }, [intersectingSections]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsAtStart(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateSectionRefs = (ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current = [...sectionRefs.current, ref];
    }
  };

  return (
    <>
      <BackButton href="/stories" />
      <Container bg="white" style={{ minHeight: '100vh' }}>
        <Text size="2.5rem" fw={700} ta="center" mt={100} mb={0}>
          Understanding: Wealth Disparity
        </Text>
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
              Most of the time, we think we have a{' '}
              <Text component="span" fw={700}>
                good understanding
              </Text>{' '}
              of money.
              <br />
              <br />
              In 2024, a $10 coffee would be pretty expensive, but a $2 coffee
              would seem like a good deal.
              <br />
              <br />
              <Blockquote p="md">
                Click the coffee cup to the right to fill it up.
              </Blockquote>
            </Text>
          </section>
          <section ref={updateSectionRefs} id="1" style={textContainer}>
            <Text size="xl" my={500} style={{ textAlign: 'center' }}>
              We understand the difference between <b>$100</b> and <b>$1,000</b>{' '}
              dollars.
            </Text>
          </section>
          <section ref={updateSectionRefs} id="2" style={textContainer}>
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              But when we think about money in terms of <b>millions</b> or{' '}
              <b>billions</b>, we start to lose our sense of scale.
              <br />
              <br />
              Even if we think we understand it.
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
          </section>
          <section ref={updateSectionRefs} id="4" style={textContainer}>
            <Text size="xl" mt="xl" style={{ textAlign: 'center' }}>
              Now, imagine stacking the checks on top of each other.
            </Text>
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
          </section>
          <section
            ref={updateSectionRefs}
            id="5"
            style={{ ...textContainer, paddingBottom: '200px' }}
          >
            <Text size="xl" mb="md" style={{ textAlign: 'center' }}>
              It'll reach the height of a <b>10-story</b> building.
            </Text>

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
          </section>
          <section ref={updateSectionRefs} id="6" style={textContainer}>
            <Text size="xl" mt="md" style={{ textAlign: 'center' }}>
              If you somehow made a <b>$1 million per hour</b>, it'll take you
              more than a <b>century</b> to make as much as Elon Musk.
            </Text>
          </section>

          <Container
            style={{
              width: '100vw',
              position: 'relative',
            }}
            my={150}
          >
            <Text size="xl" mt="xl" fw={600} style={{ textAlign: 'center' }}>
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
            {sectionNumber === 2 && <SenseOfScale />}
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
            {sectionNumber === 5 && <Building />}
            {sectionNumber === 6 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
              >
                <MoneyClicker />
              </motion.div>
            )}
          </div>
        </div>
      </Container>
      <AnimatePresence mode="wait">
        {isAtStart && (
          <motion.div
            style={{
              position: 'fixed',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
            }}
            initial={{ opacity: 1, y: 0 }}
            animate={{ 
              opacity: 1, 
              y: [0, 10, 0] 
            }}
            exit={{ 
              opacity: 0,
              y: -10 
            }}
            transition={{
              y: {
                duration: 1,
                repeat: isAtStart ? Infinity : 0
              },
              exit: { duration: 0.2 }
            }}
          >
            <IconChevronDown size={32} color="#333" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
