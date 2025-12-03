import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated hexagons in background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] hexagon gradient-primary opacity-5 animate-spin-slow" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] h-[400px] hexagon border-2 border-primary/20 animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile hexagon */}
          <div className="mb-8 animate-scale-in">
            <div className="w-40 h-40 hexagon gradient-primary p-1 box-glow">
              <div className="w-full h-full hexagon bg-card flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">John Doe</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Full Stack Developer & UI/UX Designer
          </p>

          {/* Description */}
          <p className="text-muted-foreground mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Crafting beautiful digital experiences with clean code and creative design.
            Passionate about building innovative solutions.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 hexagon bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300 hover:scale-110 hover:box-glow"
                data-hover
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <a
              href="#projects"
              className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 hover:box-glow"
              data-hover
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-300 hover:scale-105 border border-border"
              data-hover
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" data-hover>
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
