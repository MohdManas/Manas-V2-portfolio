import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send, MapPin, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { resumeData } from '@/data/resume';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type ContactForm = z.infer<typeof contactSchema>;
export function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = async (data: ContactForm) => {
    try {
      console.log('Form submission:', data);
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        title="Get In Touch"
        subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-10"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tight">Let's connect.</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          <div className="space-y-6">
            <a href={`mailto:${resumeData.profile.email}`} className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-secondary/50 transition-all border border-transparent hover:border-border">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Email Me</div>
                <div className="font-bold text-lg">{resumeData.profile.email}</div>
              </div>
            </a>
            <a href={`tel:${resumeData.profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-secondary/50 transition-all border border-transparent hover:border-border">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Call Me</div>
                <div className="font-bold text-lg">{resumeData.profile.phone}</div>
              </div>
            </a>
            <div className="flex items-center gap-6 p-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Based in</div>
                <div className="font-bold text-lg">{resumeData.profile.location}</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-card border border-border/60 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2 col-span-2 sm:col-span-1">
              <label className="text-xs font-bold uppercase tracking-widest ml-1">Name</label>
              <Input
                {...register("name")}
                placeholder="John Doe"
                className={cn(
                  "h-14 bg-secondary/30 border-border/50 focus:bg-background transition-all rounded-xl",
                  errors.name && "border-destructive focus:ring-destructive"
                )}
              />
              {errors.name && <p className="text-[10px] text-destructive font-bold uppercase ml-1">{errors.name.message}</p>}
            </div>
            <div className="space-y-2 col-span-2 sm:col-span-1">
              <label className="text-xs font-bold uppercase tracking-widest ml-1">Email</label>
              <Input
                {...register("email")}
                placeholder="john@example.com"
                className={cn(
                  "h-14 bg-secondary/30 border-border/50 focus:bg-background transition-all rounded-xl",
                  errors.email && "border-destructive focus:ring-destructive"
                )}
              />
              {errors.email && <p className="text-[10px] text-destructive font-bold uppercase ml-1">{errors.email.message}</p>}
            </div>
            <div className="space-y-2 col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest ml-1">Message</label>
              <Textarea
                {...register("message")}
                placeholder="Hi, I'd like to talk about..."
                rows={5}
                className={cn(
                  "bg-secondary/30 border-border/50 focus:bg-background transition-all rounded-xl resize-none",
                  errors.message && "border-destructive focus:ring-destructive"
                )}
              />
              {errors.message && <p className="text-[10px] text-destructive font-bold uppercase ml-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="col-span-2 h-14 btn-gradient text-lg font-bold rounded-xl mt-2" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </motion.div>
      </div>
      <footer className="mt-24 pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-foreground font-bold text-lg mb-1">{resumeData.profile.name}</p>
          <p className="text-muted-foreground text-sm font-medium italic">Full-Stack Developer & IT Officer</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={resumeData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={resumeData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${resumeData.socials.email}`}
            className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary">
            Built with React & Tailwind CSS
          </div>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-tighter">
            © {new Date().getFullYear()} • Dubai, UAE
          </p>
        </div>
      </footer>
    </section>
  );
}