
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import TimelineItem from './ui/TimelineItem';

const Experience: React.FC = () => {
  const experiences = [
    {
      date: "2021 - Present",
      title: "Full Stack Developer",
      company: "Current Company",
      description: "Leading the development of key web applications, mentoring team members, and implementing CI/CD processes to improve development workflow."
    },
    {
      date: "2019 - 2021",
      title: "Software Developer",
      company: "Previous Company",
      description: "Collaborated on major projects, implemented new technologies, and contributed to significant improvements in application performance and user experience."
    },
    {
      date: "2017 - 2019",
      title: "Junior Developer",
      company: "First Company",
      description: "Assisted with development tasks, learned company processes, and began contributing to product features while rapidly expanding my technical skills."
    },
    {
      date: "2013 - 2017",
      title: "B.Tech in Computer Science",
      company: "University",
      description: "Studied Computer Science and Engineering, participated in coding competitions, and completed several notable projects that demonstrated practical skills."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <div className="container">
        <SectionHeading 
          title="Experience"
          subtitle="My professional journey"
        />
        
        <div className="max-w-3xl mx-auto">
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
    </section>
  );
};

export default Experience;
