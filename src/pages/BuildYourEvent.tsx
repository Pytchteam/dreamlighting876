import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, Calendar, MapPin, Users, Clock } from 'lucide-react';
import Button from '../components/Button';
import { EventType } from '../types';
import { cn } from '../lib/utils';

const STEPS = [
  { id: 'type', title: 'Start with the Vibe', description: 'What type of event are we architecting?' },
  { id: 'elements', title: 'Choose Your Energy', description: 'Pick the elements that fit your vision.' },
  { id: 'details', title: 'The Logistics', description: 'Tell us where and when the magic happens.' },
  { id: 'submit', title: 'Final Review', description: 'Ready to receive your custom experience quote?' }
];

const EVENT_TYPES: EventType[] = ['Wedding', 'Party', 'Corporate', 'Festival', 'Other'];

const ELEMENTS = [
  { id: '360booth', name: '360 Photo Booth', desc: 'Instant viral-worthy videos' },
  { id: 'lighting', name: 'Professional Lighting', desc: 'Ambient and dancefloor effects' },
  { id: 'robot', name: 'LED Robots', desc: 'Crowd-hyping entertainers' },
  { id: 'stilt', name: 'Stilt Walkers', desc: 'Visual impact & interaction' },
  { id: 'co2', name: 'Special Effects', desc: 'CO2 cannons & spark machines' },
  { id: 'custom', name: 'Full Production', desc: 'Sound, stage, and total setup' },
];

