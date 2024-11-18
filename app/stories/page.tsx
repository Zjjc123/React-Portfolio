'use client';
import { Card, Container } from '@mantine/core';
import HoverLink from '../../components/HoverLink';
import { BackButton } from '../../components/BackButton';

export default function StoriesPage() {
  return (
    <Container py="xl">
      <BackButton href="/" />
      <Card shadow="sm" radius="md" withBorder>
        <HoverLink
          href="/stories/wealth-disparity"
          text="💰 How rich is the top 1% exactly...?"
        />
      </Card>
    </Container>
  );
}
