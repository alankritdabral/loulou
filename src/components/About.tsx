"use client";

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-white relative py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative block"
          >
            <div className="gold-frame aspect-[16/9] lg:aspect-[4/3] overflow-hidden shadow-2xl">
              <img 
                src="/loulou/images/restaurant.jpg" 
                alt="Restaurant Ambiance" 
                className="w-full h-full object-cover relative z-10 transition-transform duration-1000 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent p-4 hidden lg:block z-20 shadow-2xl">
              <p className="text-black font-black text-2xl leading-none">9</p>
              <p className="text-black font-bold text-[8px] uppercase tracking-widest mt-1">Years of <br />Piccolo Legacy</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="section-title !mb-2">Our Heritage</span>
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-4">The Vision of <br />Loulou by Piccolo</h2>
            <div className="gold-line-left !my-4" />
            <div className="space-y-3 text-text-muted leading-relaxed text-sm md:text-base mt-4">
              <p>
                Loulou Restaurant is the culmination of a decade-long journey by our founders, Gaurav and Aarti Negi. Following the success of the beloved Café De Piccolo, Loulou represents a deeper exploration into authentic Pan-Asian gastronomy.
              </p>
              <p>
                Inspired by Gaurav's extensive travels through 80% of the East Asian landscape, every dish is a tribute to the authentic "Umami" spirit. From our signature crystal dumplings to the rarest COD fish in Dehradun, we bring the true essence of the Orient to the hills.
              </p>
              <p className="italic text-sm">
                Set within a vintage European-style mansion, we pair our sophisticated flavors with the timeless melodies of mid-century vocal jazz, creating an atmosphere that transcends borders.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-16 h-12 flex items-center justify-center">
                <img src="/loulou/images/user-placeholder.svg" alt="Founder Photo" className="w-full h-full object-contain opacity-70 grayscale" />
              </div>
              <div>
                <p className="font-bold text-base text-black leading-tight">Gaurav Negi</p>
                <p className="text-accent text-[10px] uppercase tracking-widest font-bold mt-1">Founder & Visionary</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
