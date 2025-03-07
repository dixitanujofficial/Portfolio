
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with user authentication, product catalog, cart management, and payment integration.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity application that helps users organize tasks, set deadlines, and track progress on personal and team projects.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "A messaging platform with real-time communication, user profiles, file sharing, and notification system.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      tags: ["React", "Socket.io", "Express", "MongoDB"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive and interactive personal portfolio showcasing skills, experience, and projects with modern design elements.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container">
        <SectionHeading 
          title="Featured Projects"
          subtitle="Some of my recent work"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
