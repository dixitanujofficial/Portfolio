import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AgriSmart Analytics",
      description: "A full-stack agricultural web application integrating AI-powered recommendation workflows to improve decision support. Built with a responsive dashboard for real-time agricultural insights, data-processing workflows, and scalable API architecture.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      demoLink: "https://agrismart-delta-five.vercel.app",
      githubLink: "https://github.com/dixitanujofficial"
    },
    {
      title: "Wanderlust Rentals",
      description: "A secure full-stack property rental platform featuring authentication, authorization, and modular MVC architecture. Implemented RESTful APIs supporting CRUD operations, search functionality, and seamless booking workflows.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      demoLink: "https://wanderlust-lisu.onrender.com",
      githubLink: "https://github.com/dixitanujofficial"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background relative z-10">
      <div className="container">
        <SectionHeading 
          eyebrow="Selected Work" 
          title="Projects & Engineering" 
          subtitle="Showcasing full-stack MERN development and AI integrations."
        />
        
        <div className="mt-16 flex flex-col gap-16 md:gap-24">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;