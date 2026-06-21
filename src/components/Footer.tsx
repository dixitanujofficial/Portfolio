import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-border bg-background relative z-10">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display text-2xl font-bold tracking-tight">
          Anuj<span className="text-primary">.</span>
        </div>
        <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Think Big. Build Smart.
        </p>
      </div>
    </footer>
  );
};

export default Footer;