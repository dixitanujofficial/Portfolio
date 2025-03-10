
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Wanderlust",
      description: "A cutting-edge travel platform inspired by Airbnb. Features include secure authentication, map integration, MVC architecture, and intuitive UI built with MongoDB, Express.js, Node.js, and Bootstrap.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
      tags: ["MongoDB", "Express.js", "Node.js", "Bootstrap", "MVC"],
      demoLink: "https://wanderlust-1isu.onrender.com/listings",
      githubLink: "#"
    },
    {
      title: "Coming Soon",
      description: "An exciting new project currently in development. Stay tuned for updates on this innovative solution.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Next.js", "TypeScript"],
      isComingSoon: true
    },
    {
      title: "Coming Soon",
      description: "Another innovative project on the horizon. More details will be revealed in the near future.",
      image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop",
      tags: ["MERN Stack", "Tailwind CSS"],
      isComingSoon: true
    },
    {
      title: "Coming Soon",
      description: "A futuristic application currently under construction. Watch this space for the official launch.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      tags: ["React", "Firebase", "Material UI"],
      isComingSoon: true
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container">
        <SectionHeading 
          title="Featured Projects"
          subtitle="My recent work and upcoming initiatives"
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
              isComingSoon={project.isComingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
