import { Box, Text, Button, Center } from '@mantine/core';
import { useState } from 'react';

export default function MoneyClicker() {
  const [totalEarned, setTotalEarned] = useState(0);
  const [floatingNumbers, setFloatingNumbers] = useState<
    Array<{ id: number; xOffset: number }>
  >([]);

  const addMillion = () => {
    setTotalEarned(totalEarned + 1_000_000);
    setFloatingNumbers([
      ...floatingNumbers,
      { id: Date.now(), xOffset: Math.random() * 200 - 100 },
    ]);
  };

  return (
    <Box m="xl">
      <style>
        {`
          @keyframes floatUp {
            0% {
              top: 70%;
              opacity: 1;
            }
            100% {
              top: 40%;
              opacity: 0;
            }
          }
        `}
      </style>
      <Text fw={700} size="xl" mt="sm" style={{ textAlign: 'center' }}>
        Try it yourself!
      </Text>

      {floatingNumbers.map((item) => (
        <Text
          key={item.id}
          style={{
            position: 'absolute',
            left: `calc(50% + ${item.xOffset}px)`,
            top: '70%',
            transform: 'translateX(-50%) translateY(-70%)',
            color: '#40c057',
            animation: 'floatUp 2s linear forwards',
          }}
        >
          +$1,000,000
        </Text>
      ))}
      <Text size="xl" style={{ textAlign: 'center' }}>
        {totalEarned >= 320_000_000_000 ? (
          <Text c="green" component="span">
            Congratulations! You're now richer than Elon Musk! ↑
          </Text>
        ) : (
          <Text c="red" component="span">
            ↓ You're still poorer than Elon Musk...
          </Text>
        )}
      </Text>
      <Text size={'2rem'} fw={700} mt="xl" style={{ textAlign: 'center' }}>
        Total earned: ${totalEarned.toLocaleString()}
      </Text>
      <Center>
        <Button my="md" onClick={addMillion} color="green">
          +1 Million Dollars
        </Button>
      </Center>
    </Box>
  );
}
