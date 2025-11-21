
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 85 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React 18+', level: 90 },
      { name: 'Angular', level: 75 },
      { name: 'React Router', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'REST APIs', level: 90 },
      { name: 'API Integration', level: 88 },
      { name: 'PostgreSQL', level: 85 },
    ],
  },
  {
    category: 'AI/LLM',
    skills: [
      { name: 'Google Gemini', level: 80 },
      { name: 'LLM API Integration', level: 82 },
      { name: 'Prompt Engineering', level: 85 },
      { name: 'AI-Assisted Dev', level: 88 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 92 },
      { name: 'Postman', level: 88 },
      { name: 'Agile/SDLC', level: 85 },
    ],
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('Languages');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section id="skills" className="py-24 bg-white dark:bg-tech-blue" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center scroll-animate">Technical Expertise</h2>
        <div className="h-1 w-20 bg-tech-accent mx-auto mb-12 scroll-animate" style={{ transitionDelay: '100ms' }}></div>
        
        <Tabs defaultValue="Languages" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {skills.map((category) => (
              <TabsTrigger 
                key={category.category}
                value={category.category}
                className="text-sm md:text-base"
                onClick={() => setActiveTab(category.category)}
              >
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skills.map((category) => (
            <TabsContent key={category.category} value={category.category} className="mt-6">
              <div className="grid gap-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="scroll-animate" style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skills-bar">
                      <div 
                        className="skills-progress"
                        style={{ 
                          width: inView && activeTab === category.category ? `${skill.level}%` : '0%',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
