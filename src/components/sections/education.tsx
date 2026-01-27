import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, School } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { resumeData } from '@/data/resume';
export function Education() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-secondary/10 rounded-3xl mt-10">
      <SectionHeading
        title="Education"
        subtitle="Academic background and formal studies."
      />
      <div className="space-y-8 relative before:absolute before:left-[17px] md:before:left-[31px] before:top-0 before:bottom-0 before:w-px before:bg-border">
        {resumeData.education.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-10 md:pl-20"
          >
            <div className="absolute left-0 top-0 w-8 h-8 md:w-16 md:h-16 flex items-center justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center z-10 ring-4 ring-background">
                <GraduationCap size={24} />
              </div>
            </div>
            <Card className="border-border shadow-soft">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                    <div className="flex items-center text-muted-foreground mt-1 gap-2">
                      <School size={16} />
                      <span className="font-medium">{item.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm font-medium bg-background border border-border px-3 py-1 rounded-full text-muted-foreground w-fit">
                    <Calendar size={14} className="mr-2" />
                    {item.date}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.description.map((desc, dIdx) => (
                    <div key={dIdx} className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-md">
                      {desc}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}