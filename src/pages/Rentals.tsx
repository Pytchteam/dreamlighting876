import { motion, AnimatePresence } from 'motion/react';
import { RENTAL_EQUIPMENT, getWhatsAppLink } from '../constants';
import Button from '../components/Button';
import { CheckCircle2, MessageCircle, Calendar, ArrowRight, X, Info } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function RentalsPage() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedRental, setSelectedRental] = useState<typeof RENTAL_EQUIPMENT[0] | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const categories = ['All', ...new Set(RENTAL_EQUIPMENT.map(item => item.category))];
  const filteredItems = filter === 'All' 
    ? RENTAL_EQUIPMENT 
    : RENTAL_EQUIPMENT.filter(item => item.category === filter);

  const openBooking = (item: typeof RENTAL_EQUIPMENT[0]) => {
    setSelectedRental(item);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-green font-bold text-xs uppercase tracking-[0.4em]"
          >
            Inventory Management
          </motion.span>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-brand-black">RENTAL SOLUTIONS</h1>
          <p className="text-brand-black/50 max-w-2xl mx-auto">
            Professional-grade equipment available for your next event. Dry hire or full production support.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white pb-12 px-6 sticky top-20 z-20 backdrop-blur-sm bg-white/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                filter === cat 
                  ? "bg-brand-black text-white border-brand-black" 
                  : "bg-transparent text-brand-black/40 border-brand-black/10 hover:border-brand-black/30"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Rental Grid */}
      <section className="bg-brand-black/5 py-24 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-brand-black/5 shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-black/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 space-y-6 flex-1 flex flex-col">
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-brand-black">{item.name}</h3>
                  <p className="text-sm text-brand-black/60 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-brand-black/5 flex-1">
                  {item.features?.slice(0, 3).map(feat => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-medium text-brand-black/40">
                      <CheckCircle2 size={14} className="text-brand-green" /> {feat}
                    </div>
                  ))}
                </div>

                <div className="pt-6 grid grid-cols-2 gap-3">
                  <a 
                    href={getWhatsAppLink(`Hi! I'm interested in renting the ${item.name}. Is it available?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="w-full text-xs font-bold gap-2">
                      <MessageCircle size={14} /> WhatsApp
                    </Button>
                  </a>
                  <Button 
                    variant="neon" 
                    size="sm" 
                    className="w-full text-xs font-bold gap-2"
                    onClick={() => openBooking(item)}
                  >
                    <Calendar size={14} /> Request
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cross-sell */}
      <section className="bg-brand-black py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight underline decoration-brand-green decoration-4 underline-offset-8">
             FULL PRODUCTION SUPPORT
           </h2>
           <p className="text-white/60 text-lg">
             Don't want to worry about the tech? We provide full-service production. We set it up, run the show, and strike when the party's over.
           </p>
           <div className="pt-4">
              <Link to="/build-your-event">
                <Button variant="secondary" size="lg" className="h-20 px-12 text-xl font-bold">Build Your Vision <ArrowRight className="ml-2" /></Button>
              </Link>
           </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && selectedRental && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-black/5 transition-colors z-10"
              >
                <X size={24} className="text-brand-black" />
              </button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-brand-black rounded-2xl overflow-hidden shrink-0">
                    <img src={selectedRental.image} className="w-full h-full object-cover" alt={selectedRental.name} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">{selectedRental.category}</span>
                    <h3 className="text-2xl font-display font-bold text-brand-black leading-tight">
                      Rental Request: {selectedRental.name}
                    </h3>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsBookingModalOpen(false); alert('Rental request received! We will contact you shortly.'); }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold text-brand-black/40 uppercase px-1">Your Name</label>
                      <input required type="text" className="w-full bg-brand-black/5 border border-brand-black/10 rounded-xl px-4 py-3" placeholder="Full Name" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold text-brand-black/40 uppercase px-1">Email Address</label>
                      <input required type="email" className="w-full bg-brand-black/5 border border-brand-black/10 rounded-xl px-4 py-3" placeholder="email@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold text-brand-black/40 uppercase px-1">Rental Date</label>
                      <input required type="date" className="w-full bg-brand-black/5 border border-brand-black/10 rounded-xl px-4 py-3" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold text-brand-black/40 uppercase px-1">Duration (Days)</label>
                      <input required type="number" min="1" className="w-full bg-brand-black/5 border border-brand-black/10 rounded-xl px-4 py-3" placeholder="1" />
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-brand-black/40 uppercase px-1">Notes / Special Instructions</label>
                    <textarea rows={3} className="w-full bg-brand-black/5 border border-brand-black/10 rounded-xl px-4 py-3 resize-none" placeholder="Delivery needs, setup requirements, etc." />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" variant="neon" size="lg" className="w-full h-16 text-lg">
                      Submit Rental Request
                    </Button>
                  </div>
                  
                  <div className="text-center pt-2">
                    <p className="text-[10px] text-brand-black/30 font-medium">
                      Submitting this form does not guarantee availability. <br/>A Dream Lighting architect will contact you for confirmation.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

