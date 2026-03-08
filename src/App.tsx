import { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';

export default function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const openSchedule = () => setIsScheduleOpen(true);

  return (
    <div className="font-sans antialiased text-blue-900 bg-white selection:bg-orange-200 selection:text-orange-900">
      <Navbar onOpenSchedule={openSchedule} />
      <main>
        <Hero onOpenSchedule={openSchedule} />
        <Features />
        <WhyChooseUs />
        <Services />

        {/* CTA Section */}
        <section className="py-24 bg-orange-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl md:text-6xl text-white mb-8"
            >
              Ready to Feel the Difference?
            </motion.h2>
            <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
              Schedule your service today and get $50 off your first repair.
              Don't let the heat win.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                onClick={openSchedule}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Schedule Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Call (480) 503-2800
              </motion.button>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
      <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
    </div>
  );
}
