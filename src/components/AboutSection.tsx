import { CameraIcon, Code, MonitorSmartphone, Palette, Rocket, Sparkles } from "lucide-react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGit,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaLinux,
} from "react-icons/fa";
import {
  SiDart,
  SiExpress,
  SiFlutter,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiTailwindcss,
  SiLaravel,
  SiFigma,
  SiCanva,
  SiReact,
  SiAdobe,
} from "react-icons/si";

/* =======================
   Skills Data
======================= */
const skills = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "JavaScript, Node.js, PHP, Laravel, Python, Flutter, Dart",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Figma, Canva, UI Design, Visual Design",
  },
  {
    icon: MonitorSmartphone,
    title: "Multi App Development",
    description: "React, Flutter, Dart",
  },
  {
    icon: CameraIcon,
    title: "Photographic",
   description: "Skilled in photography and basic videography, using CapCut, Snapseed, Adobe",
  },
];

/* =======================
   Technologies Data
======================= */
const technologies = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },

  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "Python", icon: <FaPython /> },

  { name: "Dart", icon: <SiDart /> },
  { name: "Flutter", icon: <SiFlutter /> },

  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },


  { name: "Git", icon: <FaGit /> },

  { name: "Figma", icon: <SiFigma /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "Adobe", icon: <SiAdobe /> },
];

/* =======================
   About Section Component
======================= */
const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Junior Developer | Lifelong Learner | Technology Enthusiast
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Story */}
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4">HI, I'm <span className="font-bold text-primary underline underline-offset-4 decoration-primary/40">
           Muhammad Alfayad Anvaris
          </span>
         </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a 20-year-old junior software developer with a strong
                educational and religious background, having studied at an
                Islamic boarding school (pesantren) and completed the
                memorization of the Qur’an (30 juz). I am fluent in Arabic and
                English, enabling effective communication across diverse
                environments.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                I have a strong interest in programming and photography, and I
                enjoy exploring technology through hands-on projects. I am
                highly motivated to learn, continuously improve my skills, and
                stay current with modern technological trends. I am open to
                collaboration and passionate about building meaningful and
                impactful digital solutions.
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{title}</h4>
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
