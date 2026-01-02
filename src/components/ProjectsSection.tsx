import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payments, and admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    title: 'AI Chat Application',
    description: 'Intelligent chatbot platform with natural language processing and custom training.',
    tags: ['TypeScript', 'Python', 'OpenAI', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative workspace with real-time updates, Kanban boards, and team analytics.',
    tags: ['React', 'GraphQL', 'MongoDB', 'AWS'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio with interactive animations, custom cursor, and geometric design.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
];

const INITIAL_DISPLAY = 2;

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <div
    className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:box-glow"
    data-hover
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
      <div className="absolute top-4 right-4 w-10 h-10 rounded-lg gradient-primary opacity-90 flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.github} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-hover>
          <Github size={18} />
          <span className="text-sm">Code</span>
        </a>
        <a href={project.live} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors" data-hover>
          <ExternalLink size={18} />
          <span className="text-sm">Live Demo</span>
        </a>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = projects.slice(0, INITIAL_DISPLAY);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {projects.length > INITIAL_DISPLAY && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              onClick={() => setShowAllProjects(true)}
              className="border-border hover:border-primary hover:bg-primary/10"
              data-hover
            >
              View All Projects ({projects.length})
            </Button>
          </div>
        )}

        <Dialog open={showAllProjects} onOpenChange={setShowAllProjects}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl gradient-text">All Projects</DialogTitle>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
