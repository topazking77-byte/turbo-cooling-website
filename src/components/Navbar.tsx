import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenSchedule }: { onOpenSchedule: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Financing', href: '#financing' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
            T
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className={`font-display font-bold text-2xl tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            Turbo<span className="text-blue-500">Cooling</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${isScrolled ? 'text-blue-600' : 'text-blue-200'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA & Phone */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+14805032800"
            className={`flex items-center gap-2 font-semibold transition-colors ${isScrolled ? 'text-blue-900' : 'text-white'
              }`}
          >
            <Phone className="w-4 h-4 text-orange-500" />
            <span>(480) 503-2800</span>
          </a>
          <motion.button
            onClick={onOpenSchedule}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-orange-500/30 transition-all"
          >
            Schedule Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-blue-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-blue-900" : "text-white"} /> : <Menu className={isScrolled ? "text-blue-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-blue-100 p-6 md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-blue-600 font-medium py-2 hover:text-orange-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-blue-100 my-2" />
          <a href="tel:+14805032800" className="flex items-center gap-2 font-semibold text-blue-900 py-2">
            <Phone className="w-4 h-4 text-orange-500" />
            (480) 503-2800
          </a>
          <button onClick={() => { setIsMobileMenuOpen(false); onOpenSchedule(); }} className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/30">
            Schedule Now
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
