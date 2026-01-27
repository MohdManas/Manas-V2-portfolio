import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send, MapPin } from 'lucide-react';
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
      toast.success("Message sent! I'll get back to you soon.");
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error("Failed to send message. Please try again later.");
    }
  };
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading
        title="Get In Touch"
        subtitle="Ready to discuss your next project or role? Contact me directly via email or phone."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="space-y-6">
              <a href={`mailto:${resumeData.profile.email}`} className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Email</div>
                  <div className="font-semibold text-lg">{resumeData.profile.email}</div>
                </div>
              </a>
              <a href={`tel:${resumeData.profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Phone</div>
                  <div className="font-semibold text-lg">{resumeData.profile.phone}</div>
                </div>
              </a>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Location</div>
                  <div className="font-semibold text-lg">{resumeData.profile.location}</div>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href={resumeData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href={resumeData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border/60 rounded-[2rem] p-10 shadow-soft"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Name</label>
              <Input
                {...register("name")}
                placeholder="Your name"
                className={cn(
                  "bg-secondary/50 border-transparent focus:border-primary transition-colors",
                  errors.name && "border-destructive focus:border-destructive"
                )}
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Email</label>
              <Input
                {...register("email")}
                placeholder="Your email address"
                className={cn(
                  "bg-secondary/50 border-transparent focus:border-primary transition-colors",
                  errors.email && "border-destructive focus:border-destructive"
                )}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Message</label>
              <Textarea
                {...register("message")}
                placeholder="Tell me about your project..."
                rows={5}
                className={cn(
                  "bg-secondary/50 border-transparent focus:border-primary resize-none transition-colors",
                  errors.message && "border-destructive focus:border-destructive"
                )}
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="w-full btn-gradient py-7 text-lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </motion.div>
      </div>
      <footer className="mt-32 pt-10 border-t border-border/40 text-center">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} {resumeData.profile.name}. Designed & Built with Precision.</p>
      </footer>
    </section>
  );
}