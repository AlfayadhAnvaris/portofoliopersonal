import { useEffect, useState } from 'react';

interface Line {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
  duration: number;
}

const GeometricBackground = () => {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const newLines: Line[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 5 + 5,
    }));

    setLines(newLines);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full">
        {lines.map(line => (
          <line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.15"
            className="text-primary animate-pulse-glow"
            style={{
              animationDuration: `${line.duration}s`,
              animationDelay: `${line.delay}s`,
            }}
          />
        ))}
      </svg>

      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-lg rotate-45 animate-float" />
      <div
        className="absolute top-1/3 right-1/4 w-24 h-24 border border-accent/20 rounded-full animate-float"
        style={{ animationDuration: '8s' }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-primary/15 rotate-12 animate-float"
        style={{ animationDuration: '7s' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
    </div>
  );
};

export default GeometricBackground;
