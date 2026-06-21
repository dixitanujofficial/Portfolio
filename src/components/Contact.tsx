import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative z-10">
      <div className="container max-w-6xl">
        <SectionHeading eyebrow="Get in touch" title="Let's Build Something." align="center" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left Side: Contact Information */}
          <Reveal direction="right" className="flex flex-col justify-center">
            <h3 className="text-3xl font-display font-semibold mb-6">Ready to collaborate?</h3>
            <p className="text-lg text-muted-foreground mb-10 max-w-md">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let's connect!
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:dixitanujofficial@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                    dixitanujofficial@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-medium">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex gap-4">
              <a href="https://github.com/dixitanujofficial" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/dixit-anuj/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </Reveal>
          
          {/* Right Side: Contact Form */}
          <Reveal direction="left">
            <div className="bg-card/20 backdrop-blur-md border border-border/50 p-8 rounded-[2rem]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <input type="text" id="name" required className="bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground" placeholder="Your Name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input type="email" id="email" required className="bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <input type="text" id="subject" required className="bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground" placeholder="Project Inquiry" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea id="message" required rows={5} className="bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-2 bg-primary text-primary-foreground font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;