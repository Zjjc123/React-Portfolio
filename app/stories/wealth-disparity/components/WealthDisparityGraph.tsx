import { LineChart } from '@mantine/charts';
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
      { name: 'Bottom 50%', color: 'blue.6' },
      { name: 'Middle 40%', color: 'green.6' },
      { name: 'Top 10%', color: 'red.6' },
    ].map((item) => (
      <Group key={item.name} gap="xs">
        <Box w={12} h={12} bg={item.color} />
        <Text size="sm">{item.name}</Text>
      </Group>
    ))}
  </Group>
);

export function WealthDisparityGraph() {
  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <Text size="xl" fw={700} ta="center" mb="md">
        U.S. Family Wealth Distribution by Wealth Group
      </Text>
      <Text size="sm" c="dimmed" ta="center" mb="xl">
        (Trillions of 2022 dollars)
      </Text>
      <LineChart
        h={400}
        data={data}
        dataKey="year"
        series={[
          { name: 'bottom50', color: 'blue.6' },
          { name: 'middle40', color: 'green.6' },
          { name: 'top10', color: 'red.6' },
        ]}
        curveType="linear"
        withLegend={false}
        gridAxis="xy"
        withTooltip
        tooltipProps={{
          content: ({ payload }) => {
            if (!payload?.length) return null;
            const total = payload.reduce((sum, item) => sum + item.value, 0);

            return (
              <div
                style={{
                  padding: '0.5rem',
                  minWidth: '200px',
                  background: 'white',
                  border: '1px solid #e9ecef',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                <Text fw={500} mb={5}>
                  Year: {payload[0].payload.year}
                </Text>
                {payload.map((item: any) => (
                  <Box key={item.name}>
                    <Group justify="space-between" mb={2}>
                      <Text size="sm" c={item.color}>
                        {item.name === 'bottom50'
                          ? 'Bottom 50%'
                          : item.name === 'middle40'
                            ? 'Middle 40%'
                            : 'Top 10%'}
                      </Text>
                      <Text size="sm" c={item.color}>
                        {`${((item.value / total) * 100).toFixed(1)}% (${item.value.toFixed(1)}T)`}
                      </Text>
                    </Group>
                    <Box
                      bg={item.color}
                      h={8}
                      w={`${(item.value / total) * 100}%`}
                      mb={8}
                      style={{ transition: 'width 200ms ease' }}
                    />
                  </Box>
                ))}
              </div>
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
    </div>
  );
}
