import { ServicePackage, ServiceExperience, RentalItem, ServiceDetail } from './types';

export const LOGO_URL = "https://res.cloudinary.com/dd8pjjxsm/image/upload/v1776792478/ChatGPT_Image_Apr_21_2026_12_27_49_PM_gjxktd.png";

export const ALL_SERVICES: ServiceDetail[] = [
  {
    id: '360-booth',
    slug: '360-photo-booth',
    title: '360 Photo Booth Experience',
    description: 'Not just a booth—a high-energy video station. We use high-speed cameras and custom branding offsets to create viral-worthy reels instantly.',
    longDescription: 'Our signature 360 photo booth is the ultimate crowd-puller. Using professional-grade high-speed cameras and automated arm movement, we capture every angle of the energy. Each session is processed in real-time with custom brand overlays, intros, and music, providing your guests with a ready-to-share masterpiece in seconds. It\'s not just about the recording; it\'s about the experience of being the star of the show.',
    features: ['Instant Social Sharing', 'Custom Brand Overlays', 'Professional Lighting Ring', 'On-site Energy Director'],
    metaDescription: 'Rent the best 360 Photo Booth in Jamaica for weddings, parties, and corporate events. High-speed video, custom branding, and instant sharing.',
    salesCopy: 'Make your guests the stars of the show. Our 360 booth doesn’t just record video; it produces professional-grade social content that puts your event in the spotlight.',
    image: 'https://picsum.photos/seed/booth-360/1200/800',
    gallery: [
      'https://picsum.photos/seed/booth-g1/800/800',
      'https://picsum.photos/seed/booth-g2/800/800',
      'https://picsum.photos/seed/booth-g3/800/800'
    ],
    iconName: 'camera'
  },
  {
    id: 'production-lighting',
    slug: 'professional-lighting',
    title: 'Professional Atmospheric Lighting',
    description: 'We use DMX-controlled moving heads and architectural uplighting to transform dead spaces into immersive environments.',
    longDescription: 'We specialize in architectural transformations and high-energy stage lighting. Whether you need an elegant wash for a wedding reception or a pulse-pounding light show for a festival, our technical lead designs a plot that complements your venue and theme. Using industry-standard DMX controllers and wireless uplights, we ensure that every corner of your event glows with intentionality.',
    features: ['Custom Color Palettes', 'Dynamic Dancefloor Scenes', 'Wireless Uplighting', 'Hazer & Beam Effects'],
    metaDescription: 'Architectural and event lighting services in Jamaica. Professional uplighting, moving heads, and custom lighting design for any venue.',
    salesCopy: 'Lighting is the most underrated element of event production. We don’t just "light up a room"; we use technical design to guide the mood of your event.',
    image: 'https://picsum.photos/seed/light-pro/1200/800',
    gallery: [
      'https://picsum.photos/seed/light-g1/800/800',
      'https://picsum.photos/seed/light-g2/800/800',
      'https://picsum.photos/seed/light-g3/800/800'
    ],
    iconName: 'lightbulb'
  },
  {
    id: 'live-entertainment',
    slug: 'led-robots-entertainment',
    title: 'LED Robots & Live Crowd Hypers',
    description: 'Our LED Robots and Stilt Walkers are trained performers who know how to read a crowd and ignite the dancefloor.',
    longDescription: 'When the party reaches its peak, our entertainers step in. Our LED Robots stand over 8 feet tall, equipped with thousands of synchronized LEDs, laser hands, and high-pressure CO2 cannons. Alongside our skilled stilt walkers and interactive crowd hypers, they don\'t just perform—they lead the room, creating high-energy interactive moments that guarantee your event stays talked about long after the music stops.',
    features: ['Laser-equipped Suits', 'CO2 Hand Cannons', 'Interactive Performance', 'Photo Op Master'],
    metaDescription: 'Boost your event energy with LED Robots and Stilt Walkers in Jamaica. Interactive entertainment with CO2 cannons and laser effects.',
    salesCopy: 'When the energy dips, we bring the explosion. Our performers aren’t just wearing suits—they are high-octane entertainers trained to bridge the gap between the music and the audience.',
    image: 'https://picsum.photos/seed/robot-pro/1200/800',
    gallery: [
      'https://picsum.photos/seed/robot-g1/800/800',
      'https://picsum.photos/seed/robot-g2/800/800',
      'https://picsum.photos/seed/robot-g3/800/800'
    ],
    iconName: 'zap'
  },
  {
    id: 'special-effects',
    slug: 'cinematic-fx',
    title: 'Cinematic Special Effects',
    description: 'Create cinematic moments with our cold-spark machines, heavy smoke (cloud effect), and CO2 jets.',
    longDescription: 'We provide venue-safe, high-impact special effects that turn grand entrances and first dances into cinematic masterpieces. Our "Dancing on a Cloud" low-lying fog uses dry ice technology for a crisp, floor-hugging layer that doesn\'t trigger smoke alarms. Combined with our cold-spark fountains—which are touch-safe and non-flammable—we provide a dramatic visual punch without compromising safety or venue protocols.',
    features: ['Indoor-Safe Sparks', 'Dancing on the Clouds', 'CO2 Blast Cannons', 'Confetti Blasts'],
    metaDescription: 'Premium special effects for Jamaican events. Cold spark machines, dancing on clouds fog, and CO2 cannons for grand entrances.',
    salesCopy: 'Grand entrances and first dances deserve high-stakes visuals. Our special effects are industry-standard, venue-safe, and designed to create that one specific moment that everyone remembers forever.',
    image: 'https://picsum.photos/seed/fx-pro/1200/800',
    gallery: [
      'https://picsum.photos/seed/fx-g1/800/800',
      'https://picsum.photos/seed/fx-g2/800/800',
      'https://picsum.photos/seed/fx-g3/800/800'
    ],
    iconName: 'sparkles'
  }
];

