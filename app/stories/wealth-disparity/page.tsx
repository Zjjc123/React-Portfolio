'use client';

import {
  Text,
  Blockquote,
  Container,
  Box,
  Card,
  Flex,
  NumberInput,
} from '@mantine/core';
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
import { WealthDisparityPieChart } from './components/WealthDisparityGraph';
import { WealthDistributionQuintiles } from './components/WealthDistributionQuintiles';

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

const calculateWealthTax = (netWorth: number) => {
  if (netWorth < 50000000) return 0;

  let tax = 0;
  if (netWorth > 1000000000) {
    // 2% on wealth between 50M and 1B
    tax += (1000000000 - 50000000) * 0.02;
    // 3% on wealth above 1B
    tax += (netWorth - 1000000000) * 0.03;
  } else {
    // 2% on wealth above 50M
    tax += (netWorth - 50000000) * 0.02;
  }
  return tax;
};

export default function StoriesPage() {
  const [sectionNumber, setSectionNumber] = useState(0);
  const [intersectingSections, setIntersectingSections] = useState<number[]>(
    [],
  );
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const [allSectionsPassed, setAllSectionsPassed] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  const [netWorth, setNetWorth] = useState(0);

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
        <Text size="3rem" fw={400} ta="center" mt={100} mb={0}>
          The{' '}
          <Text component="span" fw={700}>
            Wealth Disparity
          </Text>{' '}
          Gap
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
                That is a big problem.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Text
                size={'5rem'}
                fw={700}
                mx="auto"
                w="60%"
                ta="center"
                mb={200}
              >
                Solution?
              </Text>
            </motion.div>

            <Text size={'3rem'} fw={700} mx="auto" w="60%" ta="center" my={200}>
              A good approach would be to create a{' '}
              <Text component="span" fw={700} c="blue.6">
                wealth tax.
              </Text>
            </Text>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Text
                size={'2rem'}
                fw={700}
                mx="auto"
                w="60%"
                ta="center"
                mb="xl"
              >
                Here's how it works:
              </Text>

              <Container w="60%" mx="auto" mb={100}>
                <Card withBorder p="xl">
                  <Flex direction="column" gap="lg">
                    <Box>
                      <Text size="lg" fw={600} mb="xs">
                        For wealth under $50 million:
                      </Text>
                      <Text size="xl" c="dimmed">
                        Tax Rate:{' '}
                        <Text component="span" fw={700} c="green.6">
                          0%
                        </Text>
                      </Text>
                    </Box>

                    <Box>
                      <Text size="lg" fw={600} mb="xs">
                        For wealth between $50 million and $1 billion:
                      </Text>
                      <Text size="xl" c="dimmed">
                        Tax Rate:{' '}
                        <Text component="span" fw={700} c="green.6">
                          2%
                        </Text>
                      </Text>
                    </Box>

                    <Box>
                      <Text size="lg" fw={600} mb="xs">
                        For wealth over $1 billion:
                      </Text>
                      <Text size="xl" c="dimmed">
                        Tax Rate:{' '}
                        <Text component="span" fw={700} c="green.6">
                          3%
                        </Text>
                      </Text>
                    </Box>
                  </Flex>
                </Card>
                <Text size="sm" c="dimmed" ta="center" mt="md">
                  Source:{' '}
                  <a href="https://elizabethwarren.com/plans/ultra-millionaire-tax">
                    Elizabeth Warren's Ultra Millionaire Tax
                  </a>
                </Text>
              </Container>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ marginBottom: '200px', marginTop: '200px' }}
            >
              <Text
                size={'1.5rem'}
                mx="auto"
                w="60%"
                ta="center"
                my="md"
                fw={500}
              >
                Now you might ask,{' '}
              </Text>
              <Text size={'2rem'} mx="auto" w="60%" ta="center" fw={700}>
                Are we going to start{' '}
                <Text component="span" fw={700} c="red">
                  re-distributing
                </Text>{' '}
                wealth???
              </Text>
              <Text
                size={'1.5rem'}
                mx="auto"
                w="60%"
                ta="center"
                my={50}
                fw={500}
              >
                or
              </Text>

              <Text size={'2rem'} mx="auto" w="60%" ta="center" fw={700}>
                Why are we{' '}
                <Text component="span" fw={700} c="red">
                  punishing
                </Text>{' '}
                people who are smart with money???
              </Text>
            </motion.div>

            <motion.div>
              <Text
                size={'2rem'}
                fw={700}
                mx="auto"
                w="60%"
                ta="center"
                mb={200}
              >
                Not quite...
              </Text>
            </motion.div>

            <Text size={'2rem'} mx="auto" w="60%" ta="center" my={200}>
              Under Elizabeth Warren's Wealth Tax proposal, a billionaire worth{' '}
              <Text component="span" fw={700}>
                $10 billion dollars
              </Text>{' '}
              would pay only{' '}
              <Text component="span" fw={700} c="orange.6">
                $289 million dollars.
              </Text>{' '}
            </Text>

            <Text size={'2rem'} mx="auto" w="60%" ta="center" mt={150}>
              Yes it's "ONLY" <b>$289 million dollars</b> because in the context
              of an average American of net wealth <b>$192,200</b>, that's less
              than <b>$6,000</b> dollars a year.
            </Text>

            <Text size={'2rem'} mx="auto" w="60%" ta="center" my={50}>
              The median income American pays around <b>$18,000</b> a year in
              taxes.
            </Text>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Container w="60%" mx="auto" mb={100}>
                <Card withBorder p="xl">
                  <Text size="xl" fw={700} mb={100} ta="center">
                    Effective Tax Rate
                  </Text>
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      height: '300px',
                      gap: '40px',
                      justifyContent: 'center',
                    }}
                  >
                    <Box style={{ textAlign: 'center' }}>
                      <Box
                        style={{
                          width: '120px',
                          background: '#228BE6',
                          height: '100px',
                          marginBottom: '12px',
                        }}
                      />
                      <Text size="sm" fw={500}>
                        Billionaire
                      </Text>
                      <Text size="sm" c="dimmed">
                        2.9%
                      </Text>
                    </Box>
                    <Box style={{ textAlign: 'center' }}>
                      <Box
                        style={{
                          width: '120px',
                          background: '#FA5252',
                          height: '300px',
                          marginBottom: '12px',
                        }}
                      />
                      <Text size="sm" fw={500}>
                        Median American
                      </Text>
                      <Text size="sm" c="dimmed">
                        9.4%
                      </Text>
                    </Box>
                  </Box>
                </Card>
              </Container>
            </motion.div>

            <Text size={'2rem'} mx="auto" w="60%" ta="center" my={50}>
              That is <b>3 times</b> more in terms of relative wealth than the
              average billionaire pays.
            </Text>

            <Text size={'2rem'} mx="auto" w="60%" ta="center" mt={300}>
              While the rich will stay rich, the money from this tax program
              will generate{' '}
              <Text component="span" fw={700} c="green.6">
                200 billion dollars
              </Text>{' '}
              a year to fund public services.
            </Text>

            <Text size={'2rem'} mx="auto" w="60%" ta="center" mt={100}>
              While not taking a penny from more than{' '}
              <Text component="span" fw={700} c="red.6">
                99.9% of Americans.
              </Text>
            </Text>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Text size="2rem" fw={700} mx="auto" w="60%" ta="center" mt={200}>
                Try it yourself:
              </Text>

              <Container w="60%" mx="auto" mt={50} mb={200}>
                <Card withBorder p="xl">
                  <Text size="2rem" mb="lg">
                    Wealth Tax Calculator
                  </Text>

                  <NumberInput
                    label="Enter your net worth"
                    placeholder="Enter amount in dollars"
                    value={netWorth}
                    onChange={(value) => {
                      const numValue =
                        typeof value === 'string'
                          ? parseFloat(value.replace(/\$\s?|(,*)/g, ''))
                          : value;
                      setNetWorth(numValue || 0);
                    }}
                    size="lg"
                    mb="md"
                  />
                  <Text size="sm" c="dimmed">
                    (Your net worth)
                  </Text>

                  <Text size="xl" fw={700} mb="md">
                    {netWorth >= 1000000000
                      ? `$${(netWorth / 1000000000).toFixed(2)} billion`
                      : netWorth >= 1000000
                        ? `$${(netWorth / 1000000).toFixed(2)} million`
                        : `$${netWorth.toLocaleString()}`}
                  </Text>

                  <Card withBorder>
                    <Text size="lg" fw={600} mb="xs">
                      Your annual wealth tax would be:
                    </Text>
                    <Text size="xl" c={netWorth >= 50000000 ? 'red' : 'green'}>
                      {netWorth < 50000000
                        ? '$0'
                        : `$${calculateWealthTax(netWorth).toLocaleString(
                            undefined,
                            {
                              maximumFractionDigits: 0,
                            },
                          )}`}
                    </Text>

                    <Text size="sm" c="dimmed" mt="md">
                      {netWorth < 50000000
                        ? 'You are not affected by the wealth tax!'
                        : netWorth > 1000000000
                          ? 'This represents a 2% tax on wealth between $50M and $1B, and 3% on wealth above $1B'
                          : 'This represents a 2% tax on your wealth above $50 million'}
                    </Text>
                  </Card>
                </Card>
              </Container>
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
