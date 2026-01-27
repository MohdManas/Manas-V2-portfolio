import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Layers } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resume';
export function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        title="Featured Projects"
        subtitle="End-to-end applications developed with a focus on performance, scalability, and clean code."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        {resumeData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Card className="h-full overflow-hidden border-border/40 hover:border-primary/40 transition-all duration-500 group shadow-lg bg-card hover:shadow-2xl hover:shadow-primary/5 flex flex-col rounded-3xl">
              <div className="aspect-video bg-secondary/20 overflow-hidden relative group-hover:bg-secondary/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-all duration-700 transform group-hover:scale-110">
                   <Layers size={160} className="text-primary" />
                </div>
                <div className="absolute top-6 left-6 z-20">
                   <div className="w-12 h-12 rounded-2xl bg-background/50 backdrop-blur-md flex items-center justify-center border border-white/10 text-primary">
                      <Code2 size={24} />
                   </div>
                </div>
                <div className="absolute bottom-6 left-6 z-20 right-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <Badge key={tag} className="bg-primary/10 text-primary border-primary/20 font-semibold text-[10px] uppercase tracking-wider backdrop-blur-md group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>
                <ul className="space-y-3 mb-2">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-muted-foreground flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 mt-1.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0 flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[120px] h-11 inline-flex items-center justify-center gap-2 text-sm font-bold bg-secondary hover:bg-secondary/80 text-foreground rounded-xl transition-all border border-border/50"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[120px] h-11 inline-flex items-center justify-center gap-2 text-sm font-bold bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-md shadow-primary/20"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}