import { useState, useRef } from 'react';
import { 
  Code, 
  Palette, 
  Smartphone, 
  ExternalLink, 
  Github, 
  ChevronRight, 
  CameraIcon,
  Globe,
  Layers,
} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string;
  github?: string;
  live?: string;
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
    title: 'Web Development',
    description: 'Building responsive and interactive user interfaces with modern frameworks',
    technologies: ['Javascript','React', 'TypeScript',  'PHP', 'Laravel'],
    projects: [
      {
        title: 'Travel Umroh Management App',
        description: 'A comprehensive management system for Umrah travel agencies to organize pilgrim data, schedules, payments, and travel documentation efficiently.',
        image: 'travelproject.png',
        tech: 'Laravel, PHP, MySQL, Bootstrap',
        github: 'https://github.com/AlfayadhAnvaris/ProjectUmroh',
      },
      {
        title: 'Public Complaint Management App',
        description: 'A digital platform enabling citizens to submit, track, and receive transparent responses to public complaints and service requests.',
        image: 'publiccomplaintproject.png',
        tech: 'Laravel, PHP, MySQL, JavaScript',
        github: 'https://github.com/AlfayadhAnvaris/cepu',
      },
      {
        title: 'Progressly Project Management',
        description: 'A Kanban-based project management tool with drag-and-drop functionality for visualizing workflows and tracking team productivity.',
        image: 'progressly.png',
        tech: 'Laravel Livewire, PHP, Tailwind CSS, Alpine.js',
        github: 'https://github.com/AlfayadhAnvaris/project-website-taskify-muhammad-alfayad-anvaris-240258302055-',
      },
    ],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications with Flutter for iOS and Android',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Provider', 'REST API'],
    projects: [
      {
        title: 'QuickTix App',
        description: 'A mobile ticketing platform with real-time event browsing, secure booking, and digital ticket management for seamless event experiences.',
        image: 'quicktix.png',
        tech: 'Flutter, Dart, Firebase, REST API',
        github: 'https://github.com/AlfayadhAnvaris/ticketing_apps',
      },
      {
        title: 'Ayo Piknik',
        description: 'A travel discovery app featuring curated picnic spots, attraction guides, and activity planning with offline accessibility.',
        image: 'ayopiknik.png',
        tech: 'Flutter, Dart, Google Maps API, Local Storage',
        github: 'https://github.com/AlfayadhAnvaris/ayo_piknik/tree/main/ayo_piknik',
      },
      {
        title: 'Talaqqi App',
        description: 'An offline-first educational platform for Islamic learning with personalized audio playlists and progress tracking.',
        image: 'thuba.png',
        tech: 'Flutter, Dart, Audio Players, SQLite',
        github: 'https://github.com/AlfayadhAnvaris/flutterfp',
      },
    ],
  },
  {
    id: 'design',
    icon: Palette,
    title: ' Design',
    description: 'Creating intuitive and visually appealing user experiences',
    technologies: ['Figma', 'Adobe Illustrator', 'Canva', 'Prototyping', 'Wireframing'],
    projects: [
      {
        title: 'Telur Ayam Organik Tazkia',
        description: 'Complete branding design for organic eggs, including packaging, logo, and marketing materials emphasizing natural and healthy values.',
        image: 'telurorganik.png',
        tech: 'Canva, Branding Design',
      },
      {
        title: 'Travel Umroh Layout Design',
        description: 'Promotional layout and visual identity for Umrah travel packages with Islamic-themed aesthetics and clear information hierarchy.',
        image: 'canva.png',
        tech: 'Canva, Layout Design, Visual Communication',
      },
      {
        title: 'Weekend Arabic Talk Event',
        description: 'Event branding and promotional materials including posters, social media graphics, and digital invitations for Arabic language learning event.',
        image: 'wat.png',
        tech: 'Poster Design, Social Media Graphics, Event Branding',
      },
    ],
  },
  {
    id: 'photography',
    icon: CameraIcon,
    title: 'Photography',
    description: 'Capturing moments through creative composition and storytelling',
    technologies: ['Lightroom', 'Snapseed', 'VSCO'],
    projects: [
      {
        title: 'Street Stories Photography',
        description: 'A street photography series capturing candid moments, urban life, and cultural narratives in public spaces.',
        image: 'babsalam.jpeg',
        tech: 'Lightroom, Typograph'  
      },
      {
        title: 'Umroh Travel Event Documentation',
        description: 'Event photography coverage for Umrah travel programs, highlighting key sessions, atmosphere, and participant engagement.',
        image: 'belvatour.jpeg',
        tech: 'Product Photography, Studio Lighting, Composition',
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
      {/* Background Elements - DIKEMBALIKAN KE SEBELUMNYA */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore my skills and the projects I've built with each expertise area
          </p>
        </div>

        {/* Skills Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillsData.map(({ id, icon: Icon, title }, index) => (
            <button
              key={id}
              onClick={() => handleSkillChange(id)}
              className={`group px-6 py-4 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-center gap-3 min-w-[180px] ${
                activeSkill === id
                  ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.02]'
                  : 'bg-card border-border hover:border-primary/30 hover:bg-card/80 hover:shadow-md'
              }`}
            >
              <div className={`p-2 rounded-lg transition-all duration-300 ${
                activeSkill === id 
                  ? 'bg-primary-foreground/20' 
                  : 'bg-primary/10 group-hover:bg-primary/20'
              }`}>
                <Icon size={20} className={activeSkill === id ? 'text-primary-foreground' : 'text-primary'} />
              </div>
              <span className="font-medium">{title}</span>
              <ChevronRight 
                size={16} 
                className={`ml-auto transition-all duration-300 ${
                  activeSkill === id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`}
              />
              
              {/* Active indicator */}
              {activeSkill === id && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full" />
              )}
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
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <currentSkill.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{currentSkill.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{currentSkill.description}</p>

              {/* Technologies */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {currentSkill.technologies.map((tech, idx) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-accent text-accent-foreground text-xs rounded-lg transition-all duration-300 cursor-default hover:scale-105"
                      style={{ 
                        animationDelay: `${idx * 50}ms`,
                        opacity: isAnimating ? 0 : 1,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-2 space-y-6">
            {currentSkill.projects.map((project, index) => (
              <div
                key={`${activeSkill}-${project.title}`}
                className={`group bg-card rounded-xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-lg ${
                  isAnimating ? 'opacity-0 translate-y-[20px]' : 'opacity-100 translate-y-0'
                }`}
                style={{ 
                  transitionDelay: isAnimating ? '0ms' : `${index * 100}ms`
                }}
              >
                {/* Project Content */}
                <div className="flex flex-col md:flex-row">
                  {/* Project Image */}
                  <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 md:bg-gradient-to-l" />
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        
                        {/* Technology Badge */}
                        <div className="mb-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm border border-primary/20">
                            <Layers size={14} />
                            {project.tech}
                          </span>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="mt-auto">
                        <div className="flex gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 group/link"
                            >
                              <Github size={16} />
                              <span className="text-sm font-medium">Source Code</span>
                              <ExternalLink 
                                size={14} 
                                className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
                              />
                            </a>
                          )}
                          
                          {/* For design and photography, show different link */}
                          {(currentSkill.id === 'design' || currentSkill.id === 'photography') && (
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                // For now, just show an alert since we don't have live links
                                alert(`View ${project.title} - Coming Soon`);
                              }}
                              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md"
                            >
                              <Globe size={16} />
                              <span className="text-sm font-medium">View Project</span>
                            </a>
                          )}
                        </div>
                      </div>
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