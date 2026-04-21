import { motion } from 'motion/react';
import Logo from './Logo';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1,
          ease: "easeOut"
        }}
        className="flex flex-col items-center gap-6"
      >
        <Logo className="scale-[2]" />
      </motion.div>
      
      <div className="absolute bottom-20 flex flex-col items-center gap-4">
        <div className="w-48 h-1 bg-brand-black/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-brand-green"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black/40">
          Architecting Experience...
        </span>
      </div>
    </motion.div>
  );
}
