import CustomCursor from '@/components/CustomCursor';
import GeometricBackground from '@/components/GeometricBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <GeometricBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
