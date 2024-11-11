'use client';

import { Container, Box, Card } from '@mantine/core';
import Personal from '../components/Personal';
import Portfolio from '../components/Portfolio';
import Pin from '../components/Pins';

export default function Home() {
  return (
    <Box
      style={{
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
        backgroundImage: 'radial-gradient(#b0b0b0 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <Container py="xl" style={{ position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <Pin top="-10px" right="20px" color="#ff4444" />
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
          <Pin top="15px" left="250px" color="#ff4444" />
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
            <Portfolio />
          </Card>
        </div>
      </Container>
    </Box>
  );
}
