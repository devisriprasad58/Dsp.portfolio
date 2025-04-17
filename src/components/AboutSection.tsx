
import React, { useEffect, useRef } from 'react';
import { Code } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-tech-gray-dark"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-2 scroll-animate">About Me</h2>
            <div className="h-1 w-20 bg-tech-accent mb-8 scroll-animate" style={{ transitionDelay: '100ms' }}></div>
            
            <p className="text-lg mb-6 scroll-animate" style={{ transitionDelay: '200ms' }}>
              I'm a Full Stack Java Developer with expertise in building enterprise-level 
              applications using Spring Boot microservices architecture and React.js.
            </p>
            
            <p className="text-lg mb-6 scroll-animate" style={{ transitionDelay: '300ms' }}>
              With a demonstrated track record of creating scalable solutions, I've enhanced system 
              performance by 30% and improved user engagement by 25%. I'm proficient in Agile methodologies, 
              test-driven development, and CI/CD pipelines.
            </p>
            
            <p className="text-lg scroll-animate" style={{ transitionDelay: '400ms' }}>
              I thrive in technology-focused environments where I can leverage my experience in 
              full-stack development, cloud computing, and DevOps practices to drive innovation.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 scroll-animate" style={{ transitionDelay: '500ms' }}>
            <div className="code-block">
              <span className="code-line">
                <span className="code-comment">// Professional Summary</span>
              </span>
              <span className="code-line">
                <span className="code-keyword">const</span>{" "}
                <span className="code-function">developerProfile</span> = {"{"}
              </span>
              <span className="code-line pl-4">
                name: <span className="code-string">"Devi Sri Prasad Reddy"</span>,
              </span>
              <span className="code-line pl-4">
                role: <span className="code-string">"Full Stack Java Developer"</span>,
              </span>
              <span className="code-line pl-4">
                location: <span className="code-string">"Hyderabad, India"</span>,
              </span>
              <span className="code-line pl-4">
                experience: {"{"}
              </span>
              <span className="code-line pl-8">
                java: <span className="code-string">"Expert"</span>,
              </span>
              <span className="code-line pl-8">
                springBoot: <span className="code-string">"Advanced"</span>,
              </span>
              <span className="code-line pl-8">
                microservices: <span className="code-string">"Proficient"</span>,
              </span>
              <span className="code-line pl-8">
                reactJs: <span className="code-string">"Intermediate+"</span>,
              </span>
              <span className="code-line pl-4">
                {"}"},
              </span>
              <span className="code-line pl-4">
                achievements: [
              </span>
              <span className="code-line pl-8">
                <span className="code-string">"Enhanced system performance by 30%"</span>,
              </span>
              <span className="code-line pl-8">
                <span className="code-string">"Improved user engagement by 25%"</span>,
              </span>
              <span className="code-line pl-8">
                <span className="code-string">"Reduced deployment time by 50%"</span>,
              </span>
              <span className="code-line pl-8">
                <span className="code-string">"Increased test coverage from 65% to 92%"</span>
              </span>
              <span className="code-line pl-4">
                ],
              </span>
              <span className="code-line pl-4">
                focusAreas: [
              </span>
              <span className="code-line pl-8">
                <span className="code-string">"Enterprise Applications"</span>,
              </span>
              <span className="code-line pl-8">
                <span className="code-string">"Microservices Architecture"</span>,
              </span>
              <span className="code-line pl-8">
                <span className="code-string">"Cloud Computing"</span>,
              </span>
              <span className="code-line pl-8">
                <span className="code-string">"DevOps Practices"</span>
              </span>
              <span className="code-line pl-4">
                ]
              </span>
              <span className="code-line">
                {"}"};
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
