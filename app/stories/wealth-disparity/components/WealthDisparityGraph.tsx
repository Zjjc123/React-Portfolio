import { LineChart, PieChart } from '@mantine/charts';
import { Text, Group, Box } from '@mantine/core';
import { motion } from 'framer-motion';

const quarterlyData = require('./QuarterlyDisparityData.json');

export function WealthDisparityGraph2() {
  const processedData = quarterlyData.map((d: any) => ({
    ...d,
    top1pct: d.top0_1 + d.top1,
  }));

  return (
    <Box my="xl">
      <Text size="xl" fw={700} ta="center" mb="md">
        U.S. Wealth Distribution by Percentile
      </Text>
      <Text size="sm" c="dimmed" ta="center" mb="xl">
        (Percentage of Total Wealth)
      </Text>
      <LineChart
        h={500}
        data={processedData}
        dataKey="date"
        series={[
          { name: 'top1pct', color: 'orange.6', label: 'Top 1%' },
          { name: 'top10', color: 'red.6', label: 'Top 10%' },
          { name: 'bottom50', color: 'blue.6', label: 'Bottom 50%' },
        ]}
        curveType="linear"
        gridAxis="xy"
        tooltipProps={{
          content: ({ payload }) => {
            if (!payload?.length) return null;
            return (
              <Box p="md" bg="white" style={{ border: '1px solid #ccc' }}>
                <Text fw={700} mb={5}>
                  Quarter: {payload[0].payload.date}
                </Text>
                {payload.map((item) => (
                  <Text fw={400} key={item.name} c={item.color}>
                    {item.name === 'top1pct'
                      ? 'Top 1%'
                      : item.name === 'top10'
                        ? 'Top 10%'
                        : 'Bottom 50%'}
                    : {item.value.toFixed(1)}%
                  </Text>
                ))}
              </Box>
            );
          },
        }}
      />
      <Text size="xs" c="dimmed" ta="center" mt="md">
        Source:{' '}
        <a href="https://www.federalreserve.gov/releases/z1/dataviz/dfa/distribute/table/#quarter:134;series:Net%20worth;demographic:networth;population:all;units:shares;range:1989.3,2023.1">
          Federal Reserve Distributional Financial Accounts
        </a>
      </Text>
    </Box>
  );
}

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
