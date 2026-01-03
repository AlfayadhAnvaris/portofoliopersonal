import { useState, useRef, useMemo } from 'react';
import {
  Code,
  Palette,
  Server,
  Smartphone,
  ExternalLink,
  Github,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CameraIcon,
  Globe,
  Layers,
} from 'lucide-react';

/* ===================== TYPES ===================== */

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

/* ===================== DATA ===================== */

const skillsData: Skill[] = [
  {
    id: 'frontend',
    icon: Code,
    title: 'Web Development',
    description:
      'Building responsive and scalable web applications with modern technologies.',
    technologies: ['JavaScript', 'React', 'TypeScript', 'PHP', 'Laravel'],
    projects: [
      {
        title: 'Travel Umroh Management App',
        description:
          'A web-based system to manage pilgrims, schedules, payments, and travel information for Umrah agencies.',
        image: 'travelproject.png',
        tech: 'Laravel, PHP, MySQL',
        github: 'https://github.com/AlfayadhAnvaris/ProjectUmroh',
      },
      {
        title: 'Public Complaint Management App',
        description:
          'A digital platform for submitting, tracking, and responding to public service complaints.',
        image: 'publiccomplaintproject.png',
        tech: 'Laravel, PHP, MySQL',
        github: 'https://github.com/AlfayadhAnvaris/cepu',
      },
      {
        title: 'Progressly Project Management',
        description:
          'A Kanban-based task management system with drag-and-drop workflow visualization.',
        image: 'progressly.png',
        tech: 'Laravel Livewire, Tailwind CSS',
        github:
          'https://github.com/AlfayadhAnvaris/project-website-taskify-muhammad-alfayad-anvaris-240258302055-',
      },
    ],
  },

  {
    id: 'backend',
    icon: Server,
    title: 'Backend Development',
    description:
      'Designing robust server-side logic, databases, and APIs.',
    technologies: ['Node.js', 'PostgreSQL', 'REST API'],
    projects: [],
  },

  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Building cross-platform mobile applications with Flutter.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    projects: [
      {
        title: 'QuickTix App',
        description:
          'A mobile ticketing application with digital booking and ticket management.',
        image: 'quicktix.png',
        tech: 'Flutter, Dart, Firebase',
        github: 'https://github.com/AlfayadhAnvaris/ticketing_apps',
      },
      {
        title: 'Ayo Piknik',
        description:
          'A travel discovery app for finding picnic destinations and planning trips.',
        image: 'ayopiknik.png',
        tech: 'Flutter, Dart, Google Maps API',
        github: 'https://github.com/AlfayadhAnvaris/ayo_piknik',
      },
      {
        title: 'Talaqqi App',
        description:
          'An offline-first Islamic learning app with audio-based content.',
        image: 'thuba.png',
        tech: 'Flutter, Dart, SQLite',
        github: 'https://github.com/AlfayadhAnvaris/flutterfp',
      },
    ],
  },

  {
    id: 'graphic-design',
    icon: Palette,
    title: 'Graphic & UI Design',
    description:
      'Creating clean, informative, and visually appealing designs.',
    technologies: ['Canva', 'Figma', 'Adobe Illustrator'],
    projects: [
      {
        title: 'Telur Ayam Organik Tazkia',
        description:
          'Branding and packaging design for organic egg products.',
        image: 'telurorganik.png',
        tech: 'Branding, Canva',
      },
      {
        title: 'Umrah Travel Promotion',
        description:
          'Promotional layout design for Umrah travel services.',
        image: 'canva.png',
        tech: 'Layout Design, Canva',
      },
      {
        title: 'Weekend Arabic Talk Event',
        description:
          'Poster and social media design for an Arabic learning event.',
        image: 'wat.png',
        tech: 'Poster Design, Social Media Content',
      },
    ],
  },

  {
    id: 'photography',
    icon: CameraIcon,
    title: 'Photography',
    description:
      'Capturing moments through composition, lighting, and storytelling.',
    technologies: ['Event', 'Street', 'Product Photography'],
    projects: [
      {
        title: 'Street Stories Photography',
        description:
          'Street photography capturing candid moments and daily life.',
        image: 'babsalam.jpeg',
        tech: 'Street Photography',
      },
      {
        title: 'Umroh Travel Event Documentation',
        description:
          'Event photography for Umrah travel programs.',
        image: 'belvatour.jpeg',
        tech: 'Event Photography',
      },
    ],
  },
];

/* ===================== COMPONENT ===================== */

const INITIAL_PROJECTS_COUNT = 2;

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState(skillsData[0].id);
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentSkill = skillsData.find(s => s.id === activeSkill)!;

  const displayedProjects = useMemo(() => {
    if (expanded) return currentSkill.projects;
    return currentSkill.projects.slice(0, INITIAL_PROJECTS_COUNT);
  }, [expanded, currentSkill.projects]);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my skills and selected projects
          </p>
        </div>

        {/* Skill Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillsData.map(({ id, icon: Icon, title }) => (
            <button
              key={id}
              onClick={() => {
                setActiveSkill(id);
                setExpanded(false);
                contentRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-6 py-4 rounded-xl border flex items-center gap-3 transition ${
                activeSkill === id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card hover:border-primary/50'
              }`}
            >
              <Icon size={20} />
              <span>{title}</span>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>

        {/* Content */}
        <div ref={contentRef} className="grid lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="bg-card border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">{currentSkill.title}</h3>
            <p className="text-muted-foreground mb-6">
              {currentSkill.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {currentSkill.technologies.map(t => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full bg-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-2 space-y-6">
            {displayedProjects.map(project => (
              <div
                key={project.title}
                className="bg-card border rounded-xl overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover"
                />
                <div className="p-6">
                  <h4 className="font-bold mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>

                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-accent mb-4">
                    {project.tech}
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            ))}

            {currentSkill.projects.length > INITIAL_PROJECTS_COUNT && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center justify-center gap-2 py-3 border rounded-lg"
              >
                {expanded ? 'See Less' : 'See More'}
                {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
