import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resume';
export function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading
        title="Featured Projects"
        subtitle="End-to-end applications developed with a focus on performance and user experience."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        {resumeData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="h-full overflow-hidden border-border/60 hover:border-primary/50 transition-all duration-300 group shadow-lg bg-card/50 backdrop-blur-sm">
              <div className="aspect-[16/9] bg-secondary/30 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                   <Code2 size={120} className="text-primary" />
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <Badge key={tag} className="bg-primary/20 text-primary border-primary/20 font-bold hover:bg-primary hover:text-white transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-medium mb-6">
                  {project.description}
                </p>
                <ul className="space-y-3">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-muted-foreground flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-8 pb-8 pt-0 flex gap-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} /> Code Base
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={18} /> View Demo
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}