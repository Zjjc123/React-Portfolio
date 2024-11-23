import { LineChart, PieChart } from '@mantine/charts';
import { Text, Group, Box } from '@mantine/core';

const data = [
  { year: '1989', bottom50: 3.3, middle40: 19.4, top10: 29.5 },
  { year: '1992', bottom50: 3.6, middle40: 19.8, top10: 28.4 },
  { year: '1995', bottom50: 4.1, middle40: 21.5, top10: 31.9 },
  { year: '1998', bottom50: 5.5, middle40: 27.6, top10: 41.6 },
  { year: '2001', bottom50: 6.0, middle40: 33.6, top10: 55.3 },
  { year: '2004', bottom50: 6.5, middle40: 37.9, top10: 62.1 },
  { year: '2007', bottom50: 7.4, middle40: 41.4, top10: 74.6 },
  { year: '2010', bottom50: 6.3, middle40: 40.3, top10: 69.6 },
  { year: '2013', bottom50: 7.9, middle40: 46.1, top10: 76.5 },
  { year: '2016', bottom50: 9.8, middle40: 55.9, top10: 100.3 },
  { year: '2019', bottom50: 10.9, middle40: 56.8, top10: 102.9 },
  { year: '2022', bottom50: 12.8, middle40: 66.5, top10: 119.6 },
];

const Legend = () => (
  <Group justify="center" mt="md">
    {[
      { name: 'Top 10%', color: 'red.6' },
      { name: 'Middle', color: 'green.6' },
      { name: 'Bottom 50%', color: 'blue.6' },
    ]
      .reverse()
      .map((item) => (
        <Group key={item.name} gap="xs">
          <Box w={12} h={12} bg={item.color} />
          <Text size="sm">{item.name}</Text>
        </Group>
      ))}
  </Group>
);

export function WealthDisparityGraph() {
  return (
    <Box my="xl">
      <Text size="xl" fw={700} ta="center" mb="md">
        U.S. Family Wealth Distribution by Wealth Group
      </Text>
      <Text size="sm" c="dimmed" ta="center" mb="xl">
        (Percentage of Total Wealth)
      </Text>
      <LineChart
        h={400}
        data={data}
        dataKey="year"
        series={[
          { name: 'top10', color: 'red.6', label: 'Top 10%' },
          { name: 'middle40', color: 'green.6', label: 'Middle 40%' },
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
                  Year: {payload[0].payload.year}
                </Text>
                {payload.map((item) => (
                  <Text fw={400} key={item.name} c={item.color}>
                    {item.name === 'bottom50'
                      ? 'Bottom 50%'
                      : item.name === 'middle40'
                        ? 'Middle 40%'
                        : 'Top 10%'}
                    : {item.value}T
                  </Text>
                ))}
              </Box>
            );
          },
        }}
      />
      <Legend />
      <Text size="xs" c="dimmed" ta="center" mt="md">
        Source: Congressional Budget Office,{' '}
        <a href="https://www.cbo.gov/publication/60343">
          "Trends in the Distribution of Family Wealth, 1989 to 2022"
        </a>
      </Text>
    </Box>
  );
}

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
      <Text size="xs" c="dimmed" ta="center" mt="md">
        Source: Federal Reserve Distributional Financial Accounts
      </Text>
    </Box>
  );
};
