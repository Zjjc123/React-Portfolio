'use client';

import { Container, Card } from '@mantine/core';
import Personal from '../components/Personal';
import Pin from '../components/Pins';
import HoverLink from '../components/HoverLink';

export default function Home() {
  const paperBackground = {
    background: `
      repeating-linear-gradient(transparent, transparent 19px, #f8f8f8 19px, #f8f8f8 20px),
      repeating-linear-gradient(90deg, transparent, transparent 19px, #f8f8f8 19px, #f8f8f8 20px),
      linear-gradient(#ffffff, #fcfcfc)
    `,
    backgroundSize: '100% 100%, 20px 20px, 20px 20px',
  };

  return (
    <>
      <Container py="xl" style={{ position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <Pin top="-10px" right="100px" color="#ff4444" />
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
        </div>

        <div style={{ position: 'relative' }}>
          <Pin top="10px" left="200px" color="#4444ff" />
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
        </div>

        <div style={{ position: 'relative' }}>
          <Pin top="10px" left="150px" color="#44ff44" />
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
        </div>
      </Container>
    </>
  );
}
