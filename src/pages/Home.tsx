import { motion } from 'motion/react';
import { ArrowRight, Star, Play, CheckCircle2, Video, Shield, Zap, Sparkles, Map, ListChecks } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { PACKAGES, EXPERIENCES, VENUES, LOGO_URL, getWhatsAppLink } from '../constants';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 opacity-20"
        >
          <img 
            src="https://picsum.photos/seed/event-glow/1920/1080?blur=10" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center mb-4"
          >
            <div className="w-24 h-24 rounded-full bg-brand-black/5 p-2 border border-brand-black/10 flex items-center justify-center overflow-hidden">
              <img 
                src={LOGO_URL} 
                alt="Dream Lighting 876" 
                className="w-full h-full object-contain drop-shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-widest"
          >
            <Star size={14} fill="currentColor" /> Event Experience Architects
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter text-brand-black"
          >
            WE BRING THE <br />
            <span className="text-brand-green glow-text-green underline decoration-brand-gold decoration-8 underline-offset-8">ENERGY</span> TO LIFE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-brand-black/60 max-w-2xl mx-auto"
          >
            From stunning wedding visuals to high-energy corporate galas, we create lighting and entertainment experiences people never forget.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/get-quote">
              <Button size="lg" variant="neon" className="group">
                Book Your Event <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/build-your-event">
              <Button size="lg" variant="secondary">
                Build My Event
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience Pillars */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-black">The Experiences</h2>
            <p className="text-brand-black/50 max-w-xl mx-auto">We group our services into curated experiences designed to simplify your planning process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-black/[0.03] border border-brand-black/5 rounded-[2rem] overflow-hidden group"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                      src={exp.image} 
                      alt={exp.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-left">
                     <h3 className="text-2xl font-display font-bold mb-2 text-white">{exp.title}</h3>
                     <p className="text-white/70 text-sm">{exp.description}</p>
                  </div>
                </div>
                <div className="p-6 space-y-3 text-left">
                  {exp.services.map(service => (
                    <div key={service} className="flex items-center gap-2 text-xs font-medium text-brand-black/50">
                      <CheckCircle2 size={14} className="text-brand-green" /> {service}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Block: The Dream Difference */}
      <section className="py-32 bg-brand-black text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-green">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-display font-bold">Insured & Certified</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We operate with full public liability insurance and industry-standard safety protocols. Your peace of mind is our priority.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-gold">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-display font-bold">Premium Tech Only</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              From ADJ lighting to high-speed 360 enclosures, we only use tour-grade equipment that won't fail when the energy gets high.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-green">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-display font-bold">Experience Architects</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We aren't "rental guys." We are production partners who understand the flow of an event, from the first toast to the last dance.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Packages */}
      <section className="bg-white py-32 px-6 border-y border-brand-black/5">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
             <div className="space-y-4 max-w-xl text-left">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-black">Curated Packages</h2>
                <p className="text-brand-black/50">Pick your vibe, and we'll build the setup around it. No guesswork, just results.</p>
             </div>
             <Link to="/packages">
               <Button variant="outline" size="sm">View All Packages <ArrowRight size={16} className="ml-2" /></Button>
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={cn(
                  "p-8 rounded-[2.5rem] flex flex-col gap-8 transition-transform hover:-translate-y-2 border text-left",
                  pkg.isPopular ? "bg-brand-green text-white border-brand-green shadow-green" : "bg-white border-brand-black/10 text-brand-black"
                )}
              >
                <div className="space-y-2">
                   {pkg.label && (
                     <span className={cn(
                       "text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full",
                       pkg.isPopular ? "bg-white/10" : "bg-brand-green/10 text-brand-green"
                     )}>
                       {pkg.label}
                     </span>
                   )}
                   <h3 className="text-2xl font-display font-bold">{pkg.name}</h3>
                   <p className={pkg.isPopular ? "text-white/70 text-sm" : "text-brand-black/60 text-sm"}>
                     Ideal for: <span className="font-bold">{pkg.bestFor}</span>
                   </p>
                </div>

                <ul className="space-y-4 flex-1">
                  {pkg.features.map(feat => (
                    <li key={feat} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button 
                   variant={pkg.isPopular ? 'secondary' : 'neon'} 
                   className="w-full"
                >
                  Select Experience
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Block: The Journey */}
      <section className="bg-brand-green text-white py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-black/10 blur-[100px] -rotate-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">How it Works</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight">Simple, Guided, Professional.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { step: '01', title: 'Consult', desc: 'Tell us your date, venue, and vision via our simple booking wizard.' },
               { step: '02', title: 'Architect', desc: 'We design a light & energy plan tailored to your specific venue layout.' },
               { step: '03', title: 'Execute', desc: 'Our professional tech team handles full setup, strike, and on-site support.' },
               { step: '04', title: 'Relive', desc: 'Receive your 360 booth videos instantly and enjoy the buzz after the event.' }
             ].map((item, idx) => (
               <div key={idx} className="relative group p-8 bg-white/10 border border-white/10 rounded-3xl text-left backdrop-blur-sm">
                 <span className="text-5xl font-display font-black text-white/5 group-hover:text-white/20 transition-colors absolute top-4 right-6 uppercase">{item.step}</span>
                 <div className="space-y-4 relative z-10">
                   <h4 className="text-xl font-display font-bold">{item.title}</h4>
                   <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-black text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden group">
           <div className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-40">
              <img 
                src="https://picsum.photos/seed/event-crowd/1200/800" 
                className="w-full h-full object-cover" 
                alt="Showcase BG" 
                referrerPolicy="no-referrer"
              />
           </div>
           
           <div className="relative z-10 flex flex-col items-center text-center space-y-8">
              <div className="p-4 bg-neon-green rounded-full text-black animate-pulse shadow-neon">
                 <Video size={40} />
              </div>
              <h2 className="text-4xl md:text-7xl font-display font-bold">WATCH THE ENERGY</h2>
              <p className="text-lg md:text-2xl text-white/60 max-w-2xl">
                 Real work. Real reactions. See why we're the first choice for Jamaica's most iconic events.
              </p>
              <Button size="lg" variant="neon">
                 Launch Showcase <Play size={16} fill="currentColor" className="ml-2" />
              </Button>
           </div>
        </div>
        </div>
      </section>

      {/* Social Proof + Venues */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-20">
           <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-black/30 italic">Trusted at Jamaica's Finest</h3>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 filter grayscale opacity-40 contrast-125">
                 {VENUES.map(venue => (
                   <span key={venue} className="text-lg md:text-2xl font-display font-bold tracking-tighter hover:text-brand-black transition-colors cursor-default text-brand-black/50">
                      {venue.toUpperCase()}
                   </span>
                 ))}
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-10 bg-brand-black/[0.03] border border-brand-black/5 rounded-3xl space-y-6">
                 <div className="flex text-brand-green gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
                 <p className="text-xl italic text-brand-black/80">
                    "Dream Lighting transformed our wedding reception. The LED robots were the highlight—the energy on the dancefloor stayed high all night!"
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-black/10 overflow-hidden">
                       <img src="https://picsum.photos/seed/user1/100/100" alt="Avatar" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-black">Sarah & Andre</h5>
                      <p className="text-xs text-brand-black/40">Wedding at Hope Gardens</p>
                    </div>
                 </div>
              </div>
              
              <div className="p-10 bg-brand-black/[0.03] border border-brand-black/5 rounded-3xl space-y-6">
                 <div className="flex text-brand-green gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
                 <p className="text-xl italic text-brand-black/80">
                    "Professional team, top-tier equipment, and a clear vision. They really are event architects."
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-black/10 overflow-hidden">
                       <img src="https://picsum.photos/seed/user2/100/100" alt="Avatar" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-black">Mark Thompson</h5>
                      <p className="text-xs text-brand-black/40">Corporate Gala Planner</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Why Choose Us Block: Book With Us */}
      <section className="bg-brand-gold py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
          <div className="flex flex-col items-center gap-6 max-w-2xl">
            <div className="w-32 h-32 rounded-full border border-brand-black/5 flex items-center justify-center overflow-hidden grayscale brightness-0 opacity-20">
              <img 
                 src={LOGO_URL} 
                 alt="Dream Lighting Advantage" 
                 className="w-full h-full object-contain"
                 referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-black/40">The Advantage</h2>
              <h3 className="text-3xl md:text-6xl font-display font-bold text-brand-black">Book with Us</h3>
              <p className="text-brand-black/60 text-lg">
                There is a difference between a "rental" and a "production." Here is why the island's top planners choose Dream Lighting 876.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            {[
              { icon: <Shield />, title: 'Full Liability', desc: 'We are fully insured for all venues across Jamaica.' },
              { icon: <Zap />, title: 'Tour Grade', desc: 'Only professional equipment like ADJ, Chauvet, and Sony.' },
              { icon: <Sparkles />, title: 'Art Direction', desc: 'We design the lighting to match your specific floral & decor.' },
              { icon: <ListChecks />, title: 'Strike Teams', desc: 'Punctual setup and strike. We respect your venue\'s timeline.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/30 backdrop-blur-md p-8 rounded-[2rem] border border-brand-black/5 text-left space-y-4 hover:bg-white/50 transition-all">
                <div className="w-12 h-12 bg-brand-black text-white rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-brand-black">{item.title}</h4>
                <p className="text-sm text-brand-black/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-8">
             <Link to="/build-your-event">
               <Button variant="secondary" className="bg-brand-black text-white px-10">Start Your Architecture</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* SEO/Location Block: Jamaica-Wide Reach */}
      <section className="bg-brand-black py-32 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div className="space-y-8 text-left">
              <div className="space-y-4">
                <span className="flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-widest">
                  <Map size={14} /> Island-wide Events
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-[0.9]">WHERE ENERGY <br/>MEETS JAMAICA.</h2>
              </div>
              <p className="text-white/60 text-lg">
                From corporate galas in **Kingston** and weddings in **Montego Bay** to cliffside parties in **Negril** and villa escapes in **Ocho Rios**. Dream Lighting 876 travels wherever the vision takes us.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {['St. Andrew', 'St. James', 'St. Ann', 'Westmoreland', 'Portland', 'Manchester'].map(parish => (
                   <div key={parish} className="flex items-center gap-2 text-white/40 text-sm">
                      <div className="w-1 h-1 bg-brand-green rounded-full" /> {parish}
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative group">
              <div className="absolute inset-0 bg-brand-green/10 rounded-[3rem] rotate-3 scale-105" />
              <img 
                src="https://picsum.photos/seed/jamaica-event/800/800" 
                className="relative z-10 w-full rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" 
                alt="Jamaica Map Location"
                referrerPolicy="no-referrer"
              />
           </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-brand-green text-white px-6 py-20 overflow-hidden relative">
         <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-display font-bold opacity-5 select-none whitespace-nowrap pointer-events-none">
            JAMAICA ISLAND-WIDE COVERAGE
         </div>
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="space-y-4 max-w-xl">
               <h2 className="text-4xl font-display font-bold">Ready to Bring the Energy?</h2>
               <p className="text-white/80">
                 We travel island-wide. Tell us your event date and we'll guide you from there. Quick response. Clear quote. No guesswork.
               </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
               <Link to="/build-your-event">
                  <Button className="bg-brand-black text-white px-12 h-20 text-xl font-bold rounded-full group">
                     Build Your Event <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </Button>
               </Link>
               <a 
                 href={getWhatsAppLink("Hi Dream Lighting! I just saw your home page and I'd like to chat about an event.")}
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <Button variant="outline" className="border-white text-white hover:bg-white/10 px-12 h-20 text-xl font-bold rounded-full">
                    Say Hi on WhatsApp
                 </Button>
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
