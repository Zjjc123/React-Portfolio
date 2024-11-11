'use client';
import { Card, Container, Text } from '@mantine/core';
import { BackButton } from '../../../components/BackButton';

export default function StoriesPage() {
  return (
    <Container>
      <BackButton href="/stories" />
      <Card shadow="sm" radius="md" withBorder>
        <Text>Elon</Text>
      </Card>
    </Container>
  );
}
