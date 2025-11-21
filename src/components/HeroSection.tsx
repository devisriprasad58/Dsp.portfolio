
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Linkedin, Phone } from 'lucide-react';

interface TypedTextProps {
  texts: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}

const TypedText: React.FC<TypedTextProps> = ({
  texts,
  typingSpeed = 100,
  deleteSpeed = 50,
  delayBetween = 1000,
}) => {
  useEffect(() => {
    const element = document.querySelector('.typed-text');
    if (!element) return;

    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingTimeout: NodeJS.Timeout;

    const type = () => {
      const currentText = texts[currentTextIndex];
      
      if (isDeleting) {
        element.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
      } else {
        element.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
      }

      // Check if typing is complete
      if (!isDeleting && currentCharIndex === currentText.length) {
        isDeleting = true;
        typingTimeout = setTimeout(type, delayBetween);
      } 
      // Check if deletion is complete
      else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        typingTimeout = setTimeout(type, 500);
      } 
      // Continue typing or deleting
      else {
        const speed = isDeleting ? deleteSpeed : typingSpeed;
        typingTimeout = setTimeout(type, speed);
      }
    };

    // Start the typing animation
    type();

    // Cleanup the timeout on unmount
    return () => clearTimeout(typingTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className="typed-text"></span>;
};

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="hero-gradient absolute inset-0 opacity-10 dark:opacity-20"></div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Devi Sri Prasad Reddy
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-tech-blue-light dark:text-tech-highlight animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <span className="font-mono">{'{'}</span> Full Stack Developer <span className="font-mono">{'}'}</span>
          </h2>
          <div className="text-xl md:text-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            I'm a{' '}
            <TypedText texts={["React developer.", "problem solver.", "backend architect.", "AI enthusiast.", "passionate coder."]} />
          </div>
          
          <p className="text-lg mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '900ms' }}>
            Building full-stack applications with modern technologies including React, 
            Spring Boot, and AI integration. Passionate about creating scalable solutions 
            with clean code practices and innovative problem-solving.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
            <Button className="flex items-center gap-2" asChild>
              <a href="#contact">
                <Mail size={18} />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 animate-fade-in-up" style={{ animationDelay: '1500ms' }}>
            <a 
              href="mailto:reddydevisriprasad@gmail.com" 
              className="text-tech-gray hover:text-tech-accent transition-colors flex items-center gap-1"
            >
              <Mail size={18} />
              <span className="hidden md:inline">reddydevisriprasad@gmail.com</span>
            </a>
            <a 
              href="tel:+917989563371" 
              className="text-tech-gray hover:text-tech-accent transition-colors flex items-center gap-1"
            >
              <Phone size={18} />
              <span>+91 7989563371</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/devi-sri-prasad-reddy-178303262" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tech-gray hover:text-tech-accent transition-colors flex items-center gap-1"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-light">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-tech-accent" />
        </a>
      </div>
    </section>
  );
}
