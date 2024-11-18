import { Box } from '@mantine/core';
import { useState, useEffect } from 'react';

export function Person() {
  const [isDragging, setIsDragging] = useState(false);
  const [isSplat, setIsSplat] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [showSplatText, setShowSplatText] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    const gravity = 0.05;
    const friction = 0.99;

    const animate = () => {
      if (!isDragging && !isSplat) {
        setVelocity((prev) => ({
          x: prev.x * friction,
          y: prev.y - gravity,
        }));

        setPosition((prev) => {
          const newY = prev.y + velocity.y;

          const personElement = document.querySelector('[data-person]');
          if (personElement) {
            const personRect = personElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (personRect.bottom >= windowHeight) {
              setIsSplat(true);
              setShowSplatText(true);
              setTimeout(() => setShowSplatText(false), 1000);
              setVelocity({ x: 0, y: 0 });
              return prev;
            }

            const deathElements = document.getElementsByClassName('death');
            for (const death of Array.from(deathElements)) {
              const deathRect = death.getBoundingClientRect();
              if (
                personRect.bottom >= deathRect.top &&
                personRect.left < deathRect.right &&
                personRect.right > deathRect.left
              ) {
                setIsSplat(true);
                setShowSplatText(true);
                setTimeout(() => setShowSplatText(false), 1000);
                setVelocity({ x: 0, y: 0 });
                return prev;
              }
            }

            const groundElements = document.getElementsByClassName('ground');

            for (const ground of Array.from(groundElements)) {
              const groundRect = ground.getBoundingClientRect();
              if (
                personRect.bottom >= groundRect.top &&
                personRect.left < groundRect.right &&
                personRect.right > groundRect.left
              ) {
                setVelocity((prev) => ({ ...prev, y: 0 }));
                return { ...prev, y: prev.y };
              }
            }
          }

          return {
            x: prev.x + velocity.x,
            y: newY,
          };
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, velocity, isSplat]);

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setVelocity({ x: 0, y: 0 });

    let lastX = e.clientX;
    let lastY = e.clientY;

    const handleDrag = (e: MouseEvent) => {
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      setPosition((prev) => ({
        x: prev.x + deltaX,
        y: prev.y - deltaY,
      }));

      const swayAmount = deltaX * 5;
      const returnToCenter = swayAmount * Math.exp(-Math.abs(deltaX) * 0.01);
      setRotation(returnToCenter);

      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleDragEnd = (e: MouseEvent) => {
      setIsDragging(false);
      setVelocity({
        x: (e.clientX - lastX) * 0.1,
        y: -(e.clientY - lastY) * 0.1,
      });
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
    };

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
  };

  return (
    <>
      <Box
        data-person
        style={{
          position: 'absolute',
          left: `calc(60% + ${position.x}px)`,
          bottom: `calc(350px + ${position.y}px)`,
          width: '16px',
          height: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: isSplat
            ? 'scale(1.2, 0.3) translateY(12px)'
            : `rotate(${rotation}deg)`,
          cursor: isSplat ? 'default' : isDragging ? 'grabbing' : 'grab',
          transition: isDragging ? 'none' : 'transform 0.3s ease',
        }}
        onMouseDown={!isSplat ? handleDragStart : undefined}
      >
        {/* Head */}
        <Box
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#000',
          }}
        />
        {/* Body */}
        <Box
          style={{
            width: '2px',
            height: '11px',
            backgroundColor: '#000',
          }}
        />
        {/* Arms */}
        <Box
          style={{
            position: 'absolute',
            top: '10px',
            width: '12px',
            height: '2px',
            backgroundColor: '#000',
          }}
        />
        {/* Legs */}
        <Box
          style={{
            position: 'absolute',
            bottom: '0',
            width: '10px',
            height: '6px',
            borderBottom: '2px solid #000',
            borderLeft: '2px solid #000',
            borderRight: '2px solid #000',
            transform: 'rotate(180deg)',
          }}
        />
      </Box>

      {/* Splat text popup */}
      {showSplatText && (
        <Box
          style={{
            position: 'absolute',
            left: `calc(60% + ${position.x - 30}px)`,
            bottom: `calc(350px + ${position.y + 30}px)`,
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'red',
            animation: 'fadeOut 1s forwards',
          }}
        >
          SPLAT!
        </Box>
      )}
    </>
  );
}
