import { motion } from 'motion/react';
import { LOGO_URL } from '../constants';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-display ${className}`}>
      <motion.div 
        className="relative h-14 w-14 overflow-hidden rounded-full flex items-center justify-center translate-y-[-2px] bg-white shadow-xl shadow-brand-black/5 border border-brand-black/10 z-10"
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src={LOGO_URL} 
          alt="Dream Lighting 876 Logo" 
          className="h-[85%] w-[85%] object-contain"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="flex flex-col leading-none ml-1">
        <span className="text-xl font-bold tracking-tighter text-brand-black">
          DREAM<span className="text-brand-green">LIGHTING</span>
        </span>
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-brand-black/50 font-sans font-bold">
          876 Experience
        </span>
      </div>
    </div>
  );
}
