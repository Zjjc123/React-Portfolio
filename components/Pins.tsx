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
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        zIndex: 100,
      }}
    />
  );
}
