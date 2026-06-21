import React from "react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { Download, Mail, Linkedin, Github } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30 relative z-10">
      <div className="container">
        <SectionHeading eyebrow="Background" title="About Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <Reveal>
            <h3 className="text-3xl font-display font-medium leading-snug mb-6">
              Bridging the gap between <span className="text-primary">Data Science</span> and <span className="text-primary">Full-Stack Engineering</span>.
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              I am pursuing a BS in Data Science at IIT Madras alongside a BCA at K.P.B. Hinduja College. My expertise lies in the MERN stack, building scalable systems that don't just work, but perform exceptionally well under the hood.
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              Beyond traditional web development, I am deeply invested in integrating Artificial Intelligence and LLMs into applications to automate workflows, generate intelligent content, and enhance modern user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                <Download size={18} /> Resume
              </a>
              <div className="flex items-center gap-2">
                {[
                  { icon: Mail, href: "mailto:dixitanujofficial@gmail.com" },
                  { icon: Linkedin, href: "https://linkedin.com/in/dixit-anuj/" },
                  { icon: Github, href: "https://github.com/dixitanujofficial" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={200} className="grid grid-cols-2 gap-8 lg:pl-12">
            <div className="border-l border-primary pl-6">
              <div className="text-4xl font-display font-bold text-foreground mb-2">2+</div>
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Years Coding</div>
            </div>
            <div className="border-l border-primary pl-6">
              <div className="text-4xl font-display font-bold text-foreground mb-2">MERN</div>
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Core Stack</div>
            </div>
            <div className="border-l border-primary pl-6">
              <div className="text-4xl font-display font-bold text-foreground mb-2">IITM</div>
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Data Science</div>
            </div>
            <div className="border-l border-primary pl-6">
              <div className="text-4xl font-display font-bold text-foreground mb-2">AI/ML</div>
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Integration</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;