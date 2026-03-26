import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              I build digital experiences that <span className="text-emerald-400">convert</span>.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl text-zinc-400 mb-10 leading-relaxed"
            >
              Senior Frontend Developer & CRO Specialist. I transform complex problems into elegant, high-performance web applications that drive business growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <a href="#work" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-full transition-all flex items-center gap-2 group">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/process" className="text-zinc-400 hover:text-zinc-50 font-medium transition-colors flex items-center gap-2">
                Read My Process
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent" />
            <img 
              src="https://picsum.photos/seed/workspace/800/1000" 
              alt="Modern workspace" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-y border-zinc-800/50 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-8">Trusted by innovative teams</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 opacity-50 grayscale">
                {/* Logos placeholders */}
                <div className="h-8 flex items-center font-bold text-xl tracking-tighter">ACME Corp</div>
                <div className="h-8 flex items-center font-bold text-xl tracking-tighter">GlobalTech</div>
                <div className="h-8 flex items-center font-bold text-xl tracking-tighter">Nexus</div>
                <div className="h-8 flex items-center font-bold text-xl tracking-tighter">Stark</div>
              </div>
            </div>
            <div className="pl-0 lg:pl-16 lg:border-l border-zinc-800">
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-zinc-300 mb-6">
                "The attention to detail and focus on performance completely transformed our conversion rates. An absolute game-changer for our product."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden">
                  <img src="https://picsum.photos/seed/portrait/100/100" alt="Client" referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-50">Sarah Jenkins</div>
                  <div className="text-sm text-zinc-500">VP of Product, TechFlow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Work</h2>
          <p className="text-xl text-zinc-400 max-w-2xl">A selection of recent projects focused on user experience and measurable outcomes.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-8 md:gap-16">
            {/* Project 1 */}
            <Link 
              to="/work/fintech" 
              className="group cursor-pointer block"
              onMouseEnter={(e) => e.currentTarget.querySelector('video')?.play()}
              onMouseLeave={(e) => e.currentTarget.querySelector('video')?.pause()}
            >
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 mb-6 relative">
                <video src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">Fintech Dashboard</h3>
                <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 group-hover:-rotate-45 transition-all" />
              </div>
              <p className="text-zinc-400 mb-4">Redesigned the core user flow, resulting in a 42% increase in successful onboarding completions.</p>
              <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">View Case Study</span>
            </Link>

            {/* Project 3 */}
            <Link 
              to="/work/saas" 
              className="group cursor-pointer block"
              onMouseEnter={(e) => e.currentTarget.querySelector('video')?.play()}
              onMouseLeave={(e) => e.currentTarget.querySelector('video')?.pause()}
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 mb-6 relative">
                <video src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">SaaS Marketing Site</h3>
                <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 group-hover:-rotate-45 transition-all" />
              </div>
              <p className="text-zinc-400 mb-4">Built a blazing fast static site with Next.js, achieving 100/100 Lighthouse scores across the board.</p>
              <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">View Case Study</span>
            </Link>
          </div>

          <div className="flex flex-col gap-8 md:gap-16 md:mt-16">
            {/* Project 2 */}
            <Link 
              to="/work/ecommerce" 
              className="group cursor-pointer block"
              onMouseEnter={(e) => e.currentTarget.querySelector('video')?.play()}
              onMouseLeave={(e) => e.currentTarget.querySelector('video')?.pause()}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 mb-6 relative">
                <video src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">E-Commerce Platform</h3>
                <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 group-hover:-rotate-45 transition-all" />
              </div>
              <p className="text-zinc-400 mb-4">Optimized checkout architecture and mobile responsiveness, dropping cart abandonment by 18%.</p>
              <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">View Case Study</span>
            </Link>
            
            {/* Project 4 */}
            <Link to="/work/healthtech" className="group cursor-pointer block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 mb-6 relative">
                <img src="https://picsum.photos/seed/app/800/600" alt="Project 4" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">HealthTech App</h3>
                <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 group-hover:-rotate-45 transition-all" />
              </div>
              <p className="text-zinc-400 mb-4">Implemented an accessible component library compliant with WCAG 2.1 AA standards.</p>
              <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">View Case Study</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
