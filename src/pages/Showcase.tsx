import { motion } from 'motion/react';
import { Play, ZoomIn, Instagram } from 'lucide-react';
import Button from '../components/Button';

const PROJECT_GALLERY = [
  { id: 1, type: 'video', title: 'AC Hotel Kingston Gala', category: 'Corporate', image: 'https://picsum.photos/seed/show1/800/600' },
  { id: 2, type: 'image', title: 'Hope Gardens Wedding', category: 'Wedding', image: 'https://picsum.photos/seed/show2/800/1000' },
  { id: 3, type: 'video', title: 'Beach Festival Neon', category: 'Festival', image: 'https://picsum.photos/seed/show3/800/600' },
  { id: 4, type: 'image', title: 'Private Birthday Bash', category: 'Private', image: 'https://picsum.photos/seed/show4/800/600' },
  { id: 5, type: 'video', title: '360 Booth Highlights', category: 'Interaction', image: 'https://picsum.photos/seed/show5/800/1200' },
  { id: 6, type: 'image', title: 'LED Robot Activation', category: 'Entertainment', image: 'https://picsum.photos/seed/show6/800/600' },
];

export default function Showcase() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8 border-b border-brand-black/10 pb-12">
          <div className="space-y-4 max-w-xl text-left">
            <h1 className="text-4xl md:text-7xl font-display font-bold text-brand-black">THE PROOF</h1>
            <p className="text-brand-black/50">
              Real work. Real energy. See how we've transformed Jamaica's most iconic spaces into unforgettable experiences.
            </p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" size="sm">
                <Instagram size={18} className="mr-2" /> Follow @DreamLighting876
             </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-brand-black py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {PROJECT_GALLERY.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-white/5 border border-white/10"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform text-left">
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green mb-2">{project.category}</span>
                   <h3 className="text-xl font-display font-bold text-white mb-4">{project.title}</h3>
                   
                   <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.type === 'video' ? (
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                          <Play size={16} fill="currentColor" /> Watch Reel
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                          <ZoomIn size={16} /> View Gallery
                        </div>
                      )}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More/CTA Section */}
      <section className="bg-brand-green py-20 px-6 text-white text-center">
        <div className="max-w-7xl mx-auto space-y-8">
           <p className="text-white/80 italic">New content uploaded daily. Check our social feeds for real-time setup reels.</p>
           <Button variant="secondary" size="lg" className="bg-brand-black text-white hover:bg-brand-black/90">Load More Moments</Button>
        </div>
      </section>
    </div>
  );
}
