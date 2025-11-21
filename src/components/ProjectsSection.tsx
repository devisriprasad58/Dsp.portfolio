
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
    title: 'Full-Stack Web Application',
    role: 'Full Stack Developer',
    period: 'Recent Project',
    description: 'Developed a complete full-stack web application with RESTful backend and React frontend, incorporating AI-assisted development practices.',
    achievements: [
      'Developed RESTful backend using Spring Boot and MySQL with CRUD operations; applied DSA basics and OOP design patterns',
      'Created React.js frontend with clean code practices; used AI-assisted code review and debugging to improve code quality, fix logic issues, and maintain consistency',
      'Leveraged AI debugging tools to speed up bug identification, refine code structure, and enhance overall maintainability',
      'Designed normalized database schema and tested APIs using Postman; documented workflows for seamless team collaboration',
    ],
    technologies: ['Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'AI-Assisted Development', 'Postman', 'Git'],
    stats: [
      { icon: <CircleDot size={18} />, label: 'CRUD Operations', value: 'Full' },
      { icon: <GitBranch size={18} />, label: 'Code Quality', value: 'High' },
      { icon: <LineChart size={18} />, label: 'Maintainability', value: 'Enhanced' },
      { icon: <Users size={18} />, label: 'Collaboration', value: 'Seamless' },
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
