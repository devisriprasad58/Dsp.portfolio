
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Implement scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      scrollElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Smooth scroll to section when clicking on nav links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
          }, 0);
        }
      }
    };

    // Trigger on initial load
    handleHashChange();

    // Add event listeners
    window.addEventListener('hashchange', handleHashChange);

    // Handle click events on nav links
    const handleNavLinkClick = (e: MouseEvent) => {
      const link = e.target as HTMLElement;
      if (link.tagName === 'A' && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const hash = link.getAttribute('href') || '';
        window.history.pushState(null, '', hash);
        handleHashChange();
      }
    };

    document.addEventListener('click', handleNavLinkClick);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleNavLinkClick);
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
