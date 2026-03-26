import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Project from './pages/Project';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 font-sans">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tighter" onClick={closeMenu}>
            <span className="text-emerald-400">DEV</span>.PORTFOLIOS
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link to="/#work" className="hover:text-zinc-50 transition-colors">Work</Link>
            <Link to="/about" className="hover:text-zinc-50 transition-colors">About</Link>
            <Link to="/process" className="hover:text-zinc-50 transition-colors">Process</Link>
            <Link to="/contact" className="px-5 py-2.5 bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors rounded-full font-semibold">
              Contact Me
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-zinc-800/50 bg-zinc-950/95 backdrop-blur-md overflow-hidden"
            >
              <nav className="flex flex-col px-6 py-6 gap-6 text-lg font-medium text-zinc-400">
                <Link to="/#work" onClick={closeMenu} className="hover:text-zinc-50 transition-colors">Work</Link>
                <Link to="/about" onClick={closeMenu} className="hover:text-zinc-50 transition-colors">About</Link>
                <Link to="/process" onClick={closeMenu} className="hover:text-zinc-50 transition-colors">Process</Link>
                <Link to="/contact" onClick={closeMenu} className="text-emerald-400 hover:text-emerald-300 transition-colors">Contact Me</Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/:id" element={<Project />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 bg-zinc-950 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-tighter">
            <span className="text-emerald-400">DEV</span>.PORTFOLIO
          </div>
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} All rights reserved. Built for performance.
          </div>
        </div>
      </footer>
    </div>
  );
}
