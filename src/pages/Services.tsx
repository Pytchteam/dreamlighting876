import { motion } from 'motion/react';
import { Camera, Lightbulb, Zap, Sparkles, Cpu, ArrowRight, CheckCircle2, Info, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ServiceModal from '../components/ServiceModal';
import { getWhatsAppLink, ALL_SERVICES } from '../constants';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof ALL_SERVICES[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: typeof ALL_SERVICES[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dream Lighting 876",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kingston",
        "addressRegion": "St. Andrew",
        "addressCountry": "JM"
      },
      "url": "https://dreamlighting876.com"
    },
    "serviceType": "Event Production & Entertainment",
    "areaServed": "Jamaica",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Event Services",
      "itemListElement": ALL_SERVICES.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'camera': return <Camera size={32} />;
      case 'lightbulb': return <Lightbulb size={32} />;
      case 'zap': return <Zap size={32} />;
      case 'sparkles': return <Sparkles size={32} />;
      default: return <Zap size={32} />;
    }
  };

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Professional Event Services | Dream Lighting 876 Jamaica</title>
        <meta name="description" content="Explore our high-end event production services: 360 photo booths, professional atmospheric lighting, LED robots, and cinematic special effects island-wide in Jamaica." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
      {/* Hero */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-green font-bold text-xs uppercase tracking-[0.4em]"
          >
            Event Experience Architects
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-bold text-brand-black leading-tight"
          >
            ATMOSPHERE, <br/>ENGINEERED.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-black/50 text-lg md:text-xl"
          >
            We don't just rent equipment. We design the energy flow of your entire event using technology and professional performance.
          </motion.p>
        </div>
      </section>

      {/* Booking Funnel Head */}
      <section className="bg-brand-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-green text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-black/10 blur-[100px] pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="space-y-4 max-w-xl text-left">
                <h2 className="text-3xl md:text-5xl font-display font-bold">READY TO START?</h2>
                <p className="text-white/80 text-lg">
                  Every iconic event starts with a single vision. Tell us yours and we'll handle the technical architecture.
                </p>
              </div>
              <Link to="/build-your-event">
                <Button variant="secondary" size="lg" className="h-20 px-12 text-xl font-bold bg-brand-black text-white">
                  Build My Vision <ArrowRight className="ml-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep Dive */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {ALL_SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-brand-black/[0.02] border border-brand-black/5 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-brand-black/5 transition-all duration-500 text-left overflow-hidden relative"
            >
              <div className="flex flex-col h-full gap-8 relative z-10">
                <div className="flex items-start justify-between">
                   <div className="w-16 h-16 bg-brand-black text-white rounded-2xl flex items-center justify-center group-hover:bg-brand-green transition-colors">
                     {getIcon(service.iconName)}
                   </div>
                   <div className="hidden sm:block">
                      <Link to={`/services/${service.slug}`}>
                         <Button variant="outline" size="sm">Explore Details</Button>
                      </Link>
                   </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-brand-black">{service.title}</h3>
                  <p className="text-brand-black/60 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="aspect-video rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                   <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-black/5">
                  {service.features.map(feat => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-bold text-brand-black/40">
                      <CheckCircle2 size={14} className="text-brand-green" /> {feat}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-6 space-y-3">
                  <div className="bg-brand-green/5 p-4 rounded-2xl border border-brand-green/10">
                    <p className="text-xs italic text-brand-black/70 leading-relaxed">
                      "{service.salesCopy}"
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="neon" 
                      size="sm" 
                      className="flex-1 h-12"
                      onClick={() => openServiceModal(service)}
                    >
                      Quick Inquire <ArrowRight className="ml-2" size={16} />
                    </Button>
                    <Link to={`/services/${service.slug}`} className="flex-1">
                       <Button variant="outline" size="sm" className="w-full h-12">Detail View</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rental CTA */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="bg-brand-black text-white rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-4 text-left">
              <h3 className="text-3xl font-display font-bold uppercase italic">Need Individual Gear?</h3>
              <p className="text-white/60">
                Beyond full experience production, we offer high-end lighting and entertainment assets for dry hire. Moving heads, cold sparks, and more.
              </p>
            </div>
            <Link to="/rentals">
              <Button variant="neon" size="lg" className="px-10 h-16 text-lg">
                View Rental Inventory <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sales Pitch: Why Choose Us */}
      <section className="bg-brand-gold py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-black leading-tight">THE PRODUCTION PARTNER <br/>YOU'VE BEEN LOOKING FOR.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: 'Reliability', desc: 'Backup systems for everything. We don\'t do "technical difficulties."' },
              { id: 2, title: 'Energy', desc: 'Our team are crowd experts. We know how to shift the mood when it counts.' },
              { id: 3, title: 'Value', desc: 'Premium production quality that transforms standard venues into luxury spaces.' }
            ].map(item => (
              <div key={item.id} className="space-y-2">
                <h4 className="font-bold text-brand-black">{item.title}</h4>
                <p className="text-sm text-brand-black/70">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/build-your-event" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full h-16 px-10">Start My Project</Button>
            </Link>
            <a 
              href={getWhatsAppLink("Hi! I'm on the services page and I'd like to discuss a custom production.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="neon" size="lg" className="w-full h-16 px-10">
                WhatsApp Architect
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
