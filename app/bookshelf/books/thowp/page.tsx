'use client';

import { Container, Title, Text, Space, List } from '@mantine/core';
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
        <Title order={3}>Part I: The Presocratics</Title>
        <Space h="md" />
        <Title order={4}>Milesian School</Title>
        <Text>
          <b>Thales</b> of the Milesian School, is often considered the first
          philosopher. Russell argues that &quot;there is, however, ample reason
          to feel respect for Thales&quot;.
        </Text>
        <Text>
          even if his argument <i>everything is made of water</i> is quite
          discouraging to philosophy beginners.
        </Text>
        <Text>
          Considered more as a man of science than a philosopher in the modern
          sense, Thales, for example, predicted a solar eclipse.
        </Text>
        <Text>
          <b>Anaximander</b> according to Russell, was both &quot;scientific
          rationalistic&quot;, arguing that the primal substance could not be
          water because &quot;it would conquer the others&quot;.
        </Text>
        <Text>
          <b>Anaximenes</b> Thought that &quot;the earth is shaped a round
          table&quot;, and had an important influence on <b>Pythagoras</b>
        </Text>
        <Space h="md" />
        <Title order={4}>Pythagoras</Title>
        <Text>
          Russell considered <b>Pythagoras</b> to be a &quot;religious
          prophet&quot; and a &quot;pure mathematician&quot;. Pythagoras said
          &quot;all things are numbers&quot;, which sounds like nonsense.
          Russell goes on to explain that the statement refers to importance of
          numbers in music or geometry, and not just in the sense of counting.
        </Text>
        <Text>
          Pythagoras&apos; greatest discovery is a proposition about
          right-angled triangles, which &quot;lead at once to the discovery of
          incommensurables&quot;.
        </Text>

        <Space h="md" />
        <Title order={4}>Heraclitus</Title>
        <Text>
          <b>Heraclitus</b> is most famous for his assertion that
          &quot;everything is in a state of flux&quot;. Russell emphasizes this
          idea as central to Heraclitus&apos;s metaphysics, where change and
          transformation are the fundamental truths of existence.
        </Text>
        <Text>
          Heraclitus proposed that the unity of the world arises from the
          harmony of opposites.
        </Text>
        <Text>
          Heraclitus believed in a kind of cosmic justice or order that governs
          the balance of opposites
        </Text>

        <Space h="md" />
        <Title order={4}>Parmenides</Title>
        <Text>
          Unlike Heraclitus, <b>Parmenides</b> retorted that nothing changes.
        </Text>
        <Text>
          The first argument from thoughts and language to the world at large:
        </Text>
        <Text>
          The essence of this argument is:
          <List>
            <List.Item>When you think, you think of something</List.Item>
            <List.Item>
              when you use a name, it must be the name of something
            </List.Item>
            <List.Item>
              Therefore both thought and language require objects outside
              themselves
            </List.Item>
            <List.Item>
              Consequently there can be no change, since change consists in
              things coming into being or ceasing to be.
            </List.Item>
          </List>
        </Text>
        <Space h="md" />
        <Title order={4}>Empedocles</Title>
        <Text>
          <b>Empedocles</b> was the founder of the Italian school of medicine,
          and the medical school which sprang from him influenced both Plato and
          Aristotle.
        </Text>
        <Text>
          He discovered at least one example of centrifugal force, sex in
          plants, and that the moon shines by reflected light.
        </Text>
        <Text>
          Russell argues that &quot;All this shows the scientific vigour of
          his time, which was not equalled in the later ages of Greece.&quot;
        </Text>

        <Space h="md" />
        <Title order={4}>Anaxagoras</Title>
        <Text>
          <b>Anaxagoras</b> was an Ionian, and carried on the scientific,
          rationalist tradition of Ionia. He was the first to introduce
          philosophy to the Athenians, and the first to suggest mind as the
          primary cause of physical changes.
        </Text>
        <Text>
          Anaxagoras held that everything is infinitely divisible.
        </Text>
        <Text>
          He also discovered that the moon shines by reflected light.
        </Text>

        <Space h="md" />
        <Title order={4}>Protagoras</Title>
        <Text>
          He was a sophist and early relativist.
        </Text>
        <Text>
          <b>Protagoras</b> is most famous for his assertion, &quot;Man is the
          measure of all things.&quot; Russell interprets this as a form of
          relativism, suggesting that truth and knowledge are subjective.
        </Text>
        <Text>
          Russell acknowledges Protagoras&apos; role in shifting the focus of
          philosophy from cosmology (the nature of the universe) to human
          concerns.
        </Text>

        <Space h="xl" />
        <Title order={3}>Part II. Socrates, Plato, and Aristotle</Title>
        <Space h="md" />
        <Title order={4}>Socrates</Title>
      </Container>
    </>
  );
}
