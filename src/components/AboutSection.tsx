import { Code, Palette, Rocket, Sparkles } from 'lucide-react';

const skills = [
  { icon: Code, title: 'Development', description: 'React, TypeScript, Node.js, Python', color: 'primary' },
  { icon: Palette, title: 'Design', description: 'Figma, UI/UX, Brand Identity', color: 'accent' },
  { icon: Rocket, title: 'Performance', description: 'Optimization, SEO, Accessibility', color: 'primary' },
  { icon: Sparkles, title: 'Innovation', description: 'AI Integration, Web3, Cloud', color: 'accent' },
];

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
  'Tailwind CSS', 'Figma', 'AWS', 'Docker', 'Git', 'GraphQL'
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with 5+ years of experience building digital products
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I started my journey in tech 5 years ago, fascinated by how code can transform ideas into reality. 
                Since then, I've worked with startups and established companies, helping them build products that 
                users love.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                My approach combines technical expertise with creative thinking, ensuring every project 
                is not just functional but also delightful to use.
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  data-hover
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map(({ icon: Icon, title, description, color }, index) => (
              <div
                key={title}
                className={`group p-6 bg-card rounded-xl border border-border hover:border-${color}/50 transition-all duration-300 hover:scale-105 hover:box-glow`}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-hover
              >
                <div className={`w-12 h-12 rounded-lg bg-${color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-${color}/20`}>
                  <Icon className={`text-${color}`} size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
