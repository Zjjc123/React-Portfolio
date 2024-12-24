'use client';

import { Text, Box } from '@mantine/core';

export default function Personal() {
  return (
    <>
      <Box>
        <Text size="xl" fw={700}>
          JASON ZHANG
        </Text>
        <Text my="md">
          Hi there! I&#39;m a computer science student at the University of
          Washington, and I am passionate about using technology to solve
          real-world problems in various interdisciplinary fields.
        </Text>
        <Text>I&#39;m also a photographer and videographer for fun!</Text>
      </Box>
    </>
  );
}
