"use client";

import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    '/loulou/images/sushi.jpg',
    '/loulou/images/Crystal+Mushroom+Dumplings.webp',
    '/loulou/images/drink.jpg',
    '/loulou/images/Korean_Mushroom_Bao.webp',
    '/loulou/images/tea.jpg',
    '/loulou/images/egg_rice_soup.jpg',
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-title">Visual Artistry</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Culinary Gallery</h2>
          <div className="gold-line" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden group shadow-xl bg-gray-50"
            >
              <img src={img} alt="Gallery item" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                 <div className="w-12 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                 <span className="text-white text-xs font-bold uppercase tracking-[0.3em] mx-4 scale-90 group-hover:scale-100 transition-transform duration-700">View</span>
                 <div className="w-12 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
