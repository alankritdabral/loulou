"use client";

import { motion } from 'framer-motion';

interface SpecialItem {
  name: string;
  image: string;
  price: string;
}

const Specials = () => {
  const items: SpecialItem[] = [
    { name: 'Crystal Mushroom Dumpling', image: '/loulou/images/dumpling2.jpg', price: '₹620' },
    { name: 'Steamed Fish with Sticky Rice', image: '/loulou/images/dish.jpg', price: '₹1,050' },
    { name: 'Korean Mushroom Bao', image: '/loulou/images/momo.jpg', price: '₹580' },
  ];

  return (
    <section id="specials" className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-title">Chef Selection</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Exquisite Specials</h2>
          <div className="gold-line" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden mb-8 aspect-[4/5] bg-gray-50">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <span className="btn-primary scale-90 group-hover:scale-100 transition-transform duration-500">Order Now</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors text-black">{item.name}</h4>
              <p className="text-accent font-bold text-2xl tracking-tight">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
