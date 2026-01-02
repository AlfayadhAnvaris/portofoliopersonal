import { useState, useRef } from 'react';
import { Code, Palette, Server, Smartphone, ExternalLink, Github, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
}

interface Skill {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  technologies: string[];
  projects: Project[];
}

const skillsData: Skill[] = [
  {
    id: 'frontend',
    icon: Code,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern frameworks',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    projects: [
      {
        title: 'E-Commerce Platform',
        description: 'Modern shopping experience with real-time cart updates',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
      {
        title: 'Portfolio Website',
        description: 'Interactive portfolio with geometric design',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
      {
        title: 'Dashboard Analytics',
        description: 'Real-time data visualization with interactive charts',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
      {
        title: 'Social Media App',
        description: 'Modern social platform with infinite scroll',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
    ],
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend Development',
    description: 'Designing scalable APIs and robust server-side solutions',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    projects: [
      {
        title: 'API Gateway Service',
        description: 'Microservices architecture with rate limiting',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
      {
        title: 'Real-time Chat System',
        description: 'WebSocket-based messaging with Redis caching',
        image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
      {
        title: 'Payment Processing API',
        description: 'Secure payment integration with Stripe',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
      {
        title: 'Content Management System',
        description: 'Headless CMS with GraphQL API',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
    ],
  },
  {
    id: 'design',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user experiences',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems', 'Animation'],
    projects: [
      {
        title: 'Banking App Redesign',
        description: 'Complete UX overhaul for mobile banking',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
      {
        title: 'Design System Library',
        description: 'Comprehensive component library with documentation',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
      {
        title: 'Healthcare Dashboard',
        description: 'Patient management interface with accessibility focus',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
      {
        title: 'Travel Booking Platform',
        description: 'Seamless booking experience with visual storytelling',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
    ],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'],
    projects: [
      {
        title: 'Fitness Tracker App',
        description: 'Health monitoring with workout plans',
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
      {
        title: 'Food Delivery App',
        description: 'Real-time order tracking and payments',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
      {
        title: 'Music Streaming App',
        description: 'Offline playback with personalized playlists',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
      {
        title: 'Task Management App',
        description: 'Productivity app with team collaboration',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
        github: '#',
        live: '#',
      },
    ],
  },
];

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<string>(skillsData[0].id);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentSkill = skillsData.find((s) => s.id === activeSkill)!;

  const handleSkillChange = (skillId: string) => {
    if (skillId === activeSkill || isAnimating) return;
    
    setIsAnimating(true);
    
    // Smooth scroll to content
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Trigger exit animation, then change skill
    setTimeout(() => {
      setActiveSkill(skillId);
      setTimeout(() => setIsAnimating(false), 400);
    }, 200);
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my skills and the projects I've built with each expertise area
          </p>
        </div>

        {/* Skills Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {skillsData.map(({ id, icon: Icon, title }, index) => (
            <button
              key={id}
              onClick={() => handleSkillChange(id)}
              className={`group p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                activeSkill === id
                  ? 'bg-primary text-primary-foreground border-primary box-glow scale-[1.02]'
                  : 'bg-card text-foreground border-border hover:border-primary/50 hover:scale-[1.05] hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              data-hover
            >
              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeSkill === id ? 'hidden' : ''}`} />
              
              <Icon
                size={28}
                className={`mx-auto mb-2 transition-all duration-300 group-hover:scale-125 group-hover:rotate-3 ${
                  activeSkill === id ? 'text-primary-foreground' : 'text-primary group-hover:text-primary'
                }`}
              />
              <span className="text-sm font-medium relative z-10">{title}</span>
              
              {/* Active indicator line */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-full transition-all duration-300 ${
                activeSkill === id ? 'w-1/2 bg-primary-foreground' : 'w-0 bg-primary group-hover:w-1/3'
              }`} />
            </button>
          ))}
        </div>

        {/* Active Skill Content */}
        <div 
          ref={contentRef}
          className="grid lg:grid-cols-3 gap-8 scroll-mt-24"
        >
          {/* Skill Info Card */}
          <div className="lg:col-span-1">
            <div 
              key={`info-${activeSkill}`}
              className={`bg-card rounded-xl border border-border p-6 sticky top-24 transition-all duration-400 ${
                isAnimating ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <currentSkill.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{currentSkill.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{currentSkill.description}</p>

              {/* Technologies */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {currentSkill.technologies.map((tech, idx) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full transition-all duration-300 cursor-default hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                      style={{ 
                        animationDelay: `${idx * 50}ms`,
                        opacity: isAnimating ? 0 : 1,
                        transform: isAnimating ? 'scale(0.8)' : 'scale(1)',
                        transition: `all 0.3s ease ${idx * 50}ms`
                      }}
                      data-hover
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View All Button */}
              <button
                className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-lg text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300 group overflow-hidden relative"
                data-hover
              >
                <span className="text-sm font-medium relative z-10">View All Projects</span>
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-2 space-y-6">
            {currentSkill.projects.map((project, index) => (
              <div
                key={`${activeSkill}-${project.title}`}
                className={`group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:box-glow ${
                  isAnimating ? 'opacity-0 translate-y-[20px]' : 'opacity-100 translate-y-0'
                }`}
                style={{ 
                  transitionDelay: isAnimating ? '0ms' : `${index * 100}ms`
                }}
                data-hover
              >
                <div className="flex flex-col md:flex-row">
                  {/* Project Image */}
                  <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 md:bg-gradient-to-l" />
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 p-6">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md group/link"
                        data-hover
                      >
                        <Github size={16} className="transition-transform duration-300 group-hover/link:rotate-12" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md group/link"
                        data-hover
                      >
                        <ExternalLink size={16} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
