interface PinProps {
  top?: string;
  right?: string;
  left?: string;
  color?: string;
}

export default function Pin({
  top = '-10px',
  right,
  left,
  color = '#4444ff',
}: PinProps) {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top,
          ...(right && { right }),
          ...(left && { left }),
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: color,
          boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
          zIndex: 100,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: `calc(${top} + 10px)`,
          ...(right && { right: `calc(${right} + 9px)` }),
          ...(left && { left: `calc(${left} + 9px)` }),
          width: '1.5px',
          height: '15px',
          backgroundColor: '#aaaaaa',
          zIndex: 99,
          transform: 'rotate(-70deg)',
          transformOrigin: 'top',
        }}
      />
    </div>
  );
}
