'use client';

import { Container, Card } from '@mantine/core';
import Personal from '../components/Personal';
import Pin from '../components/Pins';
import HoverLink from '../components/HoverLink';

export default function Home() {
  return (
    <Container py="xl" style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <Pin top="-10px" right="100px" color="#ff4444" />
        <Card
          shadow="sm"
          radius="md"
          withBorder
          style={{
            transform: 'rotate(-3deg)',
            marginBottom: '4rem',
          }}
        >
          <Personal />
        </Card>
      </div>
      <div style={{ position: 'relative' }}>
        <Pin top="10px" right="400px" color="#4444ff" />
        <Card
          shadow="sm"
          radius="md"
          withBorder
          style={{
            marginBottom: '4rem',
            marginLeft: '4rem',
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
            transform: 'rotate(2deg)',
            marginLeft: '2rem',
            paddingTop: '4rem',
          }}
        >
          <HoverLink href="/videos" text="VIDEOS" />
        </Card>
      </div>
    </Container>
  );
}
