import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { resumeData } from '@/data/resume';
export function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading 
        title="Work History" 
        subtitle="A timeline of my professional experience in the tech industry."
      />
      <div className="space-y-8 relative before:absolute before:left-[17px] md:before:left-[31px] before:top-0 before:bottom-0 before:w-px before:bg-border">
        {resumeData.experience.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-10 md:pl-16"
          >
            <div className="absolute left-0 top-0 w-8 h-8 md:w-16 md:h-16 flex items-center justify-center">
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary ring-4 ring-background z-10" />
            </div>
            <Card className="border-border shadow-soft hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                    <div className="flex items-center text-muted-foreground mt-1 gap-2">
                      <Building2 size={16} />
                      <span className="font-medium text-foreground/80">{item.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm font-medium bg-secondary px-3 py-1 rounded-full text-secondary-foreground w-fit">
                    <Calendar size={14} className="mr-2" />
                    {item.date}
                  </div>
                </div>
                <ul className="space-y-3">
                  {item.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start text-muted-foreground">
                      <div className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}