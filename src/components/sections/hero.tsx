import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/data/resume';
export function Hero() {
  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 dark:opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Profile Image Column - Circular Modern Aesthetic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-primary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-background/50 shadow-2xl backdrop-blur-sm">
                <img
                  src={resumeData.profile.image}
                  alt={`${resumeData.profile.name} - Full-Stack Developer`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 text-center lg:text-left order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-8 border border-primary/20"
            >
              <Briefcase size={14} className="mr-2" />
              Available for new opportunities
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Crafting <span className="text-gradient">Digital Experiences</span> that Matter
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Hi, I'm <span className="text-foreground font-semibold">{resumeData.profile.name}</span>.
              A Full-Stack Developer & IT Officer dedicated to building high-performance
              applications and robust infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Button
                size="lg"
                className="btn-gradient w-full sm:w-auto px-10 h-14 rounded-2xl text-lg font-bold shadow-xl"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-10 rounded-2xl text-lg font-bold border-2 hover:bg-secondary transition-all"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Scroll Down</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
}