
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import TimelineItem from './ui/TimelineItem';

const Experience: React.FC = () => {
  const experiences = [
    {
      date: "2023 - 2026",
      title: "Bachelor of Computer Applications (BCA)",
      company: "K.P.B. Hinduja College of Commerce",
      description: "Pursuing Computer Science with a focus on application development and programming fundamentals. Developing strong technical foundation in computer science principles."
    },
    {
      date: "2024 - 2028",
      title: "Bachelor of Science - BS",
      company: "Indian Institute of Technology, Madras",
      description: "Specializing in Data Science and Applications. Started in September 2024 with expected graduation in 2028. Learning advanced concepts in data science, machine learning, and statistical analysis."
    },
    {
      date: "2023 - Present",
      title: "MERN Stack Development",
      company: "Self-learning & Projects",
      description: "Mastering the MERN (MongoDB, Express.js, React.js, Node.js) stack through intensive self-study and practical project implementation. Building full-stack web applications with focus on functionality and user experience."
    },
    {
      date: "2022 - 2023",
      title: "Frontend Web Development",
      company: "Self-learning & Projects",
      description: "Completed intensive learning in HTML, CSS, and JavaScript. Mastered popular frontend frameworks such as Bootstrap and Tailwind CSS to create responsive and visually appealing web applications."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container">
        <SectionHeading 
          title="Education & Experience"
          subtitle="My academic and learning journey"
          className="mb-12"
        />
        
        <div className="relative max-w-5xl mx-auto">
          {/* Mobile Timeline Line (hidden on desktop) */}
          <div className="absolute left-2 top-5 bottom-0 w-px bg-border md:hidden"></div>
          
          {/* Timeline Items */}
          <div className="pl-10 md:pl-0">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                date={exp.date}
                title={exp.title}
                company={exp.company}
                description={exp.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
