import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('https://formspree.io/f/myzkqaow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    }
  } catch (error) {
    toast({
      title: 'Network Error',
      description: 'Something went wrong. Please try again later.',
      variant: 'destructive',
    });
  }
};


  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:hello@johndoe.com" 
                  className="flex items-center gap-4 p-3 rounded-lg -mx-3 hover:bg-accent/50 transition-all duration-300 group"
                  data-hover
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Mail className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground group-hover:text-primary transition-colors font-medium">
                      alfayadhanvaris@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-lg -mx-3 hover:bg-accent/50 transition-all duration-300 group cursor-default" data-hover>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <MapPin className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Bukittinggi, West Sumatra, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative geometric shapes */}
            <div className="hidden lg:flex gap-4 justify-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 border border-primary/30 rotate-45 animate-float"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg space-y-6">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-primary">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50"
                placeholder="Your name"
                required
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-primary">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-primary">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none hover:border-primary/50"
                placeholder="Any some good?"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 gradient-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:box-glow group overflow-hidden relative"
              data-hover
            >
              <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-accent/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
