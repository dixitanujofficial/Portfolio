import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import Reveal from './Reveal';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, demoLink, githubLink, className }) => {
  return (
    <Reveal className={cn("group flex flex-col border-b border-border/50 pb-12", className)}>
       <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
         
         {/* Left Side: Title & Links */}
         <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex gap-6">
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                  <Github size={18} /> CODE
                </a>
              )}
              {demoLink && (
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={18} /> LIVE DEMO
                </a>
              )}
            </div>
         </div>

         {/* Right Side: Description & Tags */}
         <div className="flex-1 lg:max-w-lg">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="eyebrow !text-[10px] before:hidden border border-border px-3 py-1 rounded-full">
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