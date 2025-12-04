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
    const generateLines = () => {
      const newLines: Line[] = [];
      // Diagonal lines
      for (let i = 0; i < 12; i++) {
        newLines.push({
          id: i,
          x1: Math.random() * 100,
          y1: Math.random() * 100,
          x2: Math.random() * 100,
          y2: Math.random() * 100,
          delay: Math.random() * 3,
          duration: Math.random() * 5 + 5,
        });
      }
      setLines(newLines);
    };

    generateLines();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated diagonal lines */}
      <svg className="absolute inset-0 w-full h-full">
        {lines.map((line) => (
          <line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            className="text-primary"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.1"
            style={{
              animation: `pulse-glow ${line.duration}s ease-in-out infinite`,
              animationDelay: `${line.delay}s`,
            }}
          />
        ))}
      </svg>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <line x1="0" y1="20" x2="80" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" />
          <line x1="20" y1="0" x2="20" y2="80" stroke="hsl(var(--primary))" strokeWidth="2" />
          <line x1="0" y1="40" x2="60" y2="40" stroke="hsl(var(--accent))" strokeWidth="1" />
          <line x1="40" y1="0" x2="40" y2="60" stroke="hsl(var(--accent))" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <line x1="0" y1="20" x2="80" y2="20" stroke="hsl(var(--primary))" strokeWidth="2" />
          <line x1="20" y1="0" x2="20" y2="80" stroke="hsl(var(--primary))" strokeWidth="2" />
          <line x1="0" y1="40" x2="60" y2="40" stroke="hsl(var(--accent))" strokeWidth="1" />
          <line x1="40" y1="0" x2="40" y2="60" stroke="hsl(var(--accent))" strokeWidth="1" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
    </div>
  );
};

export default GeometricBackground;
