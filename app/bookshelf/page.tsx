'use client';

import { Container, Text, Box } from '@mantine/core';
import { motion, transform } from 'framer-motion';
import { BackButton } from '../../components/BackButton';
import { useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface Book {
  title: string;
  author: string;
  color: string;
  spine: StaticImport;
  image: StaticImport;
}

import tkamCover from './books/tkam/tkam.cover.png';
import tkamSpine from './books/tkam/tkam.spine.png';
import tgaCover from './books/tga/tga.cover.jpg';
import tgaSpine from './books/tga/tga.spine.png';

import bg from './bg.jpg';
import bg2 from './bg2.jpg';

const bookClubBooks: Book[] = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    color: '#27AE60',
    spine: tkamSpine,
    image: tkamCover,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    color: '#2C3E50',
    spine: tgaSpine,
    image: tgaCover,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    color: '#27AE60',
    spine: tkamSpine,
    image: tkamCover,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    color: '#2C3E50',
    spine: tgaSpine,
    image: tgaCover,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    color: '#27AE60',
    spine: tkamSpine,
    image: tkamCover,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    color: '#2C3E50',
    spine: tgaSpine,
    image: tgaCover,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    color: '#27AE60',
    spine: tkamSpine,
    image: tkamCover,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    color: '#2C3E50',
    spine: tgaSpine,
    image: tgaCover,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    color: '#27AE60',
    spine: tkamSpine,
    image: tkamCover,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    color: '#2C3E50',
    spine: tgaSpine,
    image: tgaCover,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    color: '#27AE60',
    spine: tkamSpine,
    image: tkamCover,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    color: '#2C3E50',
    spine: tgaSpine,
    image: tgaCover,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    color: '#27AE60',
    spine: tkamSpine,
    image: tkamCover,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    color: '#2C3E50',
    spine: tgaSpine,
    image: tgaCover,
  },
];
const personalBooks: Book[] = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    color: '#27AE60',
    spine: tkamSpine,
    image: tkamCover,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    color: '#2C3E50',
    spine: tgaSpine,
    image: tgaCover,
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
        margin: '0 5px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transformOrigin: 'right center',
        cursor: 'pointer',
        zIndex: 100,
      }}
    >
      {/* Spine */}
      <Box
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
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
        <Image src={book.spine} alt={book.title} fill />
      </Box>

      {/* Front Cover */}
      <Box
        style={{
          position: 'absolute',
          width: '170px',
          height: '200px',
          backgroundColor: book.color,
          transform: 'rotateY(80deg) translateZ(39px)',
          transformOrigin: 'left center',
          clipPath: 'polygon(0 0, 100% 3%, 100% 97%, 0 100%)',
          overflow: 'hidden',
        }}
      >
        <Image
          src={book.image}
          alt={book.title}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
    </motion.div>
  );
};

export default function BooksPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      w="100%"
      h="100vh"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '500px',
      }}
    >
      <Container size="xl" py="xl">
        <BackButton href="/" />
        <Box
          style={{
            marginTop: '50px',
          }}
        >
          <Box
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              minHeight: '300px',
              padding: '20px',
              paddingLeft: '100px',
              zIndex: 100,
            }}
          >
            {bookClubBooks.map((book, index) => (
              <BookComponent
                key={index}
                book={book}
                index={index}
                isHovered={
                  hoveredIndex !== null && hoveredIndex < bookClubBooks.length
                }
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </Box>
          <Box
            style={{
              width: '100%',
              height: '50px',
              backgroundColor: '#8B4513',
              backgroundImage: `url(${bg2.src})`,
              left: 0,
              zIndex: -1,
              transform: 'rotateX(60deg)',
              transformOrigin: 'top',
              boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.5)',
            }}
          />

          <Box
            style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#8B4513',
              backgroundImage: `url(${bg2.src})`,
              transform:
                'perspective(1000px) rotateX(60deg) translateZ(216px) translatey(-125px)',
              transformOrigin: 'bottom',
              zIndex: -1,
              boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.5)',
            }}
          />

          <Box
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              minHeight: '300px',
              padding: '20px',
              paddingLeft: '100px',
              zIndex: 100,
            }}
          >
            {personalBooks.map((book, index) => (
              <BookComponent
                key={index}
                book={book}
                index={index + bookClubBooks.length}
                isHovered={
                  hoveredIndex !== null && hoveredIndex >= bookClubBooks.length
                }
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </Box>
        </Box>
        <Box
          style={{
            width: '100%',
            height: '50px',
            backgroundColor: '#8B4513',
            backgroundImage: `url(${bg2.src})`,
            left: 0,
            zIndex: -1,
            transform: 'rotateX(60deg)',
            transformOrigin: 'top',
            boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.5)',
          }}
        />

        <Box
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: '#8B4513',
            backgroundImage: `url(${bg2.src})`,
            transform:
              'perspective(1000px) rotateX(60deg) translateZ(216px) translatey(-125px)',
            transformOrigin: 'bottom',
            zIndex: -1,
            boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.5)',
          }}
        />
      </Container>
    </Box>
  );
}