export const CONTACT_INFO = {
  phone: "1-876-000-0000", // Generic Placeholder
  whatsapp: "18760000000", // Placeholder for link
  email: "info@dreamlighting876.com"
};

export const getWhatsAppLink = (message?: string) => {
  const base = `https://wa.me/${CONTACT_INFO.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const PACKAGES: ServicePackage[] = [
  {
    id: 'wedding-experience',
    name: 'Wedding Experience',
    description: 'Transform your special day with elegant lighting and interactive memory-making.',
    features: [
      'Custom Ambient Lighting',
      '360 Photo Booth (4 Hours)',
      'Dynamic Dancefloor Effects',
      'Professional Setup & Strike'
    ],
    label: 'Best for Weddings',
    bestFor: 'Couples & Planners'
  },
  {
    id: 'party-experience',
    name: 'Party Experience',
    description: 'High-energy entertainment designed to keep the crowd moving.',
    features: [
      'Nightlife Lighting Setup',
      'LED Robot Experience',
      'CO2 / Spark Effects',
      '360 Booth Add-on Available'
    ],
    isPopular: true,
    label: 'Most Popular',
    bestFor: 'Birthdays & Promoters'
  },
  {
    id: 'premium-event',
    name: 'Premium Event Experience',
    description: 'Full-scale production support for high-stakes brand activations and gala events.',
    features: [
      'Full Team On-site',
      'Total Venue Transformation',
      'Stilt Walkers & Crowd Activation',
      'Premium Production Support'
    ],
    label: 'Full Production',
    bestFor: 'Corporate & Hotels'
  }
];

export const EXPERIENCES: ServiceExperience[] = [
  {
    id: 'capture',
    title: 'Capture Moments',
    description: 'Our signature 360 Photo Booth creates instant, high-quality video content your guests will love sharing.',
    services: ['360 Photo Booth', 'Custom Branding', 'Live Sharing Station'],
    image: 'https://picsum.photos/seed/party-360/800/600'
  },
  {
    id: 'lighting',
    title: 'Lighting Experience',
    description: 'We don\'t just light a room; we set the mood. From elegant wedding washes to high-octane strobe effects.',
    services: ['Moving Heads', 'Uplighting', 'Wash Lighting', 'Laser Effects'],
    image: 'https://picsum.photos/seed/lighting-event/800/600'
  },
  {
    id: 'energy',
    title: 'Live Energy',
    description: 'Bring the hype with our LED Robots and Stilt Walkers. Pure entertainment that guarantees a packed dancefloor.',
    services: ['LED Robots', 'Stilt Walkers', 'Crowd Interaction'],
    image: 'https://picsum.photos/seed/led-robot/800/600'
  }
];

export const VENUES = [
  'Hope Gardens',
  'AC Hotel Kingston',
  'Spanish Court Hotel',
  'Devon House',
  'Grand Palladium',
  'Cari-Med'
];

export const RENTAL_EQUIPMENT: RentalItem[] = [
  {
    id: 'dmx-moving-head',
    name: 'DMX Moving Head Beam',
    description: 'Professional high-intensity beams for concert-level energy.',
    category: 'Lighting',
    image: 'https://picsum.photos/seed/moving-head/600/400',
    features: ['Auto & Sound Active', '14 Colors + Open', 'High-speed Shutter']
  },
  {
    id: 'wireless-uplight',
    name: 'Wireless LED Uplight',
    description: 'Transform venue walls with custom color washes. No messy cables.',
    category: 'Lighting',
    image: 'https://picsum.photos/seed/uplight/600/400',
    features: ['Battery Powered', 'RGBAW+UV Color Mix', 'App Controlled']
  },
  {
    id: 'cold-spark-machine',
    name: 'Cold Spark Machine',
    description: 'Indoor-safe fountain sparks for grand entrances and first dances.',
    category: 'Effects',
    image: 'https://picsum.photos/seed/spark-machine/600/400',
    features: ['Non-flammable', 'Adjustable Height', 'DMX Compatible']
  },
  {
    id: 'heavy-smoke',
    name: 'Low-Lying Fog (Cloud)',
    description: 'The "Dancing on a Cloud" effect using dry ice technology.',
    category: 'Effects',
    image: 'https://picsum.photos/seed/low-fog/600/400',
    features: ['Odorless', 'Stays Low to Floor', 'Event-ready in 20min']
  },
  {
    id: 'led-robot-suit',
    name: 'LED Robot (Performance)',
    description: 'Full-sized suit with CO2 cannons and laser hands.',
    category: 'Entertainment',
    image: 'https://picsum.photos/seed/robot-suit/600/400',
    features: ['Wireless Control', 'CO2 Ready', 'Impact Lighting']
  },
  {
    id: 'stilt-walker',
    name: 'Stilt Walker Performance',
    description: 'Towering entertainers to hype the crowd and pose for photos.',
    category: 'Entertainment',
    image: 'https://picsum.photos/seed/stilt-walker/600/400',
    features: ['Custom Costumes', 'Crowd Interaction', '45min Sets']
  }
];

export const FAQS = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 3-6 months in advance for weddings and major festivals. However, we can often accommodate last-minute bookings for smaller private events depending on availability.'
  },
  {
    question: 'Do you travel island-wide?',
    answer: 'Yes! Dream Lighting 876 provides services throughout Jamaica. Travel fees may apply for locations outside of Kingston and St. Andrew.'
  },
  {
    question: 'Do you offer custom packages?',
    answer: 'Absolutely. While our experience packages are curated for popular event types, we love building bespoke setups that match your specific vision and budget.'
  },
  {
    question: 'How long does setup take?',
    answer: 'Setup time varies depending on the complexity of your package. Standard 360 booth setups take about 45-60 minutes, while full-scale lighting rigs can take 3-5 hours.'
  }
];
