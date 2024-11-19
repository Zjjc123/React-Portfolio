import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import styles from './CoffeeComparison.module.css';
import { useState, useEffect } from 'react';

export function CoffeeComparison() {
  const [isFilling, setIsFilling] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    if (showPrice) {
      const timer = setTimeout(() => {
        setShowPrice(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showPrice]);

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4rem',
        margin: '2rem 0',
        position: 'relative',
      }}
    >
      <motion.div
        className={styles.coffeeContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onClick={() => {
          if (!hasClicked) {
            setIsFilling(true);
            setShowPrice(true);
            setHasClicked(true);
          }
        }}
        style={{ cursor: hasClicked ? 'default' : 'pointer' }}
      >
        {showPrice && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -30 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              top: '70%',
              left: '150%',
              transform: 'translateY(-50%)',
              color: '#ff4444',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            -$6
          </motion.div>
        )}
        <div className={styles.handle} />
        <div className={styles.coffeeCup} style={{ overflow: 'hidden' }}>
          <motion.div
            className={styles.coffeeLiquid}
            initial={{ height: '0%' }}
            animate={{ height: isFilling ? '70%' : '0%' }}
            transition={{
              duration: 5,
              ease: 'easeOut',
            }}
          />
        </div>
      </motion.div>
    </Box>
  );
}
