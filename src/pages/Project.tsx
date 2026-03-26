import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const projectsData: Record<string, any> = {
  'fintech': {
    title: 'Fintech Dashboard',
    description: 'Redesigned the core user flow, resulting in a 42% increase in successful onboarding completions.',
    longDescription: 'For this fintech startup, the primary challenge was a high drop-off rate during the complex KYC (Know Your Customer) onboarding process. By breaking down the forms into manageable, bite-sized steps and introducing real-time validation with clear error states, we significantly reduced cognitive load. The result was a 42% increase in completed onboardings and a 30% reduction in support tickets related to account creation.',
    images: [
      { type: 'video', url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', className: 'col-span-1 md:col-span-2 aspect-[16/9]' },
      { type: 'video', url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', className: 'col-span-1 aspect-[16/9]' },
      { type: 'video', url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', className: 'col-span-1 aspect-[16/9]' },
      { type: 'video', url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', className: 'col-span-1 md:col-span-2 aspect-[21/9]' },
    ],
    galleryGrid: 'md:grid-cols-2',
    role: 'Lead UX/UI Designer',
    timeline: '3 Months',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts']
  },
  'ecommerce': {
    title: 'E-Commerce Platform',
    description: 'Optimized checkout architecture and mobile responsiveness, dropping cart abandonment by 18%.',
    longDescription: 'A major retail brand was experiencing high cart abandonment on mobile devices. I led the frontend rebuild of their checkout flow, implementing a single-page checkout experience with Apple Pay and Google Pay integration. We also optimized image loading and reduced the JavaScript bundle size by 40%, leading to a sub-second time-to-interactive on 3G networks.',
    images: [
      { type: 'video', url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', className: 'col-span-1 aspect-[4/5] md:aspect-[9/16]' },
      { type: 'video', url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', className: 'col-span-1 aspect-[4/5] md:aspect-[9/16]' },
      { type: 'video', url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', className: 'col-span-1 aspect-[4/5] md:aspect-[9/16]' },
    ],
    galleryGrid: 'md:grid-cols-3',
    role: 'Frontend Engineer',
    timeline: '4 Months',
    tech: ['Next.js', 'Stripe', 'Zustand', 'Framer Motion']
  },
  'saas': {
    title: 'SaaS Marketing Site',
    description: 'Built a blazing fast static site with Next.js, achieving 100/100 Lighthouse scores across the board.',
    longDescription: 'This B2B SaaS company needed a marketing site that reflected the speed and reliability of their core product. I architected a static site using Next.js and MDX for their blog. By heavily utilizing Next.js Image optimization, strict component lazy loading, and edge caching, we achieved perfect Lighthouse scores, which directly contributed to a 25% increase in organic search traffic.',
    images: [
      { type: 'video', url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4', className: 'col-span-1 md:col-span-2 aspect-square' },
      { type: 'video', url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', className: 'col-span-1 aspect-square' },
      { type: 'video', url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', className: 'col-span-1 aspect-square' },
    ],
    galleryGrid: 'md:grid-cols-2',
    role: 'Full Stack Developer',
    timeline: '2 Months',
    tech: ['Next.js', 'Tailwind CSS', 'MDX', 'Vercel']
  },
  'healthtech': {
    title: 'HealthTech App',
    description: 'Implemented an accessible component library compliant with WCAG 2.1 AA standards.',
    longDescription: 'In the healthcare sector, accessibility is not just a feature—it is a requirement. I was brought in to audit and rebuild the core UI components of a patient portal. I established a comprehensive design system with strict contrast ratios, full keyboard navigability, and robust screen reader support. The new system was adopted across 4 different product teams.',
    images: [
      { type: 'image', url: 'https://picsum.photos/seed/health1/1200/800', className: 'col-span-1 md:col-span-3 aspect-[4/3] md:aspect-[21/9]' },
      { type: 'image', url: 'https://picsum.photos/seed/health2/800/800', className: 'col-span-1 aspect-[4/3] md:aspect-square' },
      { type: 'image', url: 'https://picsum.photos/seed/health3/800/800', className: 'col-span-1 aspect-[4/3] md:aspect-square' },
      { type: 'image', url: 'https://picsum.photos/seed/health4/800/800', className: 'col-span-1 aspect-[4/3] md:aspect-square' },
    ],
    galleryGrid: 'md:grid-cols-3',
    role: 'Accessibility Consultant',
    timeline: '6 Months',
    tech: ['React', 'TypeScript', 'Jest', 'Storybook']
  }
};

export default function Project() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <Link to="/" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh]">
      <div className="mb-12">
        <Link to="/#work" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          {project.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl text-zinc-300 max-w-3xl leading-relaxed"
        >
          {project.description}
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="grid md:grid-cols-4 gap-8 py-12 border-y border-zinc-800/50 mb-16"
      >
        <div className="md:col-span-2 pr-0 md:pr-12">
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">About the Project</h3>
          <p className="text-zinc-400 leading-relaxed">{project.longDescription}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">Role & Timeline</h3>
          <div className="space-y-4">
            <div>
              <div className="text-zinc-50 font-medium">{project.role}</div>
              <div className="text-zinc-500 text-sm">Role</div>
            </div>
            <div>
              <div className="text-zinc-50 font-medium">{project.timeline}</div>
              <div className="text-zinc-500 text-sm">Timeline</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">Technologies</h3>
          <ul className="space-y-2">
            {project.tech.map((t: string, i: number) => (
              <li key={i} className="text-zinc-50 font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Gallery */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className={`grid grid-cols-1 ${project.galleryGrid || 'md:grid-cols-2'} gap-6`}>
          {project.images.map((media: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-2xl overflow-hidden bg-zinc-900 ${media.className}`}
            >
              {media.type === 'video' ? (
                <video 
                  src={media.url} 
                  loop 
                  playsInline 
                  onClick={(e) => {
                    const video = e.currentTarget;
                    if (video.paused) {
                      video.play();
                    } else {
                      video.pause();
                    }
                  }}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                />
              ) : (
                <img 
                  src={media.url} 
                  alt={`${project.title} screenshot ${i + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Next Project CTA could go here */}
      <div className="text-center py-12 border-t border-zinc-800/50">
        <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-full transition-all group">
          Let's Talk
          <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
