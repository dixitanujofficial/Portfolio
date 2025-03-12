
import React from 'react';
import { ArrowDown } from 'lucide-react';
import Reveal from './ui/Reveal';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 pb-12 bg-gradient-to-br from-background to-secondary/30"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <Reveal>
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium">
              Welcome to my portfolio
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6">
              Hi, I'm <span className="text-gradient">Anuj Dixit</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                Full Stack Developer & AI Enthusiast
              </span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              BS Data Science at IIT Madras with a complementary BCA at K.P.B. Hinduja College. Specializing in MERN Stack development and exploring AI technologies to build innovative, high-performance applications.
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-secondary text-foreground rounded-lg font-medium transition-all-200 hover:bg-secondary/80"
              >
                View Projects
              </a>
            </div>
          </Reveal>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center">
          <Reveal direction="right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-blue-400 opacity-75 blur-md"></div>
              <div className="absolute inset-0.5 rounded-full bg-background overflow-hidden">
                <img 
                  src="/lovable-uploads/6ff60f4d-f10d-4af4-b00a-0e3c3a16ada2.png"
                  alt="Anuj Dixit" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      
      {/* Scroll down button - only visible on larger screens */}
      <a 
        href="#about" 
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center text-muted-foreground hover:text-foreground transition-all-200"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
};

export default Hero;
