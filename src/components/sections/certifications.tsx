import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { resumeData } from '@/data/resume';
export function Certifications() {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading
        title="Certifications"
        subtitle="Professional credentials and specialized training."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {resumeData.certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full border-white/10 glass-dark hover:border-primary/50 transition-colors group">
              <CardContent className="p-8 flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Award size={28} />
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-bold text-primary uppercase tracking-wider">{cert.company}</div>
                  <h3 className="text-xl font-bold leading-tight">{cert.role}</h3>
                  <p className="text-muted-foreground text-sm font-medium">{cert.date}</p>
                  <div className="pt-2">
                    {cert.description.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-primary" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}