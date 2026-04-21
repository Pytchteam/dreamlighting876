export type EventType = 'Wedding' | 'Party' | 'Corporate' | 'Festival' | 'Other';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: EventType;
  selectedServices: string[];
  location?: string;
  duration?: string;
  crowdSize?: string;
  status: 'New' | 'Contacted' | 'Proposal Sent' | 'Confirmed' | 'Completed' | 'Closed';
  createdAt: string;
  source: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  priceRange?: string;
  features: string[];
  isPopular?: boolean;
  bestFor?: string;
  label?: string;
}

export interface ServiceExperience {
  id: string;
  title: string;
  description: string;
  services: string[];
  image: string;
}

export interface RentalItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price?: string; // e.g. "Starting at $100"
  image: string;
  features?: string[];
}

export type RentalCategory = 'Lighting' | 'Effects' | 'Entertainment' | 'Audio' | 'Staging';

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  features: string[];
  metaDescription: string;
  salesCopy: string;
  image: string;
  gallery?: string[];
  iconName: 'camera' | 'lightbulb' | 'zap' | 'sparkles';
}
