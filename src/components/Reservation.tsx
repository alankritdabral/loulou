"use client";

import { motion } from 'framer-motion';

const Reservation = () => {
  return (
    <section id="reservations" className="min-h-screen flex items-center relative overflow-hidden bg-secondary/30 py-12 md:py-0">
      <div className="absolute inset-0 opacity-10 grayscale parallax-bg" style={{ backgroundImage: "url('/loulou/images/indoor2.jpg')" }} />
      <div className="max-w-4xl mx-auto px-4 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-accent/10 relative"
        >
          <div className="text-center mb-10">
            <span className="section-title">Book A Table</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Reservations</h2>
            <div className="gold-line" />
          </div>
          
          <form className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-widest text-black/40 ml-1">Name</label>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-transparent border-b border-black/10 px-4 py-2 focus:outline-none focus:border-accent transition-colors text-black placeholder:text-black/20 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-widest text-black/40 ml-1">Phone</label>
              <input 
                type="tel" 
                placeholder="Number" 
                className="w-full bg-transparent border-b border-black/10 px-4 py-2 focus:outline-none focus:border-accent transition-colors text-black placeholder:text-black/20 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-widest text-black/40 ml-1">Date</label>
              <input 
                type="date" 
                className="w-full bg-transparent border-b border-black/10 px-4 py-2 focus:outline-none focus:border-accent transition-colors text-black text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-widest text-black/40 ml-1">Guests</label>
              <select className="w-full bg-transparent border-b border-black/10 px-4 py-2 focus:outline-none focus:border-accent transition-colors text-black appearance-none cursor-pointer text-sm">
                <option>2 Persons</option>
                <option>4 Persons</option>
                <option>6 Persons</option>
                <option>8+ Persons</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-widest text-black/40 ml-1">Notes</label>
              <textarea 
                placeholder="Special Requests" 
                className="w-full bg-transparent border-b border-black/10 px-4 py-2 focus:outline-none focus:border-accent transition-colors text-black h-20 placeholder:text-black/20 resize-none text-sm"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center mt-6">
              <button className="btn-primary min-w-[200px] !py-3">Confirm Reservation</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
