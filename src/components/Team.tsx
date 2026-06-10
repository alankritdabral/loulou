"use client";

import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const Team = () => {
  const members: TeamMember[] = [
    { name: 'Gaurav Negi', role: 'Founder & Visionary', image: '/loulou/images/user-placeholder.svg' },
    { name: 'Aarti Negi', role: 'Co-Founder', image: '/loulou/images/user-placeholder.svg' },
    { name: 'Mr. Taj', role: 'Restaurant Manager', image: '/loulou/images/user-placeholder.svg' },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-title">Meet Our Experts</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Our Master Chefs</h2>
          <div className="gold-line" />
        </div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {members.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative overflow-hidden mb-6 gold-frame aspect-[4/5] bg-gray-50 shadow-lg">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center p-8">
                   <p className="text-white text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                     A visionary culinary artist with over 15 years of experience in mastering Pan-Asian flavors.
                   </p>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-2 text-black tracking-tight">{member.name}</h4>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-black">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
