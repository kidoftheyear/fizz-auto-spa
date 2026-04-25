import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Droplets, 
  Zap, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Menu, 
  Phone, 
  Instagram, 
  ChevronRight,
  Clock,
  Sparkles,
  Truck
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-brand-black py-4 border-b border-white/10" : "bg-transparent py-8"}`}>
      <div className="max-w-[1440px] mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-display text-3xl font-black tracking-tighter uppercase whitespace-nowrap">
            Fizz <span className="text-white/40">Luxury Auto Spa</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#services" className="hover:text-white transition-colors">Ceramic Coatings</a>
          <a href="#services" className="hover:text-white transition-colors">Paint Correction</a>
          <a href="#about" className="hover:text-white transition-colors">Maintenance</a>
        </div>

        <div className="flex items-center gap-6">
          <a href="tel:+12568002675" className="hidden sm:flex items-center gap-2 text-white/40 hover:text-white transition-colors">
            <Phone size={14} />
            <span className="font-mono text-xs font-bold tracking-tight">(256)-800-2675</span>
          </a>
          <button className="px-6 py-2 border border-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Book Online 24/7
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury car showcase" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <div className="mb-6 px-3 py-1 inline-block bg-brand-red text-[10px] font-black uppercase tracking-widest">
            System X Accredited Installation Center
          </div>
          <h1 className="text-7xl md:text-9xl font-black leading-[0.85] mb-8 text-white uppercase">
            NORTH ALABAMA'S <br />
            <span className="text-outline border-t border-b border-white/10 py-2 inline-block w-full">
              PREMIER STUDIO
            </span><br />
            FOR CAR CARE.
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-lg mb-10 leading-relaxed uppercase tracking-tighter">
            Specializing in System X Ceramic Protection, Paint Correction, and Boutique Detailing in Madison, AL. Done right the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-tighter text-sm hover:bg-brand-red hover:text-white transition-all transform active:scale-95 shadow-2xl">
              Get A Quick Quote
            </button>
            <div className="flex flex-col justify-center border-l border-white/20 pl-6">
              <span className="text-[10px] uppercase text-white/40 font-bold tracking-widest mb-1">Serving North Alabama</span>
              <span className="text-xs font-bold uppercase tracking-widest">Madison • Huntsville • Decatur</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ValueProps = () => {
  const props = [
    {
      label: "Ceramic Coating",
      title: "Never Wax Again",
      desc: "Chemical-resistant layers and hydrophobic barriers.",
      icon: <ShieldCheck size={18} />
    },
    {
      label: "Paint Correction",
      title: "Mirror Finish Restore",
      desc: "Surgical-grade scratch and swirl removal.",
      icon: <Sparkles size={18} />
    },
    {
      label: "Mobile Service",
      title: "Self-Sufficient Unit",
      desc: "Onboard filtered water and medical-grade power.",
      icon: <Truck size={18} />
    },
    {
       label: "Pricing",
       title: "Transparent Upfront",
       desc: "Urable integrated scheduling—no guess work.",
       icon: <Zap size={18} />
    }
  ];

  return (
    <section className="bg-brand-black border-b border-white/10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {props.map((p, i) => (
          <div 
            key={i} 
            className="p-10 border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors group"
          >
            <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="text-brand-red group-hover:scale-110 transition-transform">{p.icon}</span>
              {p.label}
            </div>
            <h3 className="text-lg font-black uppercase mb-1">{p.title}</h3>
            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Ceramic Coatings",
      subtitle: "SYSTEM X CERAMIC PROTECTION",
      desc: "Hydrophobic technology that forms a permanent chemical bond with your vehicle's factory paint. Never wax again.",
      price: "$899",
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1470"
    },
    {
      title: "Paint Correction",
      subtitle: "MIRROR FINISH RESTORATION",
      desc: "Surgical-grade machine polishing to remove swirl marks, scratches, and oxidative damage. Restoring depth & clarity.",
      price: "$499",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1470"
    },
    {
      title: "The Fizz Deluxe",
      subtitle: "PREMIUM FULL DETAIL",
      desc: "Our signature deep-clean for both interior and exterior. Perfect for maintaining that showroom condition.",
      price: "$199",
      img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1470"
    }
  ];

  return (
    <section id="services" className="bg-brand-black py-32">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="flex items-center gap-6 mb-24">
          <h2 className="text-5xl font-black italic opacity-20">STUDIO SPECIALTIES</h2>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((s, i) => (
            <div key={i} className="bg-brand-black p-12 group flex flex-col h-full border-r border-white/10 last:border-r-0">
              <div className="relative overflow-hidden mb-10 aspect-video shrink-0">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70" 
                />
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-brand-blue text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block shrink-0">
                {s.subtitle}
              </span>
              <h3 className="text-4xl font-black mb-6 leading-none shrink-0">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 grow">{s.desc}</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <span className="text-2xl font-display font-medium">Starts at {s.price}</span>
                <button className="px-6 py-3 border border-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
    const reviews = [
        { name: "John D.", quote: "The best detailing in Huntsville. My car looks better than when I bought it!" },
        { name: "Sarah K.", quote: "Excellent experience with the ceramic coating. Very professional and helpful team." },
        { name: "Michael R.", quote: "Pricing is fair and the work is top tier. Highly recommend Fizz Luxury Auto Spa." }
    ];

    return (
        <section className="bg-brand-black py-24 border-t border-white/10">
            <div className="max-w-[1440px] mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {reviews.map((r, i) => (
                        <div key={i} className="space-y-4">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => <Sparkles key={i} size={12} className="text-brand-red" />)}
                            </div>
                            <p className="text-lg italic text-white/70 leading-relaxed font-light">"{r.quote}"</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/30">— {r.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AdditionalServicesGrid = () => {
  const addServices = [
    { title: "Engine Bay Deep Clean", price: "$100", label: "DEGREASE & RESTORE" },
    { title: "Headlight Restoration", price: "$150", label: "CERAMIC PROTECTED" },
    { title: "Ozone Odor Removal", price: "$100", label: "PURIFICATION" },
    { title: "Excessive Pet Hair", price: "$75", label: "DEEP EXTRACTION" },
    { title: "Convertible Top", price: "$120", label: "FABRIC SEALANT" },
    { title: "Wheel-Off Coating", price: "$250", label: "SYSTEM X WHEEL" },
  ];

  return (
    <section className="bg-brand-black border-t border-white/10 py-24">
       <div className="max-w-[1440px] mx-auto px-10">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-3xl font-black italic opacity-20 uppercase">ENHANCEMENTS</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
             {addServices.map((s, i) => (
                <div 
                  key={i} 
                  className="p-12 bg-brand-black flex flex-col justify-between h-72 hover:bg-white/5 transition-all group"
                >
                   <div>
                     <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase block mb-2">{s.label}</span>
                     <h3 className="text-3xl font-black uppercase leading-[0.9]">{s.title}</h3>
                   </div>
                   <div className="flex justify-between items-end">
                      <span className="text-2xl font-display font-medium text-white">{s.price}</span>
                      <button className="px-4 py-2 border border-white/20 text-[10px] font-bold uppercase transition-all group-hover:border-white">
                        Add
                      </button>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

const BookingCTA = () => {
  return (
    <section className="relative py-48 bg-brand-black border-t border-white/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-10 text-center">
         <div className="text-brand-blue text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Ready for the Mirror Finish?</div>
         <h2 className="text-7xl md:text-9xl font-black mb-12 leading-[0.85] uppercase">LET'S GET <br /> <span className="text-outline">ACCREDITED.</span></h2>
         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-12 py-6 bg-white text-black font-black uppercase tracking-tighter text-lg hover:bg-brand-red hover:text-white transition-all transform active:scale-95">
               Book Online 24/7
            </button>
            <div className="text-left border-l border-white/20 pl-8">
               <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Schedule with</div>
               <div className="text-lg font-black italic opacity-30 tracking-tighter uppercase whitespace-nowrap">Urable Studio</div>
            </div>
         </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-black tracking-tighter uppercase">
                Fizz <span className="text-white/40">Luxury Auto Spa</span>
              </span>
            </div>
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest leading-loose max-w-xs">
              North Alabama's boutique studio specializing in System X ceramic protection and surgical-grade paint correction. Done right the first time.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Instagram size={16} />
               </a>
            </div>
          </div>

          <div>
             <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Studio Info</h4>
             <ul className="space-y-6 text-sm font-bold uppercase tracking-tight">
                <li className="flex gap-4 items-start">
                   <MapPin size={16} className="text-brand-red shrink-0" />
                   <span className="leading-tight">400 Slaughter Rd Suite 407, <br/>Madison, AL 35758</span>
                </li>
             </ul>
          </div>

          <div>
             <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Specialties</h4>
             <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Ceramic Coatings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Paint Correction</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Concierge</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maintenance Programs</a></li>
             </ul>
          </div>

          <div className="space-y-8">
             <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Direct Line</h4>
             <a href="tel:+12568002675" className="text-3xl font-display font-medium block">(256)-800-2675</a>
             <div className="h-px bg-white/10"></div>
             <p className="text-white/40 text-[10px] font-bold italic tracking-widest uppercase">Showcase Condition Year-Round.</p>
          </div>
        </div>
        
        <div className="flex flex-col md:row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.3em] font-black text-white/20">
           <p>© 2024 Fizz Studio. Built for Performance.</p>
           <div className="flex gap-12">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <ValueProps />
      <Services />
      <section id="about" className="bg-brand-black py-24 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
                <img 
                    src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=1000" 
                    alt="Studio Interior" 
                    className="w-full aspect-square object-cover grayscale opacity-60 border border-white/10"
                />
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-red/10 blur-3xl -z-10"></div>
            </div>
            <div className="space-y-8">
                <span className="text-brand-blue text-[10px] font-bold tracking-[0.4em] uppercase">The Boutique Standard</span>
                <h2 className="text-6xl font-black uppercase leading-none">CRAFTED FOR <br/> <span className="text-outline">ENTHUSIASTS.</span></h2>
                <p className="text-white/50 text-lg leading-relaxed font-light">
                    Fizz Luxury Auto Spa isn't a high-volume shop. We are a boutique studio where every vehicle is treated as a masterwork. Our mission is simple: to provide Madison and Huntsville with the most meticulous car care possible.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div>
                        <div className="text-3xl font-black italic opacity-20 mb-2">100%</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Filtered Water</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black italic opacity-20 mb-2">SYSTEM X</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Exclusive Partner</div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Testimonials />
      <AdditionalServicesGrid />
      <BookingCTA />
      <Footer />
    </div>
  );
}
