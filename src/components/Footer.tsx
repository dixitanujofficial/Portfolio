
import React from 'react';
import Reveal from './ui/Reveal';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        <Reveal>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Name</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Creating innovative digital experiences with a focus on elegant design and powerful functionality.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href="mailto:your.email@example.com" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background text-foreground transition-all-200 hover:bg-primary hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background text-foreground transition-all-200 hover:bg-primary hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background text-foreground transition-all-200 hover:bg-primary hover:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
