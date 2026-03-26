import { motion } from 'motion/react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh]">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Let's <span className="text-emerald-400">connect</span>.
          </h1>
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
            I'm currently available for freelance projects and full-time opportunities. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-50 mb-1">Email</h3>
                <a href="mailto:hello@example.com" className="text-zinc-400 hover:text-emerald-400 transition-colors">hello@example.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-50 mb-1">Location</h3>
                <p className="text-zinc-400">San Francisco, CA (Remote available)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-50 mb-1">Phone</h3>
                <a href="tel:+1234567890" className="text-zinc-400 hover:text-emerald-400 transition-colors">+1 (234) 567-890</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 md:p-10"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-zinc-400">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
              <textarea 
                id="message" 
                rows={6}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              Send Message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
