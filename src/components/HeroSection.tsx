
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const roles = [
  'Junior Software Developer',
  'Web Developer',
  'Creative Thinker',
  'Lifelong Learner',
  'Bookworm',
  'PhotoVideographer'
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [avatarRotation, setAvatarRotation] = useState({ x: 0, y: 0 });
  const [isHoveringAvatar, setIsHoveringAvatar] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  // Typing effect
  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 25;
        const y = (e.clientY - rect.top - rect.height / 2) / 25;
        setMousePosition({ x, y });
      }

      // Avatar 3D rotation effect
      if (avatarRef.current && isHoveringAvatar) {
        const rect = avatarRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = (e.clientY - centerY) / 5;
        const rotateY = (centerX - e.clientX) / 5;
        setAvatarRotation({ x: rotateX, y: rotateY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHoveringAvatar]);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated gradient orbs */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] animate-pulse"
        style={{
          left: '20%',
          top: '30%',
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          transition: 'transform 0.3s ease-out',
          animationDuration: '4s',
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/20 blur-[80px] animate-pulse"
        style={{
          right: '20%',
          bottom: '30%',
          animationDelay: '1.5s',
          transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`,
          transition: 'transform 0.3s ease-out',
          animationDuration: '5s',
        }}
      />

      {/* Geometric lines in background */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <svg className="w-[600px] h-[600px] opacity-10" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="60s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.3">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="15 50 50"
              to="375 50 50"
              dur="45s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="30 50 50"
              to="390 50 50"
              dur="30s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
      
      {/* Floating geometric particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 border border-primary/30 rotate-45"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animation: `float ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Sparkle effects */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <Sparkles 
            size={12} 
            className="text-primary/40"
          />
        </div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile with 3D effect and cursor follower */}
          <div 
            ref={avatarRef}
            className="mb-8 group relative cursor-pointer"
            onMouseEnter={() => setIsHoveringAvatar(true)}
            onMouseLeave={() => {
              setIsHoveringAvatar(false);
              setAvatarRotation({ x: 0, y: 0 });
            }}
            style={{
              animation: 'scaleIn 0.8s ease-out',
            }}
          >
            {/* Animated glow rings */}
            <div className="absolute inset-0 w-40 h-40 rounded-full">
              <div 
                className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"
                style={{ animationDuration: '3s' }}
              />
              <div 
                className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping"
                style={{ animationDuration: '3s', animationDelay: '1s' }}
              />
            </div>

            {/* Glow effect behind */}
            <div 
              className="absolute inset-0 w-40 h-40 rounded-full bg-primary/40 blur-2xl animate-pulse"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                animationDuration: '3s',
              }}
            />
            <div 
              className="absolute inset-0 w-40 h-40 rounded-full bg-accent/30 blur-3xl animate-pulse"
              style={{
                transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
                animationDelay: '0.5s',
                animationDuration: '4s',
              }}
            />
            
            {/* Glass avatar container with 3D rotation */}
            <div 
              className="relative w-40 h-40 rounded-full backdrop-blur-xl bg-card/30 shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-500"
              style={{
                transform: `
                  translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)
                  perspective(1000px)
                  rotateX(${avatarRotation.x}deg)
                  rotateY(${avatarRotation.y}deg)
                  scale(${isHoveringAvatar ? 1.1 : 1})
                `,
                border: '1px solid hsl(var(--primary) / 0.2)',
                boxShadow: isHoveringAvatar 
                  ? '0 0 60px hsl(var(--primary)/0.5), 0 0 100px hsl(var(--accent)/0.3)' 
                  : '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              {/* Rotating border effect */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary)), transparent 30%)',
                  animation: isHoveringAvatar ? 'spin 3s linear infinite' : 'none',
                }}
              />
              
              {/* Inner subtle ring */}
              <div className="absolute inset-2 rounded-full border border-primary/10" />
              
              {/* Professional placeholder avatar */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 relative z-10 rounded-full">
                <img 
                  src="iconic.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                  style={{
                    filter: isHoveringAvatar ? 'brightness(1.1) contrast(1.05)' : 'brightness(1)',
                    transition: 'filter 0.3s ease',
                  }}
                />
              </div>

              {/* Shine effect on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                style={{
                  transform: 'translateX(-100%)',
                  animation: isHoveringAvatar ? 'shine 2s ease-in-out infinite' : 'none',
                }}
              />
            </div>

            {/* Orbiting particles */}
            {isHoveringAvatar && [...Array(4)].map((_, i) => (
              <div
                key={`orbit-${i}`}
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  animation: `orbit 2s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                  transformOrigin: '0 0',
                }}
              />
            ))}
          </div>

          {/* Title with gradient animation */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4" 
            style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span 
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse"
              style={{
                backgroundSize: '200% auto',
                animation: 'gradientShift 3s ease infinite, pulse 2s ease-in-out infinite',
              }}
            >
              Alfayadh!
            </span>
          </h1>

          {/* Typing effect subtitle */}
          <div 
            className="h-12 md:h-14 mb-8" 
            style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">{displayText}</span>
              <span className="animate-pulse text-primary">|</span>
              <span className="text-primary">/&gt;</span>
            </p>
          </div>

          {/* Description */}
          <p 
            className="text-muted-foreground mb-10 max-w-xl" 
            style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
          >
            Crafting beautiful digital experiences with clean code and creative design.
            Passionate about building innovative solutions.
          </p>

          {/* Interactive Social Links */}
          <div 
            className="flex gap-4 mb-12" 
            style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}
          >
            {[
              { icon: Github, href: 'https://github.com/AlfayadhAnvaris', label: 'GitHub', color: 'hover:bg-primary/10' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/alfayadh-anvaris-937336317', label: 'LinkedIn', color: 'hover:bg-blue-500/10' },
              { icon: Mail, href: '#contact', label: 'Email', color: 'hover:bg-accent/10' },
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`group w-14 h-14 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 relative overflow-hidden border border-border hover:border-primary/50 ${color}`}
                aria-label={label}
              >
                <Icon size={22} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
                <span className="absolute -bottom-8 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {label}
                </span>
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-lg bg-primary/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* CTA Buttons with enhanced effects */}
          <div 
            className="flex flex-col sm:flex-row gap-4" 
            style={{ animation: 'fadeInUp 0.8s ease-out 1s both' }}
          >
            <a
              href="#skills"
              className="group px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/50"
            >
              <span className="relative z-10">Explore My Skills</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            
            <a
              href="/resume.pdf"
              download="Alfayadh_Resume.pdf"
              className="group px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-border hover:border-primary/50 relative overflow-hidden flex items-center justify-center gap-2 hover:shadow-lg"
            >
              <Download size={18} className="relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a
              href="/resume.pdf"
              download="John_Doe_Resume.pdf"
              className="group px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-border hover:border-primary/50 relative overflow-hidden flex items-center justify-center gap-2"
              data-hover
            >
              <Download size={18} className="relative z-10" />
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="group px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-border hover:border-primary/50 relative overflow-hidden hover:shadow-lg"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ArrowDown size={24} className="text-muted-foreground" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;