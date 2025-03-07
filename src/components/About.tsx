
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { Download, Mail, Linkedin, Github } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container">
        <SectionHeading 
          title="About Me"
          subtitle="Get to know me better"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-lg overflow-hidden subtle-shadow relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <h3 className="text-2xl font-bold mb-4">
                I'm <span className="text-gradient">Your Name</span>, a Professional Title
              </h3>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-muted-foreground mb-4">
                I am a passionate and creative professional with a strong background in my field. I specialize in creating elegant solutions to complex problems.
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <p className="text-muted-foreground mb-6">
                With 5+ years of experience, I've worked on a variety of projects that have honed my skills and expanded my expertise. I'm constantly learning and adapting to new technologies and methodologies to stay at the forefront of my industry.
              </p>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="mb-1"><strong>Name:</strong> Your Name</p>
                  <p className="mb-1"><strong>Email:</strong> your.email@example.com</p>
                  <p><strong>Location:</strong> Your City, Country</p>
                </div>
                <div>
                  <p className="mb-1"><strong>Age:</strong> Your Age</p>
                  <p className="mb-1"><strong>Experience:</strong> 5+ Years</p>
                  <p><strong>Availability:</strong> Freelance/Full-time</p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={500}>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                >
                  <Download size={18} />
                  Download CV
                </a>
                <div className="flex items-center gap-3">
                  <a 
                    href="mailto:your.email@example.com" 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground transition-all-200 hover:bg-primary hover:text-white"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground transition-all-200 hover:bg-primary hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground transition-all-200 hover:bg-primary hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
