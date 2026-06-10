"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  name: string;
  price: string;
  desc: string;
}

type MenuCategories = 'Dim Sum' | 'Sushi' | 'Appetizers' | 'Noodles' | 'Curries & Rice' | 'Drinks';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategories>('Dim Sum');
  const [prevCategory, setPrevCategory] = useState<MenuCategories>('Dim Sum');
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const categories: MenuCategories[] = ['Dim Sum', 'Sushi', 'Appetizers', 'Noodles', 'Curries & Rice', 'Drinks'];

  const menuItems: Record<string, MenuItem[]> = {
    'Dim Sum': [
      { name: 'Spinach & Corn Cheese Chilli Oil Wonton', price: '₹440', desc: 'Delicate wontons with spinach, corn, and cheese in spicy chili oil.' },
      { name: 'Vegetable & Chives Dumpling', price: '₹340', desc: 'Fresh vegetable and chives filling in a translucent wrapper.' },
      { name: 'Homemade Chicken Momos', price: '₹540', desc: 'Traditional steamed chicken dumplings with spicy chutney.' },
      { name: 'Four Seasons Vegetable Dumpling', price: '₹440', desc: 'Artfully crafted dumplings with seasonal vegetable fillings.' },
      { name: 'Crystal Dumpling', price: '₹740', desc: 'Our signature translucent dumplings with exotic mushroom filling.' },
      { name: 'Asian Exotic Wonton', price: '₹740', desc: 'Exquisite wontons with a blend of rare Asian herbs and fillings.' }
    ],
    'Sushi': [
      { name: 'Jalapeño Tempura Sushi', price: '₹750', desc: 'Spicy jalapeño tempura with cream cheese and avocado.' },
      { name: 'Umami Prawn Tempura', price: '₹790', desc: 'Crispy prawn tempura with our signature umami sauce.' },
      { name: 'Korean Chicken Sushi', price: '₹700', desc: 'Tender chicken with spicy Korean glaze and pickled radish.' },
      { name: 'Cottage Cheese Sushi', price: '₹640', desc: 'Creamy cottage cheese with cucumber and sesame seeds.' },
      { name: 'Bamboo Sushi', price: '₹690', desc: 'Fresh bamboo shoots with asparagus and light soy glaze.' },
      { name: 'Enoki Tempura Sushi', price: '₹790', desc: 'Delicate enoki mushroom tempura with truffle mayo.' }
    ],
    'Appetizers': [
      { name: 'Crispy CDO in Chilli Garlic Sauce', price: '₹590', desc: 'Crispy vegetables tossed in a pungent chili garlic sauce.' },
      { name: 'Mushroom Dumpling', price: '₹530', desc: 'Pan-seared dumplings filled with wild forest mushrooms.' },
      { name: 'Crispy Corn', price: '₹450', desc: 'Golden fried corn kernels with salt and pepper seasoning.' },
      { name: 'Crispy Chicken', price: '₹540', desc: 'Succulent chicken strips fried to perfection with Asian spices.' },
      { name: 'Stuffed Mushroom Thai Basil', price: '₹450', desc: 'Mushrooms stuffed with herbs and tossed with fresh Thai basil.' },
      { name: 'Thai Spring Roll', price: '₹460', desc: 'Crispy rolls filled with glass noodles and mixed vegetables.' }
    ],
    'Noodles': [
      { name: 'Drunken Noodles', price: '₹540', desc: 'Wide rice noodles stir-fried with spicy chili, basil, and choice of protein.' },
      { name: 'Pad Thai Noodles', price: '₹640', desc: 'Classic Thai rice noodles with peanuts, bean sprouts, and tangy tamarind sauce.' },
      { name: 'Shanghai Noodles', price: '₹640', desc: 'Wok-tossed noodles with bok choy and savory dark soy sauce.' },
      { name: 'Stir Fry Noodles', price: '₹460', desc: 'Thin egg noodles tossed with seasonal vegetables and light soy.' },
      { name: 'Spicy Ramen Bowl', price: '₹750', desc: 'Rich and spicy broth with hand-pulled noodles and assorted toppings.' }
    ],
    'Curries & Rice': [
      { name: 'Thai Red Curry', price: '₹799', desc: 'Authentic spicy red curry with coconut milk and bamboo shoots.' },
      { name: 'Japanese Katsu Curry', price: '₹799', desc: 'Crispy breaded cutlet served with thick savory Japanese curry sauce.' },
      { name: 'Thai Green Curry', price: '₹799', desc: 'Fragrant green curry with Thai eggplant and sweet basil.' },
      { name: 'Mangolian Tofu / Chicken', price: '₹799', desc: 'Savory soy-based sauce with ginger, garlic, and scallions.' },
      { name: 'Thai Basil Chicken', price: '₹750', desc: 'Minced chicken stir-fried with garlic, chilies, and holy basil.' },
      { name: 'Japanese Sticky Rice', price: '₹300', desc: 'Premium short-grain rice steamed to sticky perfection.' }
    ],
    'Drinks': [
      { name: 'Thai Orange Kaffir Lime', price: '₹180', desc: 'Refreshing citrus blend with fragrant kaffir lime leaves.' },
      { name: 'Watermelon & Mint', price: '₹190', desc: 'Cool watermelon juice with a hint of fresh garden mint.' },
      { name: 'Summer Blossom', price: '₹180', desc: 'Floral and fruity infusion, perfect for warm afternoons.' },
      { name: 'Cappuccino', price: '₹260', desc: 'Double shot of espresso with steamed milk and thick foam.' },
      { name: 'Americano', price: '₹120', desc: 'Rich espresso diluted with hot water for a smooth finish.' },
      { name: 'Peach Iced Tea', price: '₹200', desc: 'Chilled black tea infused with sweet peach nectar.' }
    ]
  };

  const handleCategoryChange = (cat: MenuCategories) => {
    if (cat === activeCategory || isFlipping) return;
    setPrevCategory(activeCategory);
    setActiveCategory(cat);
    setIsFlipping(true);
  };

  return (
    <section id="menu" className="py-12 md:py-16 bg-white overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 md:mb-12">
          <span className="section-title">Discover Our Taste</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Food Menu</h2>
          <div className="gold-line" />
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer relative py-1 ${
                activeCategory === cat ? 'text-accent' : 'text-black/40 hover:text-accent'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div layoutId="menu-underline" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent" />
              )}
            </button>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto perspective-2000">
          <div className="grid md:grid-cols-2 bg-[#fdfaf3] book-shadow min-h-[500px] md:min-h-[550px] relative rounded-sm overflow-visible border border-black/5">
            
            {/* LEFT PAGE (Category Info) */}
            <div className={`p-8 md:p-12 border-r border-black/5 flex-col justify-center items-center text-center relative bg-[#fdfaf3] page-edge ${isMobile ? 'hidden' : 'flex'}`}>
               <div className="absolute top-6 left-6 text-black/10 text-[8px] font-bold tracking-[0.3em] uppercase">LOULOU BY PICCOLO</div>
               {!isFlipping && (
                 <div className="opacity-100">
                   <span className="text-accent tracking-[0.4em] uppercase text-[9px] mb-2 block font-black">Selection</span>
                   <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black tracking-tighter italic">{activeCategory}</h3>
                   <div className="w-12 h-[1px] bg-accent/30 mx-auto" />
                   <p className="mt-6 text-black/30 text-[9px] uppercase tracking-widest font-bold">Est. 2017</p>
                 </div>
               )}
            </div>

            {/* RIGHT PAGE (The content page) */}
            <div className="p-6 md:p-12 flex flex-col justify-center relative bg-[#fdfaf3] page-edge-right col-span-1 md:col-span-1">
              {isMobile && (
                 <div className="mb-6 text-center border-b border-black/5 pb-4">
                    <h3 className="text-2xl font-bold text-black italic">{activeCategory}</h3>
                 </div>
              )}
              <div className="space-y-4 md:space-y-6">
                {menuItems[activeCategory].map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex items-end justify-between mb-1">
                      <h4 className="text-xs md:text-sm font-bold text-black tracking-tight">{item.name}</h4>
                      <div className="flex-grow border-b border-dotted border-black/10 mx-2 mb-1" />
                      <span className="text-accent font-bold text-xs md:text-sm tracking-tight">{item.price}</span>
                    </div>
                    <p className="text-black/40 text-[9px] md:text-[10px] italic leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* THE FLIPPING PAGE OBJECT */}
            <AnimatePresence>
              {isFlipping && (
                <motion.div
                  key="flip-page"
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -180 }}
                  onAnimationComplete={() => {
                    setIsFlipping(false);
                    setPrevCategory(activeCategory);
                  }}
                  transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1.000] }}
                  style={{ 
                    transformOrigin: isMobile ? "center" : "left center",
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: isMobile ? "100%" : "50%",
                    height: "100%",
                    zIndex: 50,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* FRONT SIDE (Old Content) */}
                  <div 
                    className="absolute inset-0 bg-[#fdfaf3] p-6 md:p-12 flex flex-col justify-center border-l border-black/5 shadow-2xl"
                    style={{ 
                      backfaceVisibility: "hidden", 
                      WebkitBackfaceVisibility: "hidden",
                      zIndex: 2,
                      transform: "translateZ(1px)"
                    }}
                  >
                    {isMobile && (
                      <div className="mb-6 text-center border-b border-black/5 pb-4">
                          <h3 className="text-2xl font-bold text-black italic">{prevCategory}</h3>
                      </div>
                    )}
                    <div className="space-y-4 md:space-y-6">
                      {menuItems[prevCategory].map((item) => (
                        <div key={item.name} className="group">
                          <div className="flex items-end justify-between mb-1">
                            <h4 className="text-xs md:text-sm font-bold text-black tracking-tight">{item.name}</h4>
                            <div className="flex-grow border-b border-dotted border-black/10 mx-2 mb-1" />
                            <span className="text-accent font-bold text-xs md:text-sm tracking-tight">{item.price}</span>
                          </div>
                          <p className="text-black/40 text-[9px] md:text-[10px] italic leading-tight">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BACK SIDE (Landing on left) */}
                  <div 
                    className="absolute inset-0 bg-[#fdfaf3] p-6 md:p-12 flex flex-col justify-center border-r border-black/10 shadow-inner"
                    style={{ 
                      backfaceVisibility: "hidden", 
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg) translateZ(1px)",
                      zIndex: 1
                    }}
                  >
                    {isMobile && (
                      <div className="flex flex-col justify-center">
                        <div className="mb-6 text-center border-b border-black/5 pb-4">
                            <h3 className="text-2xl font-bold text-black italic">{activeCategory}</h3>
                        </div>
                        <div className="space-y-4 md:space-y-6">
                          {menuItems[activeCategory].map((item) => (
                            <div key={item.name} className="group">
                              <div className="flex items-end justify-between mb-1">
                                <h4 className="text-xs md:text-sm font-bold text-black tracking-tight">{item.name}</h4>
                                <div className="flex-grow border-b border-dotted border-black/10 mx-2 mb-1" />
                                <span className="text-accent font-bold text-xs md:text-sm tracking-tight">{item.price}</span>
                              </div>
                              <p className="text-black/40 text-[9px] md:text-[10px] italic leading-tight">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {!isMobile && (
                      <div className="absolute inset-0 bg-gradient-to-l from-black/5 via-transparent to-transparent opacity-30" />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Center Spine Detail (Only Desktop) */}
            {!isMobile && (
              <>
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/10 z-[60]" />
                <div className="absolute left-1/2 top-0 bottom-0 w-[60px] -translate-x-1/2 bg-gradient-to-r from-black/5 via-black/0 to-black/5 z-[60] pointer-events-none" />
                <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-[2px] bg-white/40 z-[60] pointer-events-none" />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
