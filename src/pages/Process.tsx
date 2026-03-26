import { motion } from 'motion/react';

export default function Process() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 max-w-2xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">My <span className="text-emerald-400">Process</span>.</h1>
        <p className="text-xl text-zinc-400">A systematic approach to building high-converting digital experiences, from initial audit to final deployment.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
        {/* Step 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative pl-8 md:pl-0 pt-4 md:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden md:block text-8xl font-bold text-zinc-700/30 absolute -top-12 -left-8 pointer-events-none select-none"
          >
            01
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:hidden text-6xl font-bold text-zinc-700/30 absolute -top-2 left-0 pointer-events-none select-none"
          >
            01
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 relative z-10">Discovery & Audit</h3>
          <p className="text-zinc-400 leading-relaxed relative z-10">We start by deeply understanding your business goals, target audience, and current pain points. I conduct a thorough UX and performance audit of your existing assets to identify conversion bottlenecks.</p>
        </motion.div>

        {/* Step 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative pl-8 md:pl-0 pt-4 md:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden md:block text-8xl font-bold text-zinc-700/30 absolute -top-12 -left-8 pointer-events-none select-none"
          >
            02
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="md:hidden text-6xl font-bold text-zinc-700/30 absolute -top-2 left-0 pointer-events-none select-none"
          >
            02
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 relative z-10">Strategy & Wireframing</h3>
          <p className="text-zinc-400 leading-relaxed relative z-10">Based on the audit, I map out the optimal user journey. We create low-fidelity wireframes to establish the information architecture, focusing entirely on flow and conversion before adding visual design.</p>
        </motion.div>

        {/* Step 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative pl-8 md:pl-0 pt-4 md:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden md:block text-8xl font-bold text-zinc-700/30 absolute -top-12 -left-8 pointer-events-none select-none"
          >
            03
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="md:hidden text-6xl font-bold text-zinc-700/30 absolute -top-2 left-0 pointer-events-none select-none"
          >
            03
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 relative z-10">Development & Optimization</h3>
          <p className="text-zinc-400 leading-relaxed relative z-10">I build the solution using modern, lightweight technologies. Every line of code is optimized for speed, accessibility (WCAG compliance), and SEO, ensuring a flawless experience across all devices.</p>
        </motion.div>

        {/* Step 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative pl-8 md:pl-0 pt-4 md:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="hidden md:block text-8xl font-bold text-zinc-700/30 absolute -top-12 -left-8 pointer-events-none select-none"
          >
            04
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="md:hidden text-6xl font-bold text-zinc-700/30 absolute -top-2 left-0 pointer-events-none select-none"
          >
            04
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 relative z-10">Testing & Iteration</h3>
          <p className="text-zinc-400 leading-relaxed relative z-10">Before launch, the site undergoes rigorous cross-browser and performance testing. Post-launch, we monitor user behavior and run A/B tests to continuously refine and improve conversion rates.</p>
        </motion.div>
      </div>
    </div>
  );
}
