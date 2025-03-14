
import React from 'react';
import Reveal from './ui/Reveal';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 py-12">
      <div className="container">
        <Reveal>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Anuj Dixit</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              BS at IIT Madras | BCA at K.P.B. Hinduja College | Full-stack web developer [MERN]
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href="mailto:dixitanujofficial@gmail.com" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background dark:bg-background/10 text-foreground dark:text-foreground/90 transition-all-200 hover:bg-primary hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dixit-anuj/" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background dark:bg-background/10 text-foreground dark:text-foreground/90 transition-all-200 hover:bg-primary hover:text-white"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/dixitanujofficial" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background dark:bg-background/10 text-foreground dark:text-foreground/90 transition-all-200 hover:bg-primary hover:text-white"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Anuj Dixit. All rights reserved.
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
