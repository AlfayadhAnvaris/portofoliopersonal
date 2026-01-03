import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const roles = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Problem Solver',
  'Creative Thinker',
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

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
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated gradient orbs */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] animate-pulse-glow"
        style={{
          left: '20%',
          top: '30%',
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/20 blur-[80px] animate-pulse-glow"
        style={{
          right: '20%',
          bottom: '30%',
          animationDelay: '1.5s',
          transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Geometric lines in background */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <svg className="w-[600px] h-[600px] opacity-10 animate-spin-slow" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.3" transform="rotate(15 50 50)" />
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" transform="rotate(30 50 50)" />
        </svg>
      </div>
      
      {/* Floating geometric particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 border border-primary/30 rotate-45 animate-float"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile with glassmorphism effect */}
          <div className="mb-8 animate-scale-in group relative">
            {/* Glow effect behind */}
            <div 
              className="absolute inset-0 w-40 h-40 rounded-full bg-primary/40 blur-2xl animate-pulse"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              }}
            />
            <div 
              className="absolute inset-0 w-40 h-40 rounded-full bg-accent/30 blur-3xl"
              style={{
                transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
                animationDelay: '0.5s',
              }}
            />
            
            {/* Glass avatar container */}
            <div 
              className="relative w-40 h-40 rounded-full backdrop-blur-xl bg-card/30 shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                border: '1px solid hsl(var(--primary) / 0.2)',
              }}
            >
              {/* Inner subtle ring */}
              <div className="absolute inset-2 rounded-full border border-primary/10" />
              {/* Professional placeholder avatar */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 relative z-10">
                <svg 
                  className="w-24 h-24 text-primary/60 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Title with gradient animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text animate-pulse">John Doe</span>
          </h1>

          {/* Typing effect subtitle */}
          <div className="h-12 md:h-14 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">{displayText}</span>
              <span className="animate-pulse text-primary">|</span>
              <span className="text-primary">/&gt;</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Crafting beautiful digital experiences with clean code and creative design.
            Passionate about building innovative solutions.
          </p>

          {/* Interactive Social Links */}
          <div className="flex gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {[
              { icon: Github, href: '#', label: 'GitHub', delay: 0 },
              { icon: Linkedin, href: '#', label: 'LinkedIn', delay: 0.1 },
              { icon: Mail, href: '#contact', label: 'Email', delay: 0.2 },
            ].map(({ icon: Icon, href, label, delay }) => (
              <a
                key={label}
                href={href}
                className="group w-14 h-14 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:box-glow relative overflow-visible border border-border hover:border-primary/50"
                style={{ animationDelay: `${delay}s` }}
                data-hover
                aria-label={label}
              >
                <Icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute -bottom-8 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA Buttons with pulse effect */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <a
              href="#skills"
              className="group px-8 py-3 gradient-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:box-glow relative overflow-hidden"
              data-hover
            >
              <span className="relative z-10">Explore My Skills</span>
              <div className="absolute inset-0 bg-accent/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
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
              className="group px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-border hover:border-primary/50 relative overflow-hidden"
              data-hover
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Stats counter */}
          <div className="flex gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label} className="text-center group cursor-default" data-hover>
                <p className="text-3xl md:text-4xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator with animation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            Scroll Down
          </span>
          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors animate-bounce" data-hover>
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
