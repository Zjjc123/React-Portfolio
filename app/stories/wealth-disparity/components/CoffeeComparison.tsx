import { Box, Text } from '@mantine/core';

export function CoffeeComparison() {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        fontSize: '4rem',
        margin: '2rem 0',
      }}
    >
      <Text size="2rem" fw={700} component="span" c="red">
        ☕ $10
      </Text>
      <Text size="2rem" fw={700} component="span" c="green">
        ☕ $3
      </Text>
    </Box>
  );
} 