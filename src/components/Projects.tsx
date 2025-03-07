
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "MERN E-Commerce Platform",
      description: "A full-featured online shopping platform with user authentication, product catalog, cart management, and payment integration using the MERN stack.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management Application",
      description: "A productivity application built with React and Node.js that helps users organize tasks, set deadlines, and track progress on personal and team projects.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["React", "JavaScript", "Express", "MongoDB", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard utilizing React for frontend and Express for backend to visualize complex data sets in an intuitive and user-friendly manner.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      tags: ["React", "Express", "Chart.js", "MongoDB", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Responsive Portfolio Website",
      description: "A responsive and interactive personal portfolio showcasing skills, experience, and projects with modern design elements built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1649972954973-af87dfaza726",
      tags: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container">
        <SectionHeading 
          title="Featured Projects"
          subtitle="My recent work with MERN stack"
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
