import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hotel, 
  Bed, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Star, 
  Check,
  Calendar,
  Users,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { ROOMS, SPA_SERVICES } from './constants';
import { Room, SpaService } from './types';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Spa', href: '#spa' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-stone-900 rounded-lg flex items-center justify-center text-white">
            <Hotel size={24} />
          </div>
          <span className={`text-xl font-serif font-bold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>VINPYL</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-stone-500 ${isScrolled ? 'text-stone-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-stone-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-all">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-stone-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-stone-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-center font-medium">
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000" 
          alt="Hotel Exterior" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-widest uppercase rounded-full mb-6">
            Luxury Redefined in Uyo
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
            Experience Elegance <br /> 
            <span className="italic">at Vinpyl Hotels</span>
          </h1>
          <p className="text-lg text-stone-200 mb-8 max-w-lg">
            Nestled in the heart of Uyo LGA, we offer a sanctuary of luxury, comfort, and world-class hospitality.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#rooms" className="bg-white text-stone-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 transition-all flex items-center gap-2 group">
              Explore Rooms <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#spa" className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
              Spa & Wellness
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Info */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white max-w-xs"
        >
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={16} className="text-stone-300" />
            <span className="text-xs font-medium uppercase tracking-wider">Location</span>
          </div>
          <p className="text-sm">Uyo LGA, Akwa Ibom State, Nigeria</p>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle, centered = false }: { title: string, subtitle: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <span className="text-stone-500 text-xs font-bold uppercase tracking-[0.2em] mb-2 block">{subtitle}</span>
    <h2 className="text-3xl md:text-4xl font-serif text-stone-900">{title}</h2>
  </div>
);

const RoomCard = ({ room }: { room: Room }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100"
  >
    <div className="h-64 overflow-hidden relative">
      <img src={room.image} alt={room.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-stone-900">
        ₦{room.price.toLocaleString()} / night
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-serif mb-2">{room.name}</h3>
      <p className="text-stone-500 text-sm mb-4 line-clamp-2">{room.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {room.amenities.slice(0, 3).map(amenity => (
          <span key={amenity} className="text-[10px] uppercase tracking-wider font-bold text-stone-400 bg-stone-50 px-2 py-1 rounded">
            {amenity}
          </span>
        ))}
      </div>
      <button className="w-full py-3 border border-stone-200 rounded-xl text-sm font-bold hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all">
        Book This Room
      </button>
    </div>
  </motion.div>
);

const SpaCard = ({ service }: { service: SpaService }) => (
  <div className="flex flex-col md:flex-row gap-6 items-center bg-white p-4 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
    <div className="w-full md:w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0">
      <img src={service.image} alt={service.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-serif">{service.name}</h3>
        <span className="text-stone-900 font-bold">₦{service.price.toLocaleString()}</span>
      </div>
      <p className="text-stone-500 text-sm mb-4">{service.description}</p>
      <div className="flex items-center gap-4">
        <span className="text-xs text-stone-400 flex items-center gap-1">
          <Calendar size={14} /> {service.duration}
        </span>
        <button className="text-xs font-bold text-stone-900 underline underline-offset-4 hover:text-stone-600">
          Book Session
        </button>
      </div>
    </div>
  </div>
);

const BookingForm = () => {
  const [type, setType] = useState<'room' | 'spa'>('room');

  return (
    <section id="book" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-stone-800 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-800 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="Ready to Start Your Journey?" 
              subtitle="Reservation" 
            />
            <p className="text-stone-400 mb-8 max-w-md">
              Whether you're looking for a peaceful night's sleep or a rejuvenating spa day, we're here to make it happen. Fill out the form and our concierge will handle the rest.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-lg">+234 800 VINPYL HOTELS</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-lg">reservations@vinpyl.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-stone-900 shadow-2xl">
            <div className="flex gap-4 mb-8 p-1 bg-stone-100 rounded-2xl">
              <button 
                onClick={() => setType('room')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${type === 'room' ? 'bg-white shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
              >
                <Bed size={18} className="inline mr-2" /> Room
              </button>
              <button 
                onClick={() => setType('spa')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${type === 'spa' ? 'bg-white shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
              >
                <Sparkles size={18} className="inline mr-2" /> Spa
              </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900/10" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900/10" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Date</label>
                  <div className="relative">
                    <input type="date" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900/10" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">{type === 'room' ? 'Guests' : 'Duration'}</label>
                  <select className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900/10">
                    {type === 'room' ? (
                      <>
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3+ Guests</option>
                      </>
                    ) : (
                      <>
                        <option>60 Mins</option>
                        <option>90 Mins</option>
                        <option>Full Day</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Select {type === 'room' ? 'Room Type' : 'Service'}</label>
                <select className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900/10">
                  {type === 'room' ? ROOMS.map(r => <option key={r.id}>{r.name}</option>) : SPA_SERVICES.map(s => <option key={s.id}>{s.name}</option>)}
                </select>
              </div>

              <button className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-all mt-4">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-stone-50 pt-24 pb-12 border-t border-stone-200">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white">
              <Hotel size={18} />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">VINPYL</span>
          </div>
          <p className="text-stone-500 max-w-sm mb-6">
            Uyo's premier luxury destination. We pride ourselves on delivering an unmatched guest experience through attention to detail and authentic hospitality.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'Twitter', 'Facebook'].map(social => (
              <a key={social} href="#" className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-4 text-stone-500 text-sm">
            <li><a href="#" className="hover:text-stone-900 transition-colors">Home</a></li>
            <li><a href="#rooms" className="hover:text-stone-900 transition-colors">Rooms & Suites</a></li>
            <li><a href="#spa" className="hover:text-stone-900 transition-colors">Spa & Wellness</a></li>
            <li><a href="#about" className="hover:text-stone-900 transition-colors">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
          <ul className="space-y-4 text-stone-500 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>Plot 45, Luxury Way, Uyo LGA, Akwa Ibom State</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="flex-shrink-0" />
              <span>+234 800 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="flex-shrink-0" />
              <span>hello@vinpyl.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-stone-400 text-xs">© 2026 Vinpyl Hotels. All rights reserved.</p>
        <div className="flex gap-8 text-xs text-stone-400">
          <a href="#" className="hover:text-stone-900">Privacy Policy</a>
          <a href="#" className="hover:text-stone-900">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Features Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Bed />, title: "Luxury Rooms", desc: "Thoughtfully designed spaces with premium amenities for your comfort." },
              { icon: <Sparkles />, title: "Wellness Spa", desc: "Rejuvenate your mind and body with our signature treatments." },
              { icon: <Star />, title: "5-Star Service", desc: "Our dedicated staff is available 24/7 to cater to your every need." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Rooms Section */}
        <section id="rooms" className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              title="Our Signature Rooms" 
              subtitle="Accommodation" 
              centered 
            />
            <div className="grid md:grid-cols-3 gap-8">
              {ROOMS.map((room, i) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <RoomCard room={room} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Spa Section */}
        <section id="spa" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <SectionHeader 
                  title="A Sanctuary for Your Senses" 
                  subtitle="Spa & Wellness" 
                />
                <p className="text-stone-500 mb-8 leading-relaxed">
                  Escape the hustle and bustle of Uyo and step into a world of tranquility. Our spa offers a range of treatments designed to restore balance and harmony to your life.
                </p>
                <div className="space-y-4">
                  {SPA_SERVICES.map(service => (
                    <SpaCard key={service.id} service={service} />
                  ))}
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000" 
                  alt="Spa Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                  <div className="text-white">
                    <p className="text-sm font-bold uppercase tracking-widest mb-2">Signature Experience</p>
                    <h3 className="text-3xl font-serif">The Vinpyl Ritual</h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingForm />

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeader 
                title="The Vinpyl Story" 
                subtitle="About Us" 
                centered 
              />
              <p className="text-xl text-stone-600 font-serif italic mb-8">
                "We believe that true luxury is not just about the surroundings, but about how you feel when you're with us."
              </p>
              <p className="text-stone-500 leading-relaxed mb-12">
                Located in the vibrant city of Uyo, Vinpyl Hotels was founded with a single vision: to create a home away from home that exceeds every expectation. Our architecture blends modern elegance with local charm, creating a unique atmosphere that celebrates the spirit of Akwa Ibom.
              </p>
              <div className="grid grid-cols-3 gap-8 border-t border-stone-100 pt-12">
                <div>
                  <p className="text-3xl font-serif text-stone-900 mb-1">50+</p>
                  <p className="text-xs text-stone-400 uppercase font-bold tracking-widest">Luxury Rooms</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-stone-900 mb-1">12k</p>
                  <p className="text-xs text-stone-400 uppercase font-bold tracking-widest">Happy Guests</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-stone-900 mb-1">15</p>
                  <p className="text-xs text-stone-400 uppercase font-bold tracking-widest">Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
