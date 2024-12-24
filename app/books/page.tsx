'use client';

import { Container, Text, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { BackButton } from '../../components/BackButton';
import { useState } from 'react';

interface Book {
  title: string;
  author: string;
  color: string;
  spine: string;
}

const books: Book[] = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    color: '#27AE60',
    spine: '#2ECC71',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    color: '#2C3E50',
    spine: '#34495E',
  },
  {
    title: '1984',
    author: 'George Orwell',
    color: '#C0392B',
    spine: '#E74C3C',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    color: '#27AE60',
    spine: '#2ECC71',
  },
];

const BookComponent = ({
  book,
  index,
  isHovered,
  hoveredIndex,
  setHoveredIndex,
}: {
  book: Book;
  index: number;
  isHovered: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  return (
    <motion.div
      whileHover={{
        rotateY: -20,
        z: 50,
        x: -30,
        transition: { duration: 0.3 },
      }}
      animate={{
        x: isHovered
          ? hoveredIndex !== null && index < hoveredIndex
            ? -60
            : hoveredIndex !== null && index > hoveredIndex
              ? 60
              : 0
          : 0,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      style={{
        width: '40px',
        height: '200px',
        // backgroundColor: book.color,
        margin: '0 5px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transformOrigin: 'right center',
        cursor: 'pointer',
      }}
    >
      {/* Spine */}
      <Box
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: book.spine,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform:
            isHovered && hoveredIndex === index
              ? 'rotateY(-20deg) translateZ(-1px)'
              : 'rotateY(0deg)',
          clipPath:
            isHovered && hoveredIndex === index
              ? 'polygon(0 1%, 100% 0, 100% 100%, 0 99%)'
              : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          transition: 'transform 0.3s',
          borderRight: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <Text size="sm" c="white" fw={500}>
          {book.title}
        </Text>
      </Box>

      {/* Front Cover */}
      <Box
        style={{
          position: 'absolute',
          width: '170px',
          height: '200px',
          backgroundColor: book.color,
          transform: 'rotateY(80deg) translateZ(40px)',
          transformOrigin: 'left center',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          clipPath: 'polygon(0 0, 100% 3%, 100% 97%, 0 100%)',
        }}
      >
        <Text size="lg" c="white" fw={700}>
          {book.title}
        </Text>
        <Text size="sm" c="white" opacity={0.8}>
          {book.author}
        </Text>
      </Box>
    </motion.div>
  );
};

export default function BooksPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container py="xl">
      <BackButton href="/" />
      <Box
        style={{
          perspective: '1000px',
          perspectiveOrigin: 'center',
          marginTop: '50px',
        }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            minHeight: '300px',
            padding: '20px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
          }}
        >
          {books.map((book, index) => (
            <BookComponent
              key={index}
              book={book}
              index={index}
              isHovered={hoveredIndex !== null}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
