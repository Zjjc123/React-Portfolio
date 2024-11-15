import { Card, Text } from '@mantine/core';

export function MillionDollarCheck() {
  return (
    <Card
      mt="md"
      my="xl"
      padding="xl"
      radius="md"
      withBorder
      w="30vw"
      style={{
        backgroundColor: '#f8f9fa',
        fontFamily: 'serif',
        position: 'relative',
        minHeight: '200px',
      }}
    >
      <Text
        size="sm"
        c="dimmed"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
        }}
      >
        No. 12345
      </Text>

      <Text
        size="xl"
        fw={700}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '2.5rem',
        }}
      >
        $1,000,000.00
      </Text>

      <Text
        size="sm"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '20px',
        }}
      >
        PAY TO THE ORDER OF ___________________________
      </Text>

      <Text
        size="sm"
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          fontStyle: 'italic',
        }}
      >
        MEMO: this is a piece of paper
      </Text>
    </Card>
  );
}
