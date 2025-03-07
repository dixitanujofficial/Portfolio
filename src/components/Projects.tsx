
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project One",
      description: "A comprehensive solution that addressed key challenges and delivered exceptional results for the client.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Project Two",
      description: "An innovative application that streamlined processes and improved user engagement metrics.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Next.js", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Project Three",
      description: "A creative solution that incorporated cutting-edge technologies and resulted in significant business improvements.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Project Four",
      description: "A user-centered design that focused on accessibility and resulted in a 40% increase in user satisfaction.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      tags: ["React Native", "Firebase", "Redux"],
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
