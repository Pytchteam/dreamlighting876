import { motion } from 'motion/react';
import { Shield, Target, Users, Zap, Award, Sparkles, MapPin, Heart, MessageCircle, Play, Quote } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { LOGO_URL, getWhatsAppLink } from '../constants';

const TESTIMONIALS = [
  {
    name: 'Sarah Jennings',
    event: 'Wedding at Hope Gardens',
    quote: 'The transformation of the space was breathtaking. The lighting architect truly listened to my vision and made the venue look magical.',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    videoThumb: 'https://picsum.photos/seed/wedding-v/600/400'
  },
  {
    name: 'Marcus Chen',
    event: 'Corporate Gala / Cari-Med',
    quote: 'We’ve worked with many production teams, but Dream Lighting 876 brings a level of professionalism and technical skill that is unmatched on the island.',
    avatar: 'https://picsum.photos/seed/marcus/100/100',
    videoThumb: 'https://picsum.photos/seed/gala-v/600/400'
  },
  {
    name: 'Nicole Thompson',
    event: '30th Birthday Celebration',
    quote: 'The 360 booth and LED robots were the highlight of the night. Everyone is still talking about the energy on the dancefloor!',
    avatar: 'https://picsum.photos/seed/nicole/100/100',
    videoThumb: 'https://picsum.photos/seed/party-v/600/400'
  }
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Block 1: Hero / Introduction (White) */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-8 text-left">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-black/5 p-1 border border-brand-black/10 flex items-center justify-center overflow-hidden">
                <img 
                  src={LOGO_URL} 
                  alt="Dream Lighting Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-[10px] font-bold uppercase tracking-widest"
              >
                <Heart size={12} fill="currentColor" /> THE HEART OF THE ENERGY
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] text-brand-black tracking-tighter">
              WE ARE <br/>
              <span className="text-brand-green">DREAM LIGHTING.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-black/60 max-w-xl">
              Since 2015, we've been rewriting the rules of event production in Jamaica. We don't just provide equipment; we engineer atmosphere.
            </p>
            <div className="flex gap-4">
               <div className="text-center">
                  <div className="text-4xl font-display font-bold text-brand-black">850+</div>
                  <div className="text-[10px] font-bold uppercase text-brand-black/30 tracking-widest">Events Executed</div>
               </div>
               <div className="w-px h-12 bg-brand-black/10" />
               <div className="text-center">
                  <div className="text-4xl font-display font-bold text-brand-black">100%</div>
                  <div className="text-[10px] font-bold uppercase text-brand-black/30 tracking-widest">Client Satisfaction</div>
               </div>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-brand-green/20 rounded-[3rem] rotate-3 scale-105 blur-2xl group-hover:bg-brand-green/30 transition-all" />
            <img 
              src="https://picsum.photos/seed/about-hero/800/800" 
              className="relative z-10 w-full rounded-[3rem] shadow-2xl" 
              alt="Dream Lighting Team in action" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Block 2: Our Roots / History (Brand Black) */}
      <section className="py-32 px-6 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-brand-green/5 blur-[150px] -rotate-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
               <div className="grid grid-cols-2 gap-4">
                  <img src="https://picsum.photos/seed/history1/400/600" className="rounded-3xl hover:scale-105 transition-transform duration-500" alt="Early Days" referrerPolicy="no-referrer" />
                  <div className="space-y-4 pt-12">
                     <img src="https://picsum.photos/seed/history2/400/400" className="rounded-3xl hover:scale-105 transition-transform duration-500" alt="Energy Growth" referrerPolicy="no-referrer" />
                     <div className="bg-brand-green p-6 rounded-3xl text-brand-black">
                        <Award size={32} className="mb-4" />
                        <h4 className="font-display font-bold">Leading the Industry</h4>
                        <p className="text-xs font-medium opacity-70 italic">Jamaica's Choice since 2015</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="order-1 md:order-2 space-y-8 text-left">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/40 italic">Our Roots</h2>
              <h3 className="text-4xl md:text-7xl font-display font-bold leading-none">WHERE THE <br/>ENERGY BEGAN.</h3>
              <div className="space-y-6 text-white/60 leading-relaxed text-lg">
                <p>
                  What started with a single set of lights and a passion for nightlife has grown into Jamaica's premier event production firm. Our journey began in the vibrant streets of Kingston, fueled by the conviction that every event—regardless of scale—deserves world-class production.
                </p>
                <p>
                  Today, Dream Lighting 876 is synonymous with innovation. We were the first to bring the high-speed 360 enclosures to the island and continue to invest in the latest tour-grade lighting technology.
                </p>
              </div>
              <div className="flex items-center gap-4 text-brand-green">
                 <MapPin size={24} />
                 <span className="font-display font-bold text-xl">Headquartered in Kingston. Serving the whole Island.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: The Team / Approach (Brand Green) */}
      <section className="py-32 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-black/40">The Architects</h2>
            <h3 className="text-4xl md:text-7xl font-display font-bold text-white">MEET THE MINDSET.</h3>
            <p className="text-brand-black/60 text-lg">
              We aren't just technical operators. We are experience designers, electrical engineers, and visual artists who live for the wow-moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: 'Event Architect', title: 'Creative Vision', desc: 'Translating your moodboard into a technical reality.' },
              { role: 'Technical Lead', title: 'Precision Execution', desc: 'Ensuring 100% uptime and perfect synchronization.' },
              { role: 'Energy Captain', title: 'On-Site Vibe', desc: 'Managing the live experience from first toast to final beat.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/20 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 text-left group hover:bg-white/40 transition-all">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-brand-black text-white rounded-2xl">
                    <Users size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40">{item.role}</span>
                </div>
                <h4 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h4>
                <p className="text-brand-black/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-black rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-left">
             <div className="flex-1 space-y-4">
                <h4 className="text-3xl font-display font-bold text-white">Ready to join the crew?</h4>
                <p className="text-white/50">We're always looking for high-energy technical talent. If you have a passion for production, we want to hear from you.</p>
             </div>
             <Button variant="neon" size="lg">Apply to Join</Button>
          </div>
        </div>
      </section>

      {/* Block 3.5: Client Testimonials (White) */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 text-left">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-black/30">Client Feedback</h2>
              <h3 className="text-4xl md:text-7xl font-display font-bold text-brand-black leading-none">REAL STORIES. <br/><span className="text-brand-green">REAL ENERGY.</span></h3>
            </div>
            <p className="text-brand-black/50 max-w-sm mb-2">
              Don't just take our word for it. Hear directly from the planners and couples who have experienced the Dream Lighting production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-6 group"
              >
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-brand-black/5 shadow-xl">
                  <img src={t.videoThumb} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={t.event} referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center shadow-neon animate-pulse group-hover:scale-110 transition-transform">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-6 py-1 px-3 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">
                    Client Experience Video
                  </div>
                </div>

                <div className="bg-brand-black/[0.02] p-8 rounded-[2.5rem] border border-brand-black/5 text-left space-y-6 flex-1">
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 text-brand-green opacity-20" size={48} />
                    <p className="text-brand-black/70 leading-relaxed italic relative z-10">"{t.quote}"</p>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-brand-black/5">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-green/20">
                      <img src={t.avatar} alt={t.name} referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-brand-black">{t.name}</h5>
                      <p className="text-xs text-brand-black/40 uppercase tracking-widest font-medium">{t.event}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 4: Our Commitment / Vision (Brand Gold) */}
      <section className="py-32 px-6 bg-brand-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16 relative z-10">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-black/40">Our Commitment</h2>
            <h3 className="text-4xl md:text-7xl font-display font-bold text-brand-black leading-none">THE PROMISE <br/>OF ENERGY.</h3>
            <p className="text-brand-black/70 text-lg">
              Every event we touch is bound by these core principles. It's how we ensure the Dream Lighting standard, every single time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { icon: <Shield />, title: 'Safety First', text: 'All rigs are triple-checked and fully insured for public liability.' },
              { icon: <Zap />, title: 'Innovation', text: 'If there is a newer, better way to light a stage, we own the tech already.' },
              { icon: <Target />, title: 'Precision', text: 'We work to the minute. On time, on point, and within your venue parameters.' },
              { icon: <Sparkles />, title: 'Immersive', text: 'We don\'t just light a room; we create a 360-degree sensory experience.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-brand-black/5 text-left space-y-4 shadow-xl hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center text-brand-black">
                  {item.icon}
                </div>
                <h4 className="font-display font-bold text-brand-black text-xl">{item.title}</h4>
                <p className="text-sm text-brand-black/50 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-5xl bg-white/10 border border-white/20 p-1 rounded-[3rem] mt-12"
          >
             <div className="bg-brand-black rounded-[3rem] p-12 md:p-24 space-y-8">
                <h3 className="text-4xl md:text-6xl font-display font-bold text-white uppercase italic">Built for the <br/>Island Life.</h3>
                <p className="text-white/60 max-w-xl mx-auto">
                  Jamaica event culture is unique. It's high-energy, high-emotion, and high-expectation. We’ve built our entire business model to meet that specific rhythm.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/build-your-event" className="w-full sm:w-auto">
                     <Button variant="secondary" size="lg" className="w-full px-12">Let's Create Your Vision</Button>
                  </Link>
                  <a 
                    href={getWhatsAppLink("Hi! I just read your About Us page and I'd like to discuss an event.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant="neon" size="lg" className="w-full px-12">
                      <MessageCircle className="mr-2" /> WhatsApp Architect
                    </Button>
                  </a>
                </div>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
