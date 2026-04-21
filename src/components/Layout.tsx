import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ArrowRight, Instagram, ChevronDown, Camera, Lightbulb, Zap, Sparkles } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import LoadingScreen from './LoadingScreen';
import PageTransition from './PageTransition';
import { cn } from '../lib/utils';
import { getWhatsAppLink, CONTACT_INFO, ALL_SERVICES } from '../constants';

export default function Layout({ children }: { children: ReactNode }) {
  const [isEntryLoading, setIsEntryLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [showEntryPopup, setShowEntryPopup] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Hide initial entry loader after a slight delay
    const entryTimer = setTimeout(() => {
      setIsEntryLoading(false);
    }, 2000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitPopupSeen')) {
        setShowExitPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseOut);
    
    // Show entry popup after 3 seconds if not seen
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('entryPopupSeen') && !isEntryLoading) {
        setShowEntryPopup(true);
      }
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseOut);
      clearTimeout(timer);
      clearTimeout(entryTimer);
    };
  }, [isEntryLoading]);

  const closeEntryPopup = () => {
    setShowEntryPopup(false);
    sessionStorage.setItem('entryPopupSeen', 'true');
  };

  const closeExitPopup = () => {
    setShowExitPopup(false);
    sessionStorage.setItem('exitPopupSeen', 'true');
  };

  const navLinks = [
    { name: 'Services', path: '/services', dropdown: true },
    { name: 'Packages', path: '/packages' },
    { name: 'Rentals', path: '/rentals' },
    { name: 'Showcase', path: '/showcase' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <AnimatePresence>
        {isEntryLoading && <LoadingScreen key="initial-loader" />}
      </AnimatePresence>
      {/* Background Orbs - more subtle on white */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-green/5 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] left-[-10%] w-[40%] h-[40%] bg-brand-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[20%] w-[50%] h-[50%] bg-brand-green/5 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-brand-black/10 shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              link.dropdown ? (
                <div 
                  key={link.name}
                  className="relative group p-2"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <button className={cn(
                    "flex items-center gap-1 text-sm font-medium tracking-wide transition-colors outline-none",
                    location.pathname.startsWith('/services') ? "text-brand-green" : "text-brand-black/70 hover:text-brand-black"
                  )}>
                    {link.name} <ChevronDown size={14} className={cn("transition-transform", isServicesDropdownOpen && "rotate-180")} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4"
                      >
                        <div className="bg-white border border-brand-black/10 rounded-2xl shadow-2xl overflow-hidden p-2">
                           {ALL_SERVICES.map(service => (
                             <Link 
                               key={service.slug} 
                               to={`/services/${service.slug}`}
                               onClick={() => setIsServicesDropdownOpen(false)}
                               className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-black/[0.03] transition-colors group/item"
                             >
                                <div className="text-brand-black/30 group-hover/item:text-brand-green transition-colors">
                                   {service.iconName === 'camera' && <Camera size={18} />}
                                   {service.iconName === 'lightbulb' && <Lightbulb size={18} />}
                                   {service.iconName === 'zap' && <Zap size={18} />}
                                   {service.iconName === 'sparkles' && <Sparkles size={18} />}
                                </div>
                                <span className="text-sm font-bold text-brand-black text-left">{service.title}</span>
                             </Link>
                           ))}
                           <div className="h-px bg-brand-black/5 my-2" />
                           <Link 
                            to="/services" 
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className="block p-3 text-xs font-bold text-brand-green hover:bg-brand-green/5 transition-colors text-center uppercase tracking-widest"
                           >
                            View All Services
                           </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors",
                    location.pathname === link.path ? "text-brand-green" : "text-brand-black/70 hover:text-brand-black"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/get-quote">
              <Button size="sm" variant="neon">Get a Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 p-10"
          >
            {navLinks.map(link => (
              <div key={link.path} className="w-full text-center">
                {link.dropdown ? (
                  <div className="space-y-4">
                    <Link 
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl font-display font-bold text-brand-black"
                    >
                      {link.name}
                    </Link>
                    <div className="flex flex-col gap-2">
                       {ALL_SERVICES.map(service => (
                         <Link 
                           key={service.slug}
                           to={`/services/${service.slug}`}
                           onClick={() => setIsMenuOpen(false)}
                           className="text-sm font-bold text-brand-black/40 hover:text-brand-green uppercase tracking-widest"
                         >
                           {service.title}
                         </Link>
                       ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-display font-bold text-brand-black"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/get-quote" onClick={() => setIsMenuOpen(false)} className="w-full">
              <Button size="lg" variant="neon" className="w-full">Get a Quote</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-32">
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-brand-black/10 bg-brand-black/[0.02] backdrop-blur-sm pt-20 pb-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-6" />
            <p className="text-brand-black/50 max-w-sm mb-8">
              Jamaica's premier event experience architects. We combine lighting, entertainment, and production to turn moments into memories.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-brand-black/5 rounded-full hover:bg-brand-green/20 transition-colors text-brand-black">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-brand-black/5 rounded-full hover:bg-brand-green/20 transition-colors text-brand-black">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 text-brand-black">Quick Links</h4>
            <ul className="space-y-4 text-brand-black/50 text-sm">
              <li><Link to="/about" className="hover:text-brand-green transition-colors">About Us</Link></li>
              <li><Link to="/weddings" className="hover:text-brand-green transition-colors">Weddings</Link></li>
              <li><Link to="/corporate" className="hover:text-brand-green transition-colors">Corporate Events</Link></li>
              <li><Link to="/build-your-event" className="hover:text-brand-green transition-colors">Build My Event</Link></li>
              <li><Link to="/showcase" className="hover:text-brand-green transition-colors">Showcase</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 text-brand-black">Legal</h4>
            <ul className="space-y-4 text-brand-black/50 text-sm">
              <li><Link to="/terms" className="hover:text-brand-green transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-green transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-brand-green transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-black/5 text-center text-brand-black/30 text-xs">
          © {new Date().getFullYear()} Dream Lighting 876. All Rights Reserved.
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-6 pb-6 pointer-events-none">
        <div className="flex gap-2 pointer-events-auto">
          <a 
            href={getWhatsAppLink("Hi! I'm interested in an event production.")} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full" variant="neon" size="lg">
              <MessageCircle className="mr-2" size={20} /> WhatsApp
            </Button>
          </a>
          <a href={`tel:${CONTACT_INFO.phone}`}>
            <Button variant="secondary" size="lg" className="px-4">
              <Phone size={20} />
            </Button>
          </a>
        </div>
      </div>

      {/* Desktop Sticky Sidebar CTA (Subtle) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
         <motion.a 
           href={getWhatsAppLink()} 
           target="_blank"
           rel="noopener noreferrer"
           whileHover={{ scale: 1.1, x: -5 }}
           className="bg-brand-green p-3 rounded-full text-white shadow-green cursor-pointer"
           title="Chat on WhatsApp"
         >
           <MessageCircle size={24} />
         </motion.a>
         <motion.a 
           href={`tel:${CONTACT_INFO.phone}`} 
           whileHover={{ scale: 1.1, x: -5 }}
           className="bg-brand-black p-3 rounded-full text-white shadow-lg cursor-pointer"
           title="Call Us"
         >
           <Phone size={24} />
         </motion.a>
      </div>

      {/* Entry Popup */}
      <AnimatePresence>
        {showEntryPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={closeEntryPopup}
               className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white border border-brand-black/10 shadow-2xl rounded-3xl p-8 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-green" />
              <button 
                onClick={closeEntryPopup}
                className="absolute top-4 right-4 text-brand-black/50 hover:text-brand-black"
              >
                <X size={20} />
              </button>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold mb-2 text-brand-black">What are you planning?</h3>
                <p className="text-brand-black/60 text-sm">Tell us your event type to start your experience.</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Wedding', 'Party', 'Corporate', 'Festival'].map((type) => (
                  <Link 
                    key={type}
                    to="/build-your-event"
                    onClick={closeEntryPopup}
                    className="p-4 border border-brand-black/10 rounded-xl bg-brand-black/5 hover:bg-brand-green/20 hover:border-brand-green transition-all text-sm font-medium text-center text-brand-black"
                  >
                    {type}
                  </Link>
                ))}
              </div>

              <div className="space-y-4">
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-brand-black/5 border border-brand-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-green transition-colors text-brand-black"
                />
                <Button className="w-full" variant="neon" onClick={closeEntryPopup}>
                  Guide Me <ArrowRight size={16} className="ml-2" />
                </Button>
                <div className="text-center">
                  <span className="text-[10px] text-brand-black/30 uppercase font-bold tracking-widest">— OR —</span>
                </div>
                <a 
                  href={getWhatsAppLink("Hi! I'm planning an event and would like some guidance.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full border-brand-green text-brand-green font-bold" variant="outline" size="md">
                    <MessageCircle size={16} className="mr-2" /> WhatsApp Our Team
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Exit Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={closeExitPopup}
               className="absolute inset-0 bg-brand-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              className="relative w-full max-w-md bg-white border border-brand-gold/30 shadow-2xl rounded-3xl p-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold shadow-gold" />
              <button 
                onClick={closeExitPopup}
                className="absolute top-4 right-4 text-brand-black/50 hover:text-brand-black"
              >
                <X size={20} />
              </button>
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-display font-bold mb-4 text-brand-black">Wait! Still planning your event?</h3>
                <p className="text-brand-black/60 text-sm mb-8 italic">
                  Don't leave without your free consultation. We'll help you pick the perfect package for your vision.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href={getWhatsAppLink("Hi! I need help picking a package for my event.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full h-16 text-lg" variant="neon">
                      <MessageCircle className="mr-2" size={20} /> Chat with a Planner
                    </Button>
                  </a>
                  <Link to="/contact" onClick={closeExitPopup}>
                    <Button className="w-full" variant="outline">
                      Contact via Email
                    </Button>
                  </Link>
                  <Button className="w-full bg-transparent text-brand-black/40 hover:text-brand-black" variant="ghost" onClick={closeExitPopup}>
                    I'll explore more first
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
