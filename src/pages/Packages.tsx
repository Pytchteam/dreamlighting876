import { motion } from 'motion/react';
import { PACKAGES, getWhatsAppLink } from '../constants';
import Button from '../components/Button';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function PackagesPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-7xl font-display font-bold text-brand-black">EXPERIENCE PACKAGES</h1>
          <p className="text-brand-black/50 max-w-2xl mx-auto">
            Tailored production setups for every scale of event. Choose your foundation and let us build the energy.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="bg-brand-black py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "p-10 rounded-[3rem] flex flex-col gap-10 border text-left",
                  pkg.isPopular 
                    ? "bg-brand-green text-white border-brand-green shadow-green" 
                    : "bg-white border-brand-black/10 text-brand-black"
                )}
              >
                <div className="space-y-4">
                   {pkg.label && (
                     <span className={cn(
                       "text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block",
                       pkg.isPopular ? "bg-white/10" : "bg-brand-green/10 text-brand-green"
                     )}>
                       {pkg.label}
                     </span>
                   )}
                   <h3 className="text-3xl font-display font-bold">{pkg.name}</h3>
                   <p className={pkg.isPopular ? "text-white/60" : "text-brand-black/60"}>
                     {pkg.description}
                   </p>
                </div>

                <div className="h-px bg-current opacity-10" />

                <div className="space-y-6 flex-1 text-left">
                   <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Included Features</h4>
                   <ul className="space-y-4">
                     {pkg.features.map(feat => (
                       <li key={feat} className="flex items-start gap-3">
                         <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                         <span className="text-sm font-medium">{feat}</span>
                       </li>
                     ))}
                   </ul>
                </div>

                <Link to="/get-quote">
                   <Button 
                    variant={pkg.isPopular ? 'secondary' : 'neon'} 
                    size="lg"
                    className="w-full"
                   >
                     Book Experience <ArrowRight className="ml-2" size={16} />
                   </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Sell Section */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-black/[0.03] border border-brand-black/5 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 text-left">
             <div className="space-y-6 max-w-xl">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-black">NOT SEEING THE RIGHT FIT?</h2>
                <p className="text-brand-black/60 text-lg">
                   Our architects love creating custom experiences. Tell us your vision, and we'll build a custom package that matches your event and budget perfectly.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                   {['Island-wide Delivery', 'Professional On-site Techs', 'Custom Branding'].map(item => (
                     <div key={item} className="flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-wider">
                        <CheckCircle2 size={14} /> {item}
                     </div>
                   ))}
                </div>
             </div>
             <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
               <Link to="/build-your-event" className="flex-1">
                  <Button variant="secondary" size="lg" className="h-20 w-full px-12 text-xl font-bold">
                     Build Custom Gear <ArrowRight size={20} className="ml-3" />
                  </Button>
               </Link>
               <a 
                 href={getWhatsAppLink("Hi! I'm looking at your packages and I'd like to discuss a custom setup.")}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex-1"
               >
                 <Button variant="neon" size="lg" className="h-20 w-full px-12 text-xl font-bold">
                    <MessageCircle size={20} className="mr-3" /> Chat with Team
                 </Button>
               </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
