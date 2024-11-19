'use client';

import { useState } from 'react';
import { Text, Box, Button, Flex } from '@mantine/core';

const items = [
  {
    name: 'Luxury Yacht',
    price: 300_000_000,
    image: '🛥️',
    description: 'A 100-meter super yacht with helipad and pool',
  },
  {
    name: 'Private Jet',
    price: 65_000_000,
    image: '✈️',
    description: 'A Gulfstream G650 private jet',
  },
  {
    name: 'Luxury Mansion',
    price: 50_000_000,
    image: '🏰',
    description: 'A Beverly Hills estate with 12 bedrooms',
  },
  {
    name: 'Supercar',
    price: 3_000_000,
    image: '🏎️',
    description: 'A Bugatti Chiron',
  },
  {
    name: 'Private Island',
    price: 100_000_000,
    image: '🏝️',
    description: 'A 100-acre private island in the Caribbean',
  },
  {
    name: 'Sports Team',
    price: 2_000_000_000,
    image: '⚽',
    description: 'A professional sports franchise',
  },
  {
    name: 'Luxury Hotel',
    price: 800_000_000,
    image: '🏨',
    description: 'A 5-star hotel in Dubai',
  },
  {
    name: 'Art Collection',
    price: 500_000_000,
    image: '🎨',
    description: 'World-class art masterpieces',
  },
  {
    name: 'Helicopter',
    price: 15_000_000,
    image: '🚁',
    description: 'A luxury private helicopter',
  },
  {
    name: 'Luxury Watch',
    price: 1_000_000,
    image: '⌚',
    description: 'A rare Patek Philippe timepiece',
  },
  {
    name: 'Big Mac',
    price: 5.29,
    image: '🍔',
    description: 'A Big Mac',
  },
  {
    name: 'iPhone 16 Pro',
    price: 1_999,
    image: '📱',
    description: 'An iPhone 16 Pro',
  },
  {
    name: 'Tesla Cybertruck',
    price: 100_000,
    image: '🚗',
    description: 'A Tesla Cybertruck',
  },
  {
    name: 'TV',
    price: 1_000,
    image: '📺',
    description: 'A 60-inch TV',
  },
  {
    name: 'House',
    price: 1_000_000,
    image: '🏠',
    description: 'A single family home',
  },
  {
    name: 'Car',
    price: 30_000,
    image: '🚗',
    description: 'A car',
  },
  {
    name: 'Cocktail',
    price: 15,
    image: '🍸',
    description: 'A cocktail',
  },
  {
    name: 'Costco Hot Dog',
    price: 1.5,
    image: '🌭',
    description: 'A Costco hot dog',
  },
  {
    name: 'Nintendo Switch',
    price: 300,
    image: '🎮',
    description: 'A Nintendo Switch',
  },
  {
    name: 'Steak',
    price: 20,
    image: '🥩',
    description: 'A New York strip steak',
  },
  {
    name: 'Paper Clip',
    price: 0.01,
    image: '🔗',
    description: 'A paper clip',
  },
  {
    name: 'Pencil',
    price: 0.5,
    image: '✏️',
    description: 'A pencil',
  },
  {
    name: 'Dream Vacation',
    price: 14_000,
    image: '🌴',
    description: 'A dream vacation',
  },
  {
    name: 'Coffee',
    price: 5,
    image: '☕',
    description: 'A coffee',
  },
  {
    name: 'Country: Portugal',
    price: 303_000_000_000,
    image: '🇵🇹',
    description: 'The country of Portugal (GDP)',
  },
  {
    name: 'Country: Greece',
    price: 252_000_000_000,
    image: '🇬🇷',
    description: 'The country of Greece (GDP)',
  },
  {
    name: 'Country: Bolivia',
    price: 48_000_000_000,
    image: '🇧🇴',
    description: 'The country of Bolivia (GDP)',
  },
  {
    name: 'Country: Iceland',
    price: 33_000_000_000,
    image: '🇮🇸',
    description: 'The country of Iceland (GDP)',
  },
  {
    name: 'Country: Chad',
    price: 19_000_000_000,
    image: '🇹🇩',
    description: 'The country of Chad (GDP)',
  },
  {
    name: 'Country: Fiji',
    price: 5_800_000_000,
    image: '🇫🇯',
    description: 'The country of Fiji (GDP)',
  },
  {
    name: 'Banana',
    price: 0.75,
    image: '🍌',
    description: 'A single banana',
  },
  {
    name: 'Bus Ticket',
    price: 2.75,
    image: '🚌',
    description: 'A one-way bus ticket',
  },
  {
    name: 'Movie Ticket',
    price: 15,
    image: '🎬',
    description: 'A movie theater ticket',
  },
  {
    name: 'Gaming PC',
    price: 3_000,
    image: '💻',
    description: 'A high-end gaming PC',
  },
  {
    name: 'Tuition',
    price: 70_000,
    image: '🎓',
    description: 'A year of tuition at a top university',
  },
  {
    name: 'Wedding',
    price: 30_000,
    image: '💒',
    description: 'A wedding',
  },
  {
    name: 'Camera',
    price: 5_000,
    image: '📷',
    description: 'A high-end camera',
  },
  {
    name: 'Shoes',
    price: 60,
    image: '👟',
    description: 'A pair of shoes',
  },
  {
    name: 'Dinner',
    price: 90,
    image: '🍽️',
    description: 'A fancy dinner for two',
  },
  {
    name: 'Franchise',
    price: 400_000,
    image: '🏢',
    description: 'Initial investment for a franchise',
  },
];

export default function SpendPage() {
  const [totalEarned, setTotalEarned] = useState(320_000_000_000);
  const [inventory, setInventory] = useState<Record<string, number>>({});

  return (
    <>
      <Text my="xl" size={'3rem'} fw={700} style={{ textAlign: 'center' }}>
        ${totalEarned.toLocaleString()}
      </Text>

      <Flex mt="xl" wrap="wrap" gap="md" justify="center">
        {items
          .sort((a, b) => a.price - b.price)
          .map((item) => (
            <Box
              key={item.name}
              p="md"
              style={{
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                width: '200px',
              }}
            >
              <Box>
                <Text size="md">
                  {item.image} {item.name}
                  {inventory[item.name] ? ` (${inventory[item.name]})` : ''}
                </Text>
                <Text size="xs" c="dimmed">
                  {item.description}
                </Text>
              </Box>
              <Box style={{ marginTop: '1rem' }}>
                <Text fw={700}>${item.price.toLocaleString()}</Text>
                <Button
                  size="sm"
                  variant="light"
                  onClick={() => {
                    if (totalEarned >= item.price) {
                      setTotalEarned((prev) => prev - item.price);
                      setInventory((prev) => ({
                        ...prev,
                        [item.name]: (prev[item.name] || 0) + 1,
                      }));
                    }
                  }}
                  disabled={totalEarned < item.price}
                >
                  Purchase
                </Button>
              </Box>
            </Box>
          ))}
      </Flex>
    </>
  );
}
