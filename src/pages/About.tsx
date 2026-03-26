import { motion } from 'motion/react';
import { ArrowRight, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh]">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        {/* Left Column - Image & Quick Links */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent mix-blend-overlay z-10" />
            <img 
              src="https://picsum.photos/seed/developer/800/800" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <a href="mailto:hello@example.com" className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/30">
              <Mail className="w-5 h-5" />
              <span className="font-medium">hello@example.com</span>
            </a>
            <div className="flex gap-4">
              <a href="#" className="flex-1 flex justify-center items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="flex-1 flex justify-center items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="flex-1 flex justify-center items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              Hi, I'm <span className="text-emerald-400">Alex</span>.
            </h1>
            
            <div className="prose prose-invert prose-lg max-w-none text-zinc-400">
              <p className="text-2xl text-zinc-300 font-medium leading-relaxed mb-8">
                I'm a Senior Frontend Developer and Conversion Rate Optimization (CRO) Specialist with over 8 years of experience building high-performance web applications.
              </p>
              
              <p className="mb-6">
                My journey started in traditional graphic design before I discovered the power of code. Today, I bridge the gap between aesthetics and engineering, focusing on creating digital experiences that not only look beautiful but drive measurable business results.
              </p>

              <p className="mb-12">
                I believe that performance is a feature, accessibility is a right, and great design is invisible. When I'm not optimizing React applications or analyzing user behavior flows, you can find me hiking, reading sci-fi, or experimenting with new web technologies.
              </p>

              <h2 className="text-3xl font-bold text-zinc-50 mb-6">Core Competencies</h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
                  <h3 className="text-xl font-bold text-zinc-50 mb-2">Frontend Engineering</h3>
                  <p className="text-sm">React, Next.js, TypeScript, Tailwind CSS, Framer Motion, WebGL</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
                  <h3 className="text-xl font-bold text-zinc-50 mb-2">Conversion Optimization</h3>
                  <p className="text-sm">A/B Testing, User Flow Analysis, Performance Tuning, Analytics</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
                  <h3 className="text-xl font-bold text-zinc-50 mb-2">UX/UI Design</h3>
                  <p className="text-sm">Figma, Wireframing, Prototyping, Design Systems, Interaction Design</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
                  <h3 className="text-xl font-bold text-zinc-50 mb-2">Web Standards</h3>
                  <p className="text-sm">WCAG 2.1 AA Compliance, Semantic HTML, Core Web Vitals</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-zinc-50 mb-6">Experience</h2>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l border-zinc-800">
                  <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-2" />
                  <div className="text-sm text-emerald-400 font-semibold mb-1">2021 - Present</div>
                  <h3 className="text-xl font-bold text-zinc-50">Senior Frontend Engineer</h3>
                  <div className="text-zinc-500 mb-2">TechFlow Inc.</div>
                  <p className="text-sm">Led the frontend architecture for a high-traffic SaaS platform. Improved Core Web Vitals by 40% and implemented a comprehensive A/B testing framework.</p>
                </div>
                
                <div className="relative pl-8 border-l border-zinc-800">
                  <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-2" />
                  <div className="text-sm text-zinc-500 font-semibold mb-1">2018 - 2021</div>
                  <h3 className="text-xl font-bold text-zinc-50">Frontend Developer</h3>
                  <div className="text-zinc-500 mb-2">Creative Digital Agency</div>
                  <p className="text-sm">Developed responsive, accessible websites for enterprise clients. Collaborated closely with designers to implement complex animations and interactions.</p>
                </div>
                
                <div className="relative pl-8 border-l border-zinc-800">
                  <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-2" />
                  <div className="text-sm text-zinc-500 font-semibold mb-1">2016 - 2018</div>
                  <h3 className="text-xl font-bold text-zinc-50">Web Designer & Developer</h3>
                  <div className="text-zinc-500 mb-2">Freelance</div>
                  <p className="text-sm">Designed and built custom WordPress themes and Shopify stores for small to medium businesses, focusing on e-commerce conversion rates.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
