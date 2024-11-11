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
          Computer science student at the University of Washington, I am
          passionate about using technology to solve real-world problems in
          various interdisciplinary fields.
        </Text>
        <Text>
          Also a photographer and videographer. I love to capture moments and
          tell stories with digital media.
        </Text>
      </Box>
    </>
  );
}
