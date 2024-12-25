import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import Image from 'next/image';

export interface Book {
  title: string;
  author: string;
  color: string;
  spine: StaticImport;
  image: StaticImport;
  link: string;
}

export const BookComponent = ({
  book,
  index,
  isHovered,
  hoveredIndex,
  setHoveredIndex,
  link,
  onClick,
}: {
  book: Book;
  index: number;
  isHovered: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  link: string;
  onClick: (link: string) => void;
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
        height: '260px',
        margin: '0 5px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transformOrigin: 'right center',
        cursor: 'pointer',
        zIndex: 100,
      }}
      onClick={() => onClick(link)}
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
          height: '260px',
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
