
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Clock } from 'lucide-react';
import Reveal from './Reveal';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  className?: string;
  isComingSoon?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoLink,
  githubLink,
  className,
  isComingSoon = false,
}) => {
  return (
    <Reveal className={cn("group", className)}>
      <div className="bg-card border rounded-lg overflow-hidden transition-all-300 subtle-shadow hover:shadow-md h-full flex flex-col">
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <img
            src={image}
            alt={title}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all-300 group-hover:scale-105",
              isComingSoon && "opacity-70"
            )}
            loading="lazy"
          />
          {isComingSoon ? (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-primary/90 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center gap-2 transform rotate-12">
                <Clock size={18} />
                <span className="font-bold text-lg">Coming Soon</span>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all-300 flex items-center justify-center gap-4">
              {demoLink && (
                <a 
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-all-200 bg-white text-black h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white"
                  aria-label="View demo"
                >
                  <ExternalLink size={18} />
                </a>
              )}
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-all-200 bg-white text-black h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white"
                  aria-label="View code on GitHub"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
