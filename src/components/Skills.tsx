import React from 'react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const Skills: React.FC = () => {
  const skillCategories = [
    { title: "Frontend", skills: ["React.js", "Next.js", "HTML5/CSS3", "Tailwind CSS", "Bootstrap"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "RESTful APIs"] },
    { title: "Languages", skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "SQL"] },
    { title: "Database & Cloud", skills: ["MongoDB", "PostgreSQL", "AWS", "GCP (Learning)"] },
    { title: "AI & Tools", skills: ["LLM Integration", "Git/GitHub", "Linux", "VS Code"] }
  ];

  return (
    <section id="skills" className="section-padding bg-background relative z-10">
      <div className="container">
        <SectionHeading eyebrow="Capabilities" title="Technical Arsenal" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {skillCategories.map((category, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <h3 className="text-xl font-display font-semibold mb-6 border-b border-border/50 pb-4 text-foreground">
                {category.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-muted-foreground font-mono text-sm flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;