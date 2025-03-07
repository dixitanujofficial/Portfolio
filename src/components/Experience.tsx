
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import TimelineItem from './ui/TimelineItem';

const Experience: React.FC = () => {
  const experiences = [
    {
      date: "2021 - Present",
      title: "Senior Position",
      company: "Company Name",
      description: "Led the development of key projects, mentored junior team members, and improved processes to increase team productivity by 30%."
    },
    {
      date: "2019 - 2021",
      title: "Mid-level Position",
      company: "Company Name",
      description: "Collaborated on major projects, implemented new technologies, and contributed to significant improvements in product performance and user experience."
    },
    {
      date: "2017 - 2019",
      title: "Junior Position",
      company: "Company Name",
      description: "Assisted with development tasks, learned company processes, and began contributing to product features while rapidly expanding my technical skills."
    },
    {
      date: "2013 - 2017",
      title: "University Degree",
      company: "University Name",
      description: "Studied relevant field, participated in extracurricular activities, and completed several notable projects that demonstrated practical skills."
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
