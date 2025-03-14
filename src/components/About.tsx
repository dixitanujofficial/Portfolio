import React from "react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { Download, Mail, Linkedin, Github } from "lucide-react";
const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="Professional background and expertise"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-lg overflow-hidden subtle-shadow relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 rounded-3xl"></div>
                <img
                  src="/imgs/aboutme.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <h3 className="text-2xl font-bold mb-4">
                I'm <span className="text-gradient">Anuj Dixit</span>, a Full
                Stack Web Developer
              </h3>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-muted-foreground mb-4">
                As an aspiring technologist, I am currently pursuing a Bachelor
                of Science in Data Science and Applications at the Indian
                Institute of Technology, Madras, along with a Bachelor of
                Computer Applications at K.P.B. Hinduja College of Commerce,
                Mumbai.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-muted-foreground mb-6">
                I have developed expertise as a full-stack developer, mastering
                the MERN stack (MongoDB, Express.js, React.js, Node.js) and
                building robust, scalable, and high-performance applications. My
                technical proficiency spans both frontend and backend
                development, with a deep understanding of modern frameworks,
                databases, and system architectures.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="text-muted-foreground mb-6">
                Beyond web development, I am actively exploring Artificial
                Intelligence (AI) and Large Language Models (LLMs) to integrate
                AI-driven solutions into modern applications, enhancing
                automation, intelligence, and user experience.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="mb-1">
                    <strong>Name:</strong> Anuj Dixit
                  </p>
                  <p className="mb-1">
                    <strong>Email:</strong> dixitanujofficial@gmail.com
                  </p>
                  <p>
                    <strong>Location:</strong> Mumbai, Maharashtra, India
                  </p>
                </div>
                <div>
                  <p className="mb-1">
                    <strong>Education:</strong> BS Data Science, BCA
                  </p>
                  <p className="mb-1">
                    <strong>Specialization:</strong> MERN Stack Development
                  </p>
                  <p>
                    <strong>Availability:</strong> Projects & Internships
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                >
                  <Download size={18} />
                  Download CV
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:dixitanujofficial@gmail.com"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground transition-all-200 hover:bg-primary hover:text-white"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dixit-anuj/"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground transition-all-200 hover:bg-primary hover:text-white"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://github.com/dixitanujofficial"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground transition-all-200 hover:bg-primary hover:text-white"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
