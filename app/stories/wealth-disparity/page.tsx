'use client';

import { Text, Blockquote, Container, Box, Group, Stack } from '@mantine/core';
import { BackButton } from '../../../components/BackButton';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import SpendPage from './spend';
import { CoffeeComparison } from './components/CoffeeComparison';
import { MoneyScale } from './components/MoneyScale';
import { MillionDollarCheck } from './components/Check';
import { CheckStack } from './components/CheckStack';
import { SenseOfScale } from './components/SenseOfScale';
import MoneyClicker from './components/MoneyClicker';
import Building from './components/Building';
import { IconChevronDown } from '@tabler/icons-react';
import {
  WealthDisparityGraph2,
  WealthDisparityPieChart,
} from './components/WealthDisparityGraph';
import { WealthDistributionQuintiles } from './components/WealthDistributionQuintiles';
import { BarChart } from '@mantine/charts';

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

const data2 = {
  top20: 57,
  second20: 20,
  third20: 12,
  fourth20: 7,
  bottom20: 4,
};

const data3 = {
  top20: 83,
  second20: 11,
  third20: 5.5,
  fourth20: 0.4,
  bottom20: 0.1,
};

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
            <Text
              w="60%"
              size={'2rem'}
              mb={100}
              mx="auto"
              fw={700}
              style={{ textAlign: 'center' }}
            >
              Let's see how you would spend Elon Musk's net worth.
            </Text>

            <SpendPage />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Text
                w="70%"
                size={'2rem'}
                mx="auto"
                my={200}
                fw={600}
                style={{
                  textAlign: 'center',
                  background:
                    'linear-gradient(90deg, #000000 0%, #444444 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                But to really understand the problem, we have to look at the
                growing wealth disparity in the United States.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ marginBottom: '200px' }}
            >
              <Text size="xl" fw={700} mx="auto" w="60%" ta="center">
                In 2012, this was what Americans think the wealth distribution{' '}
                <Text component="span" size={'2rem'} fw={700}>
                  SHOULD
                </Text>{' '}
                look like.
              </Text>
              <WealthDistributionQuintiles />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ marginBottom: '200px' }}
            >
              <Text size="xl" fw={700} mx="auto" w="60%" ta="center">
                This was what Americans{' '}
                <Text component="span" size={'2rem'} fw={700}>
                  THINK
                </Text>{' '}
                the wealth distribution looks like.
              </Text>
              <WealthDistributionQuintiles data={data2} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ marginBottom: '200px' }}
            >
              <Text size="xl" fw={700} mx="auto" w="60%" ta="center">
                This was what the wealth distribution{' '}
                <Text component="span" size={'2rem'} fw={700}>
                  ACTUALLY
                </Text>{' '}
                looks like.
              </Text>
              <WealthDistributionQuintiles data={data3} />
              <Text size="xs" c="dimmed" ta="center" mt="md">
                Source:{' '}
                <a href="https://www.hbs.edu/ris/Publication%20Files/Norton_Michael_Building%20a%20better%20America%20One%20wealth%20quintile%20at%20a%20time_4c575dff-fe1d-4002-b61a-1227d08b71be.pdf">
                  Norton & Ariely (2011). Building a Better America—One Wealth
                  Quintile at a Time
                </a>
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Text
                w="60%"
                size={'1.5rem'}
                my={100}
                mx="auto"
                fw={400}
                style={{ textAlign: 'center' }}
              >
                As of 2024, the{' '}
                <Text component="span" fw={700}>
                  top 10%
                </Text>{' '}
                of the population now owns{' '}
                <Text component="span" fw={700}>
                  62%
                </Text>{' '}
                of the wealth in the United States.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Text
                w="60%"
                size={'1.5rem'}
                my={100}
                mx="auto"
                fw={400}
                style={{ textAlign: 'center' }}
              >
                While the{' '}
                <Text component="span" fw={700}>
                  bottom 50%
                </Text>{' '}
                of the population owns only{' '}
                <Text component="span" fw={700}>
                  6%
                </Text>{' '}
                of the wealth in the United States.
              </Text>
            </motion.div>

            <WealthDisparityPieChart />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Text
                w="60%"
                size={'2rem'}
                my={100}
                mx="auto"
                fw={500}
                style={{ textAlign: 'center' }}
              >
                That's not even the craziest part.
              </Text>

              <Text size={'3rem'} fw={400} mx="auto" w="60%" ta="center">
                The combined networth of the top 400 Americans (5.4 trillion) is{' '}
                <Text component="span" fw={700} size={'3rem'}>
                  42%
                </Text>{' '}
                greater than the networth of the bottom half of the entire
                United States population (3.8 trillion).
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Text
                size={'3rem'}
                fw={900}
                mx="auto"
                w="60%"
                ta="center"
                py={250}
              >
                That is the problem.
              </Text>
            </motion.div>
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
              y: [0, 10, 0],
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              y: {
                duration: 1,
                repeat: isAtStart ? Infinity : 0,
              },
              exit: { duration: 0.2 },
            }}
          >
            <IconChevronDown size={32} color="#333" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
