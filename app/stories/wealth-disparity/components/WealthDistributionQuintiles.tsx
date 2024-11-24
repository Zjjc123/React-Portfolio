const data = {
  top20: 30,
  second20: 20,
  third20: 20,
  fourth20: 15,
  bottom20: 15,
};

import { Box, Text } from '@mantine/core';
import { BarChart } from '@mantine/charts';

export function WealthDistributionQuintiles({
  data: inputData = data,
  height = 150,
}: {
  data?: typeof data;

  height?: number;
  w?: string;
}) {
  const chartData = [
    {
      group: 'Wealth Distribution',
      'Bottom 20%': inputData.bottom20,
      'Fourth 20%': inputData.fourth20,
      'Third 20%': inputData.third20,
      'Second 20%': inputData.second20,
      'Top 20%': inputData.top20,
    },
  ];

  const legendItems = [
    { label: 'Top 20%', color: 'red.6' },
    { label: 'Second 20%', color: 'orange.6' },
    { label: 'Third 20%', color: 'yellow.6' },
    { label: 'Fourth 20%', color: 'blue.6' },
    { label: 'Bottom 20%', color: 'green.6' },
  ];

  return (
    <Box my="xl">
      <BarChart
        h={height}
        data={chartData}
        dataKey="group"
        series={[
          { name: 'Top 20%', color: 'red.6' },
          { name: 'Second 20%', color: 'orange.6' },
          { name: 'Third 20%', color: 'yellow.6' },
          { name: 'Fourth 20%', color: 'blue.6' },
          { name: 'Bottom 20%', color: 'green.6' },
        ]}
        orientation="vertical"
        type="stacked"
        withTooltip={false}
        yAxisProps={{ width: 100 }}
        style={{ marginLeft: '-100px' }}
      />

      <Box
        mt="md"
        style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
      >
        {legendItems.map((item) => (
          <Box
            key={item.label}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Box w={12} h={12} bg={item.color} />
            <Text size="sm">{item.label}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
