import { Box, Text } from '@mantine/core';

export function MoneyScale() {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem',
        fontSize: '4rem',
        margin: '2rem 0',
      }}
    >
      <Text size="2rem" fw={700} component="span">
        💵 $1,000
      </Text>
      <Text size="2rem" fw={700} component="span">
        💰 $1,000,000
      </Text>
      <Text size="2rem" fw={700} component="span">
        🏦 $1,000,000,000
      </Text>
    </Box>
  );
}
