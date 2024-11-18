import { Paper, Stack, Text, Group, Box, Flex } from '@mantine/core';
import { motion } from 'framer-motion';

export function MoneyScale() {
  const DollarBill = ({ index = 0 }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Paper
        p="xs"
        withBorder
        bg="green.1"
        c="green.9"
        w={100}
        h={40}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text size="sm" fw={500}>$100</Text>
      </Paper>
    </motion.div>
  );

  return (
    <Stack gap="md" p="sm" mr={100} ml={300}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Stack gap="xs">
          <Text fw={700} size="lg">$100</Text>
          <DollarBill />
        </Stack>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Stack gap="xs">
          <Text fw={700} size="lg">$1,000</Text>
          <Flex gap="xs" wrap="wrap">
            {Array.from({ length: 10 }).map((_, index) => (
              <DollarBill key={index} index={index} />
            ))}
          </Flex>
        </Stack>
      </motion.div>
    </Stack>
  );
}
