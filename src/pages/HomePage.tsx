import React from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Education } from '@/components/sections/education';
import { Certifications } from '@/components/sections/certifications';
import { Contact } from '@/components/sections/contact';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <ThemeToggle className="fixed bottom-6 right-6 md:top-8 md:right-8 z-[100]" />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Toaster richColors position="bottom-center" />
    </div>
  );
}