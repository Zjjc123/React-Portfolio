import { PieChart } from '@mantine/charts';
import { Text, Group, Box } from '@mantine/core';
import { motion } from 'framer-motion';

export const WealthDisparityPieChart = () => {
  const data = [
    { name: 'Top 10%', value: 62, color: 'red.6' },
    { name: 'Middle 40%', value: 32.3, color: 'blue.6' },
    { name: 'Bottom 50%', value: 5.7, color: 'green.6' },
  ];
  return (
    <Box my="xl">
      <Text size="xl" fw={700} ta="center" mb="md">
        U.S. Wealth Distribution in 2024
      </Text>
      <Text size="sm" c="dimmed" ta="center" mb="xl">
        (Percentage of Total Wealth)
      </Text>
      <Group justify="center" mb="md">
        {data.map((item: any) => (
          <Group key={item.name} gap="xs">
            <Box w={16} h={16} bg={item.color} />
            <Text size="sm">{item.name}</Text>
          </Group>
        ))}
      </Group>
      <motion.div
        initial={{ rotate: -30, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <PieChart
          h={300}
          data={data}
          withLabels
          labelsType="percent"
          tooltipDataSource="segment"
          withTooltip
          tooltipProps={{
            content: ({ payload }) => {
              if (!payload?.length) return null;
              const data = payload[0].payload;
              return (
                <Box p="md" bg="white" style={{ border: '1px solid #ccc' }}>
                  <Text fw={700}>{data.name}</Text>
                  <Text>{data.value.toFixed(1)}% of total wealth</Text>
                </Box>
              );
            },
          }}
        />
      </motion.div>

      <Text size="xs" c="dimmed" ta="center" mt="md">
        Source: Federal Reserve Distributional Financial Accounts
      </Text>
    </Box>
  );
};
