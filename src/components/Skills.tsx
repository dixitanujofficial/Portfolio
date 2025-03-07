
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ProgressBar from './ui/ProgressBar';
import Reveal from './ui/Reveal';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { label: "JavaScript", percentage: 90 },
    { label: "React", percentage: 88 },
    { label: "Node.js", percentage: 85 },
    { label: "TypeScript", percentage: 82 },
    { label: "HTML/CSS", percentage: 90 },
    { label: "MongoDB", percentage: 75 },
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Critical Thinking"
  ];

  const certifications = [
    "Full Stack Web Development",
    "React Certified Developer",
    "Node.js Certification",
    "Cloud Computing Fundamentals"
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="container">
        <SectionHeading 
          title="Skills & Certifications"
          subtitle="My technical expertise and qualifications"
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

          {/* Soft Skills & Certifications */}
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

            {/* Certifications */}
            <Reveal delay={400}>
              <div className="bg-card rounded-lg p-6 subtle-shadow">
                <h3 className="text-xl font-bold mb-6">Certifications</h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{cert}</span>
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
