'use client';

import { Container } from '@mantine/core';
import Personal from '../components/Personal';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <Container my="xl">
      <Personal />
      <Portfolio />
    </Container>
  );
}