export default function BuildYourEvent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    eventType: '' as EventType | '',
    elements: [] as string[],
    date: '',
    location: '',
    duration: '',
    crowdSize: '',
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleElement = (id: string) => {
    setFormData(prev => ({
      ...prev,
      elements: prev.elements.includes(id) 
        ? prev.elements.filter(e => e !== id) 
        : [...prev.elements, id]
    }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto px-6 py-20 text-center space-y-8">
        <motion.div 
           initial={{ scale: 0 }} 
           animate={{ scale: 1 }}
           className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mx-auto shadow-green text-white"
        >
          <Check size={48} strokeWidth={3} />
        </motion.div>
        <h1 className="text-4xl font-display font-bold text-brand-black">Request Received!</h1>
        <p className="text-brand-black/60">
          Our experience architects are reviewing your details. Expect a friendly call or email with your custom quote within 12–24 hours.
        </p>
        <Button variant="neon" size="lg" onClick={() => window.location.href = '/'}>
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 pt-10 pb-20">
      {/* Progress Bar */}
      <div className="mb-20">
        <div className="flex justify-between mb-4">
           {STEPS.map((step, idx) => (
             <div 
               key={step.id}
               className={cn(
                 "text-[10px] uppercase font-bold tracking-widest transition-colors",
                 idx <= currentStep ? "text-brand-green" : "text-brand-black/20"
               )}
             >
               Step 0{idx + 1}
             </div>
           ))}
        </div>
        <div className="h-1 bg-brand-black/5 rounded-full overflow-hidden">
           <motion.div 
             className="h-full bg-brand-green shadow-green" 
             initial={{ width: 0 }}
             animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
           />
        </div>
      </div>

      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-2 text-brand-black">{STEPS[currentStep].title}</h1>
        <p className="text-brand-black/50">{STEPS[currentStep].description}</p>
      </div>

      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EVENT_TYPES.map(type => (
                  <button
                    key={type}
                    onClick={() => { setFormData({...formData, eventType: type}); nextStep(); }}
                    className={cn(
                      "p-6 text-left rounded-3xl border transition-all group",
                      formData.eventType === type 
                        ? "bg-brand-green text-white border-brand-green shadow-green" 
                        : "bg-brand-black/[0.03] border-brand-black/5 hover:border-brand-green/50"
                    )}
                  >
                    <span className="text-xl font-display font-bold">{type}</span>
                  </button>
                ))}
              </div>
            )}

            {currentStep === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ELEMENTS.map(el => (
                  <button
                    key={el.id}
                    onClick={() => toggleElement(el.id)}
                    className={cn(
                      "p-6 text-left rounded-3xl border transition-all flex justify-between items-center",
                      formData.elements.includes(el.id)
                        ? "bg-brand-green/10 border-brand-green shadow-sm"
                        : "bg-brand-black/[0.03] border-brand-black/5 hover:border-brand-green/50"
                    )}
                  >
                    <div>
                      <h4 className={cn("font-bold", formData.elements.includes(el.id) ? "text-brand-green" : "text-brand-black")}>
                        {el.name}
                      </h4>
                      <p className="text-xs text-brand-black/50">{el.desc}</p>
                    </div>
                    {formData.elements.includes(el.id) && <Check size={20} className="text-brand-green" />}
                  </button>
                ))}
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 flex items-center gap-2">
                       <Calendar size={14} /> Event Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full bg-brand-black/[0.03] border border-brand-black/10 rounded-2xl p-4 focus:outline-none focus:border-brand-green transition-colors text-brand-black"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                 </div>
                 <div className="space-y-2 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 flex items-center gap-2">
                       <MapPin size={14} /> Location / Venue
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Hope Gardens"
                      className="w-full bg-brand-black/[0.03] border border-brand-black/10 rounded-2xl p-4 focus:outline-none focus:border-brand-green transition-colors text-brand-black"
                      value={formData.location}
                      onChange={e => setFormData({...formData, location: e.target.value})}
                    />
                 </div>
                 <div className="space-y-2 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 flex items-center gap-2">
                       <Clock size={14} /> Duration (Hours)
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. 4 hours"
                      className="w-full bg-brand-black/[0.03] border border-brand-black/10 rounded-2xl p-4 focus:outline-none focus:border-brand-green transition-colors text-brand-black"
                      value={formData.duration}
                      onChange={e => setFormData({...formData, duration: e.target.value})}
                    />
                 </div>
                 <div className="space-y-2 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 flex items-center gap-2">
                       <Users size={14} /> Crowd Size
                    </label>
                    <select 
                      className="w-full bg-brand-black/[0.03] border border-brand-black/10 rounded-2xl p-4 focus:outline-none focus:border-brand-green transition-colors appearance-none text-brand-black"
                      value={formData.crowdSize}
                      onChange={e => setFormData({...formData, crowdSize: e.target.value})}
                    >
                      <option value="">Select range...</option>
                      <option value="<50">Under 50</option>
                      <option value="50-150">50 - 150</option>
                      <option value="150-300">150 - 300</option>
                      <option value="300+">300+</option>
                    </select>
                 </div>
              </div>
            )}

            {currentStep === 3 && (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-brand-black/[0.03] border border-brand-black/10 p-6 rounded-3xl space-y-4 text-left">
                   <h4 className="text-lg font-bold border-b border-brand-black/10 pb-4 text-brand-black">Experience Summary</h4>
                   <div className="grid grid-cols-2 gap-y-4 text-sm">
                      <div>
                        <p className="text-brand-black/40 text-[10px] uppercase">Event Type</p>
                        <p className="font-medium text-brand-black">{formData.eventType || 'Not selected'}</p>
                      </div>
                      <div>
                        <p className="text-brand-black/40 text-[10px] uppercase">Date</p>
                        <p className="font-medium text-brand-black">{formData.date || 'TBD'}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-brand-black/40 text-[10px] uppercase">Selected Elements</p>
                        <p className="font-medium text-brand-black">
                          {formData.elements.map(e => ELEMENTS.find(el => el.id === e)?.name).join(', ') || 'None selected'}
                        </p>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input 
                    required
                    type="text" 
                    placeholder="Full Name" 
                    className="bg-brand-black/[0.03] border border-brand-black/10 rounded-2xl p-4 focus:outline-none focus:border-brand-green text-brand-black"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    required
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-brand-black/[0.03] border border-brand-black/10 rounded-2xl p-4 focus:outline-none focus:border-brand-green text-brand-black"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    required
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-brand-black/[0.03] border border-brand-black/10 rounded-2xl p-4 focus:outline-none focus:border-brand-green text-brand-black"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </form>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-12 flex justify-between">
        {currentStep > 0 && (
          <Button variant="outline" onClick={prevStep}>
            <ArrowLeft className="mr-2" size={16} /> Back
          </Button>
        )}
        <div className="ml-auto flex gap-4">
           {currentStep < STEPS.length - 1 ? (
             <Button variant="neon" onClick={nextStep} disabled={currentStep === 0 && !formData.eventType}>
               Next Step <ArrowRight className="ml-2" size={16} />
             </Button>
           ) : (
             <Button variant="neon" size="lg" onClick={handleSubmit}>
               Create My Experience
             </Button>
           )}
        </div>
      </div>
    </div>
  );
}
