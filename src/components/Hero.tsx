import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Code2, Database, LayoutTemplate, Server, Cpu, Cloud, GitBranch, Network } from 'lucide-react';

const Hero: React.FC = () => {
  const [isCompiled, setIsCompiled] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  
  const { scrollY } = useScroll();
  const fadeOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const parallaxY = useTransform(scrollY, [0, 400], [0, -50]);
  
  const pathLength = useTransform(scrollY, [0, 250], [0, 1]);
  const lineOpacity = useTransform(scrollY, [0, 200], [0, 0.5]);

  const sequence = `> root@anuj-dixit:~$ initialize_portfolio\n[OK] Booting MERN ecosystem...\n[OK] Loading Data Science modules...\n[OK] AI pipelines integrated.\n> System ready. Compiling UI...`;

  useEffect(() => {
    let currentLength = 0;
    const typingInterval = setInterval(() => {
      setTerminalText(sequence.slice(0, currentLength));
      currentLength++;
      if (currentLength > sequence.length) {
        clearInterval(typingInterval);
        setTimeout(() => setIsCompiled(true), 500); 
      }
    }, 25);
    return () => clearInterval(typingInterval);
  }, [sequence]);

  const skills = [
    { name: "Frontend", icon: LayoutTemplate },
    { name: "Backend", icon: Server },
    { name: "Database", icon: Database },
    { name: "AI / Python", icon: Code2 },
  ];

  // Mathematically perfect circle coordinates (R=45) -> 50 +/- 45*cos(45) = 18.2 & 81.8
  const nodes = [
    { icon: LayoutTemplate, top: '5%', left: '50%', name: "UI" },
    { icon: Cloud, top: '18.2%', left: '81.8%', name: "AWS" },
    { icon: Server, top: '50%', left: '95%', name: "Node" },
    { icon: Database, top: '81.8%', left: '81.8%', name: "Mongo" },
    { icon: Cpu, top: '95%', left: '50%', name: "AI" },
    { icon: Network, top: '81.8%', left: '18.2%', name: "API" },
    { icon: Code2, top: '50%', left: '5%', name: "Python" },
    { icon: GitBranch, top: '18.2%', left: '18.2%', name: "Git" },
  ];

  const connections = [
    { x1: 50, y1: 5, x2: 81.8, y2: 18.2 }, { x1: 81.8, y1: 18.2, x2: 95, y2: 50 },
    { x1: 95, y1: 50, x2: 81.8, y2: 81.8 }, { x1: 81.8, y1: 81.8, x2: 50, y2: 95 },
    { x1: 50, y1: 95, x2: 18.2, y2: 81.8 }, { x1: 18.2, y1: 81.8, x2: 5, y2: 50 },
    { x1: 5, y1: 50, x2: 18.2, y2: 18.2 }, { x1: 18.2, y1: 18.2, x2: 50, y2: 5 },
    { x1: 50, y1: 5, x2: 50, y2: 95 }, { x1: 5, y1: 50, x2: 95, y2: 50 },
    { x1: 18.2, y1: 18.2, x2: 81.8, y2: 81.8 }, { x1: 18.2, y1: 81.8, x2: 81.8, y2: 18.2 },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden grain">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0A_100%)] z-0 opacity-80" />

      <AnimatePresence mode="wait">
        {!isCompiled ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center z-10 px-6"
          >
            <div className="w-full max-w-3xl font-mono text-sm md:text-base text-primary whitespace-pre-wrap leading-relaxed">
              {terminalText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2.5 h-5 bg-primary ml-1 align-middle"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="hero"
            style={{ opacity: fadeOpacity, y: parallaxY }} 
            className="container relative z-10 flex flex-col lg:flex-row items-stretch justify-between min-h-screen pt-24"
          >
            {/* Left Side: Text & Skills (Kept at higher z-index to sit above mobile orbit bg) */}
            <div className="w-full lg:w-[55%] order-2 lg:order-1 flex flex-col justify-center pb-20 lg:pb-32 z-20 min-h-[70vh] lg:min-h-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="eyebrow mb-6 text-primary">Think Big. Build Smart.</span>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] tracking-tightest mb-6">
                  Hi, I'm <br /><span className="text-primary">Anuj.</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-12">
                  A Full Stack Developer & AI Enthusiast architecting clean, high-performance applications.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-full bg-card/50 backdrop-blur-sm"
                  >
                    <skill.icon size={16} className="text-primary" />
                    <span className="text-sm font-mono text-muted-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side: Portrait & NEURAL ORBIT */}
            <motion.div 
              // Absolute on mobile to sit perfectly behind text. Relative on desktop.
              className="absolute inset-0 lg:relative lg:inset-auto w-full lg:w-[45%] lg:order-2 flex justify-center lg:justify-end items-center lg:items-end h-full lg:h-auto mt-0 lg:mt-0 z-0 lg:z-10 pointer-events-none lg:pointer-events-auto overflow-hidden lg:overflow-visible"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              
              <div className="relative w-full max-w-[420px] lg:max-w-[600px] flex flex-col justify-center lg:justify-end z-10 h-full lg:h-auto">
                
                {/* 2D NEURAL ORBIT - Adjusted sm:w-[90vw] and md:w-[80vw] to fit beautifully on tablets */}
                <div className="absolute top-1/2 lg:top-[2%] left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 lg:translate-y-0 w-[150vw] sm:w-[90vw] md:w-[80vw] lg:w-[110%] aspect-square flex items-center justify-center z-0 pointer-events-none opacity-15 lg:opacity-100 shrink-0">
                  <div className="relative w-full h-full ">
                    
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="w-full h-full relative">
                      
                      {/* Added preserveAspectRatio="xMidYMid meet" to force perfect circular rendering */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                        {connections.map((c, i) => (
                          <motion.line
                            key={i} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                            className="stroke-primary" strokeWidth="0.3"
                            style={{ pathLength, opacity: lineOpacity }}
                          />
                        ))}
                      </svg>

                      {nodes.map((node, i) => (
                        <div 
                          key={i} 
                          className="absolute z-10"
                          style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
                        >
                          <motion.div
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(232,85,31,0.15)]"
                            initial={{ scale: 0 }} 
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + (i * 0.1), type: "spring", stiffness: 100 }}
                          >
                            <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="flex items-center justify-center text-primary w-full h-full">
                              <node.icon size={18} />
                            </motion.div>
                          </motion.div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Hide the glow blob on mobile to keep the bg clean */}
                <div className="hidden lg:block absolute top-[10%] bottom-[5%] left-[10%] right-[5%] bg-primary/15 blur-[120px] rounded-[100%] z-0 pointer-events-none" />
                
                {/* PORTRAIT IMAGE - Hidden on mobile, visible on desktop */}
                <img
                  src="/imgs/anuj-portrait.png" 
                  alt="Anuj Dixit"
                  className="hidden lg:block w-full h-auto object-contain object-bottom drop-shadow-2xl relative z-10 origin-bottom scale-110 pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground z-30"
            >
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] mb-3">Scroll To Explore</span>
              <ArrowDown className="animate-bounce text-primary" size={20} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;