import { useEffect, useState } from 'react';

interface Hexagon {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const HexagonBackground = () => {
  const [hexagons, setHexagons] = useState<Hexagon[]>([]);

  useEffect(() => {
    const generateHexagons = () => {
      const newHexagons: Hexagon[] = [];
      for (let i = 0; i < 15; i++) {
        newHexagons.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 100 + 50,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 10,
        });
      }
      setHexagons(newHexagons);
    };

    generateHexagons();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hexagons.map((hex) => (
        <div
          key={hex.id}
          className="absolute hexagon opacity-10 animate-float"
          style={{
            left: `${hex.x}%`,
            top: `${hex.y}%`,
            width: `${hex.size}px`,
            height: `${hex.size}px`,
            background: `linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.3))`,
            animationDelay: `${hex.delay}s`,
            animationDuration: `${hex.duration}s`,
          }}
        />
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  );
};

export default HexagonBackground;
