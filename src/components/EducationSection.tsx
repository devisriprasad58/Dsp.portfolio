
import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  points: string[];
}

const education: Education[] = [
  {
    institution: 'MLR Institute of Technology',
    location: 'Hyderabad, India',
    degree: 'Bachelor of Technology in Computer Science and Information Technology',
    period: '2020 - 2024',
    points: [
      'Graduated with CGPA: 6.5',
      'Relevant Coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems',
    ],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-tech-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center scroll-animate">Education</h2>
        <div className="h-1 w-20 bg-tech-accent mx-auto mb-12 scroll-animate" style={{ transitionDelay: '100ms' }}></div>
        
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={edu.institution} 
              className="relative pl-10 scroll-animate"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
              
              <div className="mb-10">
                <div className="flex items-start mb-2">
                  <GraduationCap className="text-tech-accent mr-2 flex-shrink-0 mt-1" size={20} />
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                </div>
                
                <p className="text-muted-foreground mb-2">{edu.location}</p>
                <p className="font-medium mb-1">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mb-4">{edu.period}</p>
                
                <ul className="space-y-2">
                  {edu.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <BookOpen className="text-tech-accent mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
