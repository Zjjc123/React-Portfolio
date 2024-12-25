'use client';

import { Container, Title, Text, List } from '@mantine/core';
import { BackButton } from '../../../../components/BackButton';

export default function THoWPPage() {
  return (
    <>
      <BackButton href="/bookshelf" />
      <Container size="lg" py="xl">
        <Title order={1}>The History of Western Philosophy</Title>
        <Text size="lg">By Bertrand Russell</Text>

        <Title order={2}>Overview</Title>
        <Text>
          First published in 1945, The History of Western Philosophy is a
          comprehensive examination of the development of philosophical thought
          from ancient Greece to the modern era.
        </Text>

        <Title order={2}>Key Themes</Title>
        <List>
          <List.Item>
            The evolution of philosophical thought through different historical
            periods
          </List.Item>
          <List.Item>
            The relationship between philosophy and social/political conditions
          </List.Item>
          <List.Item>
            Major philosophical systems and their interconnections
          </List.Item>
        </List>
      </Container>
    </>
  );
}
