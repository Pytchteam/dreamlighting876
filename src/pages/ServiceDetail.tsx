import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Phone, Camera, Lightbulb, Zap, Sparkles } from 'lucide-react';
import { ALL_SERVICES, getWhatsAppLink, CONTACT_INFO } from '../constants';
import Button from '../components/Button';
import { ServiceDetail } from '../types';

const ICON_MAP = {
  camera: <Camera size={32} />,
  lightbulb: <Lightbulb size={32} />,
  zap: <Zap size={32} />,
  sparkles: <Sparkles size={32} />,
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = ALL_SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 px-6 text-center">
        <h1 className="text-4xl font-display font-bold text-brand-black">Service Not Found</h1>
        <p className="text-brand-black/50">The experience you are looking for doesn't exist or has moved.</p>
        <Link to="/services">
          <Button variant="outline">Back to All Services</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>{service.title} | Dream Lighting 876 Jamaica</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white"
          >
            {ICON_MAP[service.iconName]}
            <span className="text-sm font-bold uppercase tracking-widest">Experience Category</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter"
          >
            {service.title.toUpperCase()}
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="flex-[1.5] space-y-12 text-left">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-black">The Vision</h2>
              <div className="prose prose-lg text-brand-black/60 leading-relaxed max-w-none">
                <p className="text-xl font-medium text-brand-black italic mb-8">
                  "{service.salesCopy}"
                </p>
                <p>{service.longDescription || service.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-brand-black/[0.02] p-8 md:p-12 rounded-[3rem] border border-brand-black/5">
              <div className="col-span-full mb-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-black/30">What's Included</h3>
              </div>
              {service.features.map(feat => (
                <div key={feat} className="flex items-center gap-4 text-brand-black/70">
                  <div className="p-1 bg-brand-green/20 rounded-full text-brand-green shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-bold">{feat}</span>
                </div>
              ))}
            </div>

            {/* Gallery */}
            {service.gallery && (
              <div className="space-y-8">
                <h3 className="text-3xl font-display font-bold text-brand-black">In Action</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="aspect-square rounded-3xl overflow-hidden border border-brand-black/5"
                    >
                      <img src={img} alt={`${service.title} gallery ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA */}
          <div className="flex-1">
             <div className="sticky top-32 space-y-6">
                <div className="bg-brand-black text-white p-10 rounded-[3rem] space-y-8 shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                   <div className="space-y-4 relative z-10">
                      <h3 className="text-2xl font-display font-bold">Ready to Book?</h3>
                      <p className="text-white/50 text-sm">
                        Tell us your event date and venue, and our architects will design the perfect setup for you.
                      </p>
                   </div>
                   <div className="space-y-4 relative z-10">
                      <Link to="/build-your-event" className="block">
                         <Button variant="neon" size="lg" className="w-full h-16">
                            Start My Vision <ArrowRight className="ml-2" />
                         </Button>
                      </Link>
                      <a 
                        href={getWhatsAppLink(`Hi! I'm interested in booking the ${service.title}. Can I get a quote?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                         <Button variant="outline" size="lg" className="w-full h-16 border-white/20 text-white hover:bg-white/10">
                            <MessageCircle className="mr-2" /> WhatsApp Our Team
                         </Button>
                      </a>
                   </div>
                   <div className="pt-4 flex items-center justify-center gap-4 text-white/30 text-[10px] font-bold uppercase tracking-widest border-t border-white/5">
                      <Phone size={12} /> {CONTACT_INFO.phone}
                   </div>
                </div>

                <div className="bg-brand-gold p-8 rounded-[2.5rem] flex items-center gap-4 group cursor-pointer hover:bg-brand-gold/80 transition-colors">
                   <div className="w-12 h-12 bg-brand-black text-white rounded-2xl flex items-center justify-center shrink-0">
                      <Sparkles size={24} />
                   </div>
                   <div className="text-left">
                      <h4 className="font-bold text-brand-black leading-tight">Bundle & Save</h4>
                      <p className="text-xs text-brand-black/50">Combine services for premium event pricing.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 px-6 bg-brand-black/[0.02] border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 text-left">
             <div className="space-y-2">
                <h3 className="text-3xl font-display font-bold text-brand-black">Other Experiences</h3>
                <p className="text-brand-black/40">Explore more ways we bring the energy.</p>
             </div>
             <Link to="/services">
                <Button variant="outline" size="sm">View All Services</Button>
             </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ALL_SERVICES.filter(s => s.id !== service.id).slice(0, 3).map(s => (
              <Link key={s.id} to={`/services/${s.slug}`} className="group">
                <div className="bg-white rounded-3xl overflow-hidden border border-brand-black/5 hover:border-brand-green/30 transition-all shadow-sm">
                   <div className="aspect-video overflow-hidden">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                   </div>
                   <div className="p-6 flex items-center justify-between text-left">
                      <h4 className="font-bold text-brand-black tracking-tight">{s.title}</h4>
                      <ArrowRight size={18} className="text-brand-green group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
