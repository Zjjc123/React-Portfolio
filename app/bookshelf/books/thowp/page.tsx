'use client';

import { Container, Title, Text, Space } from '@mantine/core';
import { BackButton } from '../../../../components/BackButton';

export default function THoWPPage() {
  return (
    <>
      <BackButton href="/bookshelf" />
      <Container size="lg" py="xl">
        <Title order={1}>The History of Western Philosophy</Title>
        <Text size="lg">By Bertrand Russell</Text>
        <Space h="xl" />
        <Title order={2}>Book One: Ancient Philosophy</Title>
        <Space h="lg" />
        <Title order={3}>The Presocratics</Title>
        <Space h="md" />
        <Title order={4}>Milesian School</Title>
        <Text>
          <b>Thales</b> of the Milesian School, is often considered the first
          philosopher. Russell argues that &quot;There is, however, ample reason
          to feel respect for Thales&quot;.
        </Text>
        <Text>
          even if the statement <i>Everything is made of water</i> is quite
          discourgaging to beginner.
        </Text>
        <Text>
          More as a man of science than a philosopher in the modern sense,
          Thales predicted an eclipse of the sun.
        </Text>
        <Text>
          <b>Anaximander</b> according to Russell, was both &quot;scientific and
          rationalistic&quot;, arguing that the primal substance could not be
          water because &quot;it would conquer the others&quot;.
        </Text>
        <Text>
          <b>Anaximenes</b> Thought that &quot;the earth is shaped a round
          table&quot;, and had an important Important influence on{' '}
          <b>Pythagoras</b>
        </Text>
        <Space h="md" />
        <Title order={4}>Pythagoras</Title>
        <Text>
          Russell considered <b>Pythagoras</b> to a &quot;religious
          prophet&quot; and a &quot;pure mathematician&quot;. Quoting Pythagoras
          for saying &quot;all things are numbers&quot;, which sounds like
          nonsense, Russell explains that it refers to importance of numbers in
          music or geometry.
        </Text>
        <Text>
          He was also a very curious man as the first rule of the Pythagorean
          order was to &quot;obstain from beans&quot;.
        </Text>
        <Text>
          The greatest discovery being proposition about right-angled triangles,
          which &quot;lead at once to the discovery of incommensurables&quot;.
        </Text>

        <Space h="md" />
        <Title order={3}>Heraclitus</Title>
      </Container>
    </>
  );
}
