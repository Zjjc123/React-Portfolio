'use client';
import { Button, Card, Container } from '@mantine/core';
import Link from 'next/link';
import HoverLink from '../../components/HoverLink';

export default function StoriesPage() {
  return (
    <Container>
      <Button component={Link} href="/" variant="outline" color="dark" mb="xl">
        Back
      </Button>
      <Card shadow="sm" radius="md" withBorder>
        <HoverLink
          href="/stories/elon-money"
          text="💰 How much money does Elon Musk have?"
        />
      </Card>
    </Container>
  );
}
