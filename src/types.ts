export interface HeroSlide {
  id: string;
  number: string;
  name: string;
  location: string;
  year: string;
  image: string;
  tagline?: string;
}

export interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  year: string;
  description: string;
  specs: {
    area: string;
    buildTime: string;
    energyRating: string;
  };
  mainImage: string;
  secondaryImage: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  idealFor: string;
  features: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}
