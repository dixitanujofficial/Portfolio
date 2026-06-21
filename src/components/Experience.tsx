import React from 'react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const Experience: React.FC = () => {
  const education = [
    {
      date: "2024 — Present",
      title: "BS in Data Science & Applications",
      institution: "Indian Institute of Technology, Madras",
      desc: "Focusing on advanced analytical methodologies, machine learning algorithms, and statistical analysis."
    },
    {
      date: "2023 — 2026",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "K.P.B. Hinduja College of Commerce",
      desc: "Establishing a comprehensive foundation in computer science principles and software engineering."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30 relative z-10">
      <div className="container max-w-4xl">
        <SectionHeading eyebrow="Timeline" title="Education" align="center" />
        
        <div className="mt-16 flex flex-col gap-12">
          {education.map((item, idx) => (
            <Reveal key={idx} delay={idx * 100} className="flex flex-col md:flex-row gap-6 md:gap-12 group">
              <div className="md:w-1/3 flex-shrink-0">
                <span className="font-mono text-sm text-primary border border-primary/30 bg-primary/5 px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>
              <div className="md:w-2/3 border-l border-border pl-6 relative before:absolute before:left-[-5px] before:top-2 before:w-2.5 before:h-2.5 before:bg-border before:rounded-full group-hover:before:bg-primary before:transition-colors">
                <h3 className="text-2xl font-display font-semibold mb-2">{item.title}</h3>
                <h4 className="text-lg text-foreground/80 mb-4">{item.institution}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;