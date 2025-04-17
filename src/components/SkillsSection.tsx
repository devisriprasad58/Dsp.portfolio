
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
    category: 'Programming',
    skills: [
      { name: 'Java 8/11', level: 95 },
      { name: 'Python 3.x', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 90 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Spring Boot', level: 95 },
      { name: 'Spring Cloud', level: 90 },
      { name: 'Microservices', level: 92 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'ORM', level: 85 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 90 },
      { name: 'BitBucket', level: 85 },
      { name: 'JIRA', level: 92 },
      { name: 'IntelliJ IDEA', level: 95 },
    ],
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('Programming');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section id="skills" className="py-24 bg-white dark:bg-tech-blue" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center scroll-animate">Technical Expertise</h2>
        <div className="h-1 w-20 bg-tech-accent mx-auto mb-12 scroll-animate" style={{ transitionDelay: '100ms' }}></div>
        
        <Tabs defaultValue="Programming" className="w-full max-w-4xl mx-auto">
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
