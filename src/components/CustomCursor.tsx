import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;
    let rippleId = 0;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Add trail point
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
        return newTrail.slice(-8); // Keep last 8 points
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-hover]')) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-hover]')) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Add ripple effect
      setRipples(prev => [...prev, { x: e.clientX, y: e.clientY, id: rippleId++ }]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.slice(1));
      }, 600);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Cursor Trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length * 0.3,
          }}
        >
          <div 
            className="rounded-full bg-primary transition-all duration-150"
            style={{
              width: `${4 + (index / trail.length) * 4}px`,
              height: `${4 + (index / trail.length) * 4}px`,
            }}
          />
        </div>
      ))}

      {/* Click Ripple Effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9996]"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
            animation: 'rippleExpand 0.6s ease-out forwards',
          }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-primary" />
        </div>
      ))}

      {/* Outer ring - follows with delay */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-150"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1}) ${isClicking ? 'scale(0.8)' : ''}`,
        }}
      >
        <div 
          className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
            isHovering ? 'border-primary' : 'border-primary/30'
          }`}
          style={{
            animation: 'rotateBorder 3s linear infinite',
          }}
        />
      </div>

      {/* Middle ring with particles */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-100"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : 1})`,
        }}
      >
        <div className={`relative w-6 h-6 ${isHovering ? 'animate-spin' : ''}`}>
          {/* Particle dots around cursor */}
          {[0, 90, 180, 270].map((angle) => (
            <div
              key={angle}
              className={`absolute w-1 h-1 rounded-full transition-all duration-200 ${
                isHovering ? 'bg-accent' : 'bg-primary/50'
              }`}
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-12px)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main cursor dot with glow */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`,
        }}
      >
        {/* Glow effect */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-200 ${
            isHovering ? 'blur-md' : 'blur-sm'
          }`}
          style={{
            width: isHovering ? '16px' : '12px',
            height: isHovering ? '16px' : '12px',
            background: `radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--primary) / 0) 70%)`,
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
          }}
        />
        {/* Center dot */}
        <div 
          className={`rounded-full transition-all duration-200 ${
            isHovering ? 'bg-primary w-3 h-3' : 'bg-foreground w-2 h-2'
          }`}
        />
      </div>

      {/* Hover glow indicator - enhanced */}
      <div
        className={`fixed pointer-events-none z-[9996] transition-all duration-300 ${
          isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className="w-16 h-16 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, hsl(var(--accent) / 0.2) 40%, transparent 70%)',
            animationDuration: '2s',
          }}
        />
      </div>

      {/* Crosshair effect on hover */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Horizontal line */}
          <div 
            className="absolute h-px bg-primary/40"
            style={{
              width: '24px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* Vertical line */}
          <div 
            className="absolute w-px bg-primary/40"
            style={{
              height: '24px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes rippleExpand {
          from {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          to {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }

        @keyframes rotateBorder {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;