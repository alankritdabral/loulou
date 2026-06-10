"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden parallax-bg" style={{ backgroundImage: "url('/loulou/images/indoor5.jpg')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-accent tracking-[0.5em] uppercase text-sm mb-6 block font-bold">Welcome to LOULOU</span>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-none text-white tracking-tight">
            Fine <br />
            <span className="text-accent italic font-light">Dining</span>
          </h1>
          <div className="gold-line" />
          <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the exquisite art of Pan-Asian cuisine in an elegant and sophisticated atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link href="/menu" className="btn-primary">View Full Menu</Link>
            <Link href="/contact#reservations" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-black">Book Your Table</Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
