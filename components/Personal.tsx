'use client';

import { Text, Box, Group, ActionIcon } from '@mantine/core';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Personal() {
  return (
    <>
      <Box>
        <Text size="xl" fw={700}>
          JASON ZHANG
        </Text>
        <Text my="md">
          Computer science student at the University of Washington, I am
          passionate about using technology to solve real-world problems in
          various interdisciplinary fields.
        </Text>
        <Text>
          Also a photographer and videographer. I love to capture moments and
          tell stories with digital media.
        </Text>
      </Box>
      <Group justify="center" gap="xl" mt="xl">
        <ActionIcon
          component="a"
          href="https://www.linkedin.com/in/zjjc123/"
          target="_blank"
          rel="noreferrer"
          size="lg"
          radius="xl"
          variant="filled"
          color="blue"
        >
          <FaLinkedinIn />
        </ActionIcon>
        <ActionIcon
          component="a"
          href="https://github.com/zjjc123"
          target="_blank"
          rel="noreferrer"
          size="lg"
          radius="xl"
          variant="filled"
        >
          <FaGithub />
        </ActionIcon>
      </Group>
    </>
  );
}
