'use client';
import { Card, Container } from '@mantine/core';
import HoverLink from '../../components/HoverLink';
import { BackButton } from '../../components/BackButton';

export default function StoriesPage() {
  return (
    <Container>
      <BackButton href="/" />
      <Card shadow="sm" radius="md" withBorder>
        <HoverLink
          href="/stories/elon-money"
          text="💰 How much money does Elon Musk have?"
        />
      </Card>
    </Container>
  );
}
