import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
           <div className="w-10 h-10 rounded-lg backdrop-blur-md bg-card/40 
                flex items-center justify-center
                transition-all duration-300 group-hover:scale-110 
                group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
          <img src="avatar.png" alt="" />
</div>

            <span className="font-bold text-foreground">Ashf1del</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com/AlfayadhAnvaris', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/alfayadh-anvaris-937336317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://www.instagram.com/al.anvaris._/', label: 'Instagram' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
                aria-label={label}
                data-hover
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
             Ashf1del.
            © {currentYear} 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
