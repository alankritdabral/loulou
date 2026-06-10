import { Globe, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-20 mb-24">
          <div className="space-y-10">
            <h2 className="text-4xl font-black tracking-tighter text-white font-heading">LOULOU</h2>
            <p className="text-white/50 leading-relaxed text-base font-light italic">
              "Loulou by Piccolo" — Where authentic Umami meets vintage European elegance in the heart of Dehradun.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-white/40 hover:text-accent transition-all duration-300 hover:-translate-y-1"><Globe size={22} /></a>
              <a href="https://www.instagram.com/loulou_bypiccolo/" className="text-white/40 hover:text-accent transition-all duration-300 hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                <span className="text-xs font-bold tracking-widest">IG</span>
              </a>
              <a href="#" className="text-white/40 hover:text-accent transition-all duration-300 hover:-translate-y-1"><Phone size={22} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-12 uppercase tracking-[0.3em] text-white">Visit Us</h4>
            <ul className="space-y-8 text-white/50 text-base font-light">
              <li className="flex items-start gap-5 group cursor-pointer">
                <MapPin className="text-accent shrink-0 mt-1 transition-transform group-hover:scale-110" size={18} />
                <span className="group-hover:text-white/80 transition-colors text-sm">
                  Khasra No 355/2, Mauza Dakpatti, Near Sai Mandir, Kishanpur, Rajpur Road, Dehradun 248009
                </span>
              </li>
              <li className="flex items-center gap-5 group cursor-pointer">
                <Phone className="text-accent shrink-0 transition-transform group-hover:scale-110" size={18} />
                <span className="group-hover:text-white/80 transition-colors">+91 97598 10284</span>
              </li>
              <li className="flex items-center gap-5 group cursor-pointer">
                <Globe className="text-accent shrink-0 transition-transform group-hover:scale-110" size={18} />
                <span className="group-hover:text-white/80 transition-colors">loulou.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-12 uppercase tracking-[0.3em] text-white">Our Hours</h4>
            <ul className="space-y-8 text-white/50 text-base font-light mb-10">
              <li className="flex justify-between items-center group">
                <span className="group-hover:text-white/80 transition-colors">Mon - Sun</span>
                <span className="text-accent/80 font-bold text-xs uppercase tracking-widest">12:00 - 22:30</span>
              </li>
            </ul>
            <p className="text-[10px] text-white/30 uppercase tracking-widest leading-loose">
              Note: To maintain our tranquil atmosphere, we are currently a pet-free establishment.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-12 uppercase tracking-[0.3em] text-white">Newsletter</h4>
            <p className="text-white/50 mb-10 text-base font-light">Join our circle for exclusive culinary events and updates.</p>
            <div className="flex flex-col space-y-5">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border-b border-white/10 px-0 py-4 focus:outline-none focus:border-accent transition-all text-white placeholder:text-white/20 text-sm"
              />
              <button className="btn-primary w-full mt-2">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 text-center">
          <p className="text-white/20 text-[10px] tracking-[0.5em] uppercase font-bold">
            © 2026 LOULOU RESTAURANT — ELEGANCE REDEFINED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
