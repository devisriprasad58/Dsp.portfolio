
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CircleDot, GitBranch, LineChart, Users } from 'lucide-react';

interface ProjectStat {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  stats: ProjectStat[];
}

const projects: Project[] = [
  {
    title: 'Enterprise Network Security Solution',
    role: 'Full Stack Developer',
    period: 'June 2023 - September 2024',
    description: 'Engineered an enterprise-grade network security application serving 12+ corporate clients with 99.9% security compliance.',
    achievements: [
      'Implemented OAuth 2.0 and JWT authentication, reducing unauthorized access attempts by 85%',
      'Designed and delivered 15+ RESTful APIs with Spring Boot, achieving 99% uptime for 8,000+ daily requests',
      'Constructed modular microservices architecture with Factory and Singleton patterns, decreasing deployment failures by 15%',
      'Established automated CI/CD pipeline using Jenkins, cutting deployment time by 50% and enabling 3x more frequent releases',
      'Expanded test coverage from 65% to 92% using JUnit and Mockito, reducing post-release bugs by 60%',
      'Facilitated bi-weekly code reviews, resulting in 30% reduction in technical debt',
      'Guided 3 junior developers through 4 major releases, increasing team velocity by 35%',
    ],
    technologies: ['Java 11', 'Spring Boot', 'OAuth 2.0', 'JWT', 'RESTful APIs', 'Microservices', 'Jenkins', 'JUnit', 'Mockito'],
    stats: [
      { icon: <Users size={18} />, label: 'Corporate Clients', value: '12+' },
      { icon: <LineChart size={18} />, label: 'Security Compliance', value: '99.9%' },
      { icon: <CircleDot size={18} />, label: 'API Uptime', value: '99%' },
      { icon: <GitBranch size={18} />, label: 'Major Releases', value: '4' },
    ]
  },
  {
    title: 'Healthcare Analytics Platform',
    role: 'Backend Developer',
    period: 'April 2023 - June 2024',
    description: 'Architected a microservices-based healthcare platform using Spring Cloud and React.js, enabling 4,000+ daily users across 8 healthcare facilities.',
    achievements: [
      'Architected microservices-based healthcare platform using Spring Cloud and React.js',
      'Orchestrated real-time data processing pipeline handling 800K+ events daily with 99.7% delivery reliability',
    ],
    technologies: ['Spring Cloud', 'React.js', 'Real-time Processing', 'Microservices'],
    stats: [
      { icon: <Users size={18} />, label: 'Daily Users', value: '4,000+' },
      { icon: <LineChart size={18} />, label: 'Delivery Reliability', value: '99.7%' },
      { icon: <CircleDot size={18} />, label: 'Healthcare Facilities', value: '8' },
      { icon: <GitBranch size={18} />, label: 'Daily Events Processed', value: '800K+' },
    ]
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-tech-gray-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center scroll-animate">Professional Projects</h2>
        <div className="h-1 w-20 bg-tech-accent mx-auto mb-12 scroll-animate" style={{ transitionDelay: '100ms' }}></div>
        
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <Card key={project.title} className="project-card scroll-animate" style={{ transitionDelay: `${idx * 200}ms` }}>
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                    <CardDescription className="mt-2 text-base">
                      <span className="font-medium">{project.role}</span> • {project.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p>{project.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="border-t pt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="mb-2 text-tech-accent">
                        {stat.icon}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                      <div className="font-bold text-lg">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
