import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import { getWhatsAppLink } from '../constants';
import { ReactNode } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    icon: ReactNode;
    salesCopy?: string;
  } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null;

  const whatsappMessage = `Hi Dream Lighting! I'm interested in the ${service.title} service. ${service.salesCopy ? "I'd like to get started based on your vision." : "Could you provide more information?"}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-black/5 transition-colors z-10"
            >
              <X size={24} className="text-brand-black" />
            </button>

            <div className="p-8 md:p-12 space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-brand-black text-white rounded-2xl flex items-center justify-center overflow-hidden">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-black leading-tight">
                  {service.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-brand-black/60 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  {service.salesCopy && (
                    <div className="bg-brand-green/5 p-6 rounded-3xl border border-brand-green/10 italic text-brand-black opacity-80">
                      "{service.salesCopy}"
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {service.features.map(feat => (
                    <div key={feat} className="flex items-center gap-3 text-sm font-bold text-brand-black/40">
                      <CheckCircle2 size={18} className="text-brand-green" /> {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <a 
                  href={getWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="neon" size="lg" className="w-full h-16 text-lg">
                    <MessageCircle className="mr-3" /> Chat on WhatsApp
                  </Button>
                </a>
                <p className="text-center text-xs text-brand-black/30 font-medium">
                  Average response time: Under 15 minutes
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
