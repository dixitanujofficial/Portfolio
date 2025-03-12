
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import TimelineItem from './ui/TimelineItem';

const Experience: React.FC = () => {
  const experiences = [
    {
      date: "2024 - 2028",
      title: "Bachelor of Science - BS",
      company: "Indian Institute of Technology, Madras",
      description: "Pursuing Data Science and Applications with a focus on advanced analytical methodologies. Commenced in September 2024 with anticipated completion in 2028. Developing expertise in data science frameworks, machine learning algorithms, and statistical analysis techniques."
    },
    {
      date: "2023 - 2026",
      title: "Bachelor of Computer Applications (BCA)",
      company: "K.P.B. Hinduja College of Commerce",
      description: "Supplementary degree in Computer Science focusing on application development and programming fundamentals. Establishing a comprehensive foundation in computer science principles to complement data science specialization."
    },
    {
      date: "2023 - Present",
      title: "MERN Stack Development",
      company: "Self-learning & Projects",
      description: "Mastering the MERN (MongoDB, Express.js, React.js, Node.js) stack through systematic self-study and practical implementation. Developing full-stack web applications with emphasis on scalability, performance optimization, and enhanced user experience."
    },
    {
      date: "2022 - 2023",
      title: "Frontend Web Development",
      company: "Self-learning & Projects",
      description: "Completed comprehensive training in HTML, CSS, and JavaScript fundamentals. Acquired proficiency in industry-standard frontend frameworks including Bootstrap and Tailwind CSS for developing responsive and visually refined web interfaces."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container">
        <SectionHeading 
          title="Education & Experience"
          subtitle="Academic qualifications and professional development"
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
