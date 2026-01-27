import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { resumeData } from '@/data/resume';
import { cn } from '@/lib/utils';
export function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading
        title="Professional Experience"
        subtitle="A detailed history of my contributions in software development and IT operations."
      />
      <div className="space-y-12 relative before:absolute before:left-[17px] md:before:left-[31px] before:top-0 before:bottom-0 before:w-px before:bg-border">
        {resumeData.experience.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-10 md:pl-20"
          >
            <div className="absolute left-0 top-0 w-8 h-8 md:w-16 md:h-16 flex items-center justify-center">
              <div className={cn(
                "w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-white z-10 ring-4 ring-background shadow-lg",
                idx === 0 ? "bg-gradient-to-br from-blue-600 to-blue-800" : "bg-gradient-to-br from-orange-500 to-orange-700"
              )}>
                {idx === 0 ? "SL" : "ZS"}
              </div>
            </div>
            <Card className="border-border/60 shadow-soft hover:shadow-glow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{item.role}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                      <div className="flex items-center text-muted-foreground gap-1.5">
                        <Building2 size={16} />
                        <span className="font-semibold text-foreground/80">{item.company}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground gap-1.5">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm font-semibold bg-secondary px-4 py-1.5 rounded-full text-secondary-foreground w-fit h-fit border border-border">
                    <Calendar size={14} className="mr-2" />
                    {item.date}
                  </div>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-1 gap-y-3">
                  {item.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start text-muted-foreground text-pretty leading-relaxed group">
                      <div className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0 group-hover:scale-125 transition-transform" />
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