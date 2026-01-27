import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Code, Terminal } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { resumeData } from '@/data/resume';
export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading 
        title="About Me" 
        subtitle="Bridging the gap between software development and IT infrastructure."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <Card className="h-full border-white/10 glass-dark">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {resumeData.profile.bio}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Born in</div>
                  <div className="font-semibold text-foreground">Sri Lanka</div>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Languages</div>
                  <div className="font-semibold text-foreground">Tamil, English</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl border border-white/10 glass flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
              <MapPin size={24} />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase font-bold">Location</div>
              <div className="font-semibold">{resumeData.profile.location}</div>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 glass flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
              <Briefcase size={24} />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase font-bold">Experience</div>
              <div className="font-semibold">{resumeData.profile.yearsOfExperience} Years</div>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 glass flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
              <Code size={24} />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase font-bold">Main Stack</div>
              <div className="font-semibold">React & PHP</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}