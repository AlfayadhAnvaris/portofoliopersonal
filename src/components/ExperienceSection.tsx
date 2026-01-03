import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
  technologies: string[];
}

const experienceData: Experience[] = [
{
  id: 'exp-1',
  title: 'Muthawwif, Media and Marketing Specialist',
  company: 'Umrah & Hajj Travel',
  location: 'Solo, Central Java, Indonesia',
  type: 'Freelance',
  startDate: 'Dec 2024',
  endDate: 'Present',
  description:
    'Serving as a Muthawwif while managing media and marketing activities for Umrah travel programs, including event documentation, promotional content creation, and digital branding.',
  achievements: [
    'Guided Umrah pilgrims during rituals and provided religious assistance throughout the program',
    'Produced photo and video documentation for Umrah events and promotional materials',
    'Contributed to increasing brand visibility through consistent social media content and marketing campaigns',
  ],
  technologies: ['Photography', 'Videography', 'Canva', 'Social Media Marketing'],
},
{
  id: 'exp-2',
  title: 'Faroidh Teacher',
  company: 'Markaz Mulazamah Yassalam',
  location: 'Solo, Central Java, Indonesia',
  type: 'Full-time',
  startDate: 'July 2023',
  endDate: 'Dec 2023',
  description:
    'Taught Islamic inheritance law (Faroidh) to students, focusing on conceptual understanding, case-based discussions, and practical problem-solving.',
  achievements: [
    'Delivered structured Faroidh lessons to students with varying educational backgrounds',
    'Helped students understand complex inheritance calculations through simplified teaching methods',
    'Prepared learning materials and case studies for effective classroom discussions',
  ],
  technologies: ['Faroidh Studies', 'Islamic Education', 'Teaching Methodology'],
},

 {
  id: 'exp-3',
  title: 'Tahsin & Tajwid Al-Qur’an Teacher',
  company: 'Tahsin Quran Online',
  location: 'Solo, Central Java, Indonesia',
  type: 'Part-time',
  startDate: 'June 2024',
  endDate: 'Dec 2024',
  description:
    'Teaching Tahsin and Tajwid of the Qur’an to children and adults through online learning sessions, focusing on proper pronunciation and recitation rules.',
  achievements: [
    'Conducted regular online Qur’an recitation classes for children and adult learners',
    'Assisted students in improving makharijul huruf and tajwid accuracy',
    'Provided personalized feedback to help students progress consistently',
  ],
  technologies: ['Online Teaching', 'Tajwid', 'Tahsin', 'Zoom', 'Google Meet'],
},

];

const ExperienceSection = () => {
  const [expandedExp, setExpandedExp] = useState<string | null>(experienceData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedExp(expandedExp === id ? null : id);
  };

  const getTypeColor = (type: Experience['type']) => {
    switch (type) {
      case 'Full-time':
        return 'bg-primary/20 text-primary';
      case 'Part-time':
        return 'bg-blue-500/20 text-blue-400';
      case 'Contract':
        return 'bg-purple-500/20 text-purple-400';
      case 'Freelance':
        return 'bg-green-500/20 text-green-400';
      case 'Internship':
        return 'bg-orange-500/20 text-orange-400';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30 z-10" />

              {/* Date Badge (Desktop) */}
              <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
              </div>

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div
                  className={`bg-card rounded-xl border border-border p-6 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${
                    expandedExp === exp.id ? 'border-primary/50' : ''
                  }`}
                  onClick={() => toggleExpand(exp.id)}
                  data-hover
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                        {/* Date Badge (Mobile) */}
                        <span className="md:hidden flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-primary" />
                        <span className="text-primary font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <button className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      {expandedExp === exp.id ? (
                        <ChevronUp size={18} className="text-muted-foreground" />
                      ) : (
                        <ChevronDown size={18} className="text-muted-foreground" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedExp === exp.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;
