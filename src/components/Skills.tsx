
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ProgressBar from './ui/ProgressBar';
import Reveal from './ui/Reveal';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { label: "JavaScript", percentage: 90 },
    { label: "React.js", percentage: 85 },
    { label: "Node.js", percentage: 85 },
    { label: "MongoDB", percentage: 80 },
    { label: "Express.js", percentage: 85 },
    { label: "HTML/CSS", percentage: 90 },
    { label: "C++", percentage: 85 },
    { label: "Tailwind CSS", percentage: 90 },
    { label: "Bootstrap", percentage: 85 },
    { label: "Full Stack Development", percentage: 85 },
  ];

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Team Collaboration",
    "Leadership",
    "Time Management",
    "Critical Thinking",
    "Adaptability"
  ];

  const learningTechnologies = [
    "Artificial Intelligence",
    "Large Language Models",
    "Machine Learning",
    "Natural Language Processing",
    "Data Science Fundamentals",
    "AI Application Development"
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="container">
        <SectionHeading 
          title="Skills & Expertise"
          subtitle="My technical and soft skills"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Reveal>
            <div className="bg-card rounded-lg p-6 subtle-shadow">
              <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-5">
                {technicalSkills.map((skill, index) => (
                  <ProgressBar
                    key={index}
                    label={skill.label}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Soft Skills & Currently Learning */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <Reveal delay={200}>
              <div className="bg-card rounded-lg p-6 subtle-shadow">
                <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Currently Learning */}
            <Reveal delay={400}>
              <div className="bg-card rounded-lg p-6 subtle-shadow">
                <h3 className="text-xl font-bold mb-6">Currently Learning</h3>
                <div className="space-y-3">
                  {learningTechnologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
