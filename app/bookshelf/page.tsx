'use client';

import { Container, Box } from '@mantine/core';
import { BackButton } from '../../components/BackButton';
import { useState } from 'react';

import thowpCover from './books/thowp/cover.jpg';
import thowpSpine from './books/thowp/spine.jpg';
import tgaCover from './books/tga/cover.jpg';
import tgaSpine from './books/tga/spine.jpg';
import bg from './bg.jpg';
import bg2 from './bg2.jpg';
import { Book, BookComponent } from './components/Book';

const bookClubBooks: Book[] = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    color: '#2C3E50',
    spine: tgaSpine,
    image: tgaCover,
    link: '/bookshelf/books/tga',
  },
];
const personalBooks: Book[] = [
  {
    title: 'The History Of Western Philosophy',
    author: 'Bertrand Russell',
    color: '#27AE60',
    spine: thowpSpine,
    image: thowpCover,
    link: '/bookshelf/books/thowp',
  },
];

export default function BooksPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <BackButton href="/" color="white" />

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
                  link={book.link}
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
                    hoveredIndex !== null &&
                    hoveredIndex >= bookClubBooks.length
                  }
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  link={book.link}
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
    </>
  );
}
