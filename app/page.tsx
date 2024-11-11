'use client';

import { Container, Card } from '@mantine/core';
import Personal from '../components/Personal';
import Pin from '../components/Pins';
import HoverLink from '../components/HoverLink';

export default function Home() {
  return (
    <>
      {/* <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          fontSize: '100px',
        }}
      >
        <span
          role="img"
          aria-label="hammer"
          style={{ left: '20px', transform: 'rotate(40deg)' }}
        >
          🔨
        </span>
        <span
          role="img"
          aria-label="wrench"
          style={{ right: '50px', transform: 'rotate(55deg)' }}
        >
          🔧
        </span>
        <span
          role="img"
          aria-label="screwdriver"
          style={{ left: '20px', transform: 'rotate(30deg)' }}
        >
          🪛
        </span>
      </div> */}

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
          <Pin top="10px" left="200px" color="#4444ff" />
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
    </>
  );
}
