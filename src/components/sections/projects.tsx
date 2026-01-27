import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resume';
export function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-secondary/30 rounded-3xl">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="A selection of my most recent work, ranging from web tools to mobile apps."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {resumeData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full border-white/5 bg-background shadow-lg group">
              <div className="aspect-video bg-muted overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent group-hover:opacity-60 transition-opacity" />
                <div className="flex items-center justify-center h-full text-muted-foreground/30 font-bold text-4xl uppercase tracking-tighter italic">
                  Project {idx + 1}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-sm font-semibold flex items-center gap-1.5 text-foreground hover:text-primary"
                >
                  <Github size={16} /> Source
                </a>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-sm font-semibold flex items-center gap-1.5 text-foreground hover:text-primary"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}