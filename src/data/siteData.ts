import { HeroSlide, Hotspot, ProjectItem, ServiceItem, TestimonialItem } from '../types';

export const BUSINESS = {
  name: 'Day & Night Plumbing Services',
  phone: '(678) 482-4444',
  phoneLink: '+16784824444',
  location: 'Atlanta, GA 30303',
  neighborhood: 'Woodruff Park',
  rating: '4.3',
  reviewCount: 4,
  googleMapsUrl: 'https://maps.google.com/?cid=10911817173497203531'
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-01',
    number: '01',
    name: 'PLUMBING SERVICE',
    location: 'ATLANTA, GEORGIA',
    year: 'DAY & NIGHT PLUMBING SERVICES',
    image: './images/hero_plumbing_service_1790751534991.jpg',
    tagline: 'Call Day & Night Plumbing Services in Atlanta to discuss your plumbing needs and ask about availability.'
  },
  {
    id: 'slide-02',
    number: '02',
    name: 'PUNCTUAL, EFFICIENT SERVICE',
    location: 'ATLANTA, GEORGIA',
    year: 'CUSTOMER REVIEW HIGHLIGHT',
    image: './images/master_plumber_team_1790751575252.jpg',
    tagline: 'Google reviewers have praised on-time arrivals, efficient work, and respectful service.'
  },
  {
    id: 'slide-03',
    number: '03',
    name: 'CAREFUL IN-HOME SERVICE',
    location: 'ATLANTA, GEORGIA',
    year: 'CUSTOMER REVIEW HIGHLIGHT',
    image: './images/emergency_pipe_repair_1790751588697.jpg',
    tagline: 'Customers have also noted courteous technicians and clean, orderly work areas.'
  }
];

export const ABOUT_HOTSPOTS: Record<'ON-TIME SERVICE' | 'RESPECTFUL CARE' | 'CAREFUL WORK', { image: string; hotspots: Hotspot[] }> = {
  'ON-TIME SERVICE': {
    image: './images/master_plumber_team_1790751575252.jpg',
    hotspots: [
      {
        id: 'hs-1',
        x: 32,
        y: 42,
        title: 'Punctual Arrival',
        description: 'A Google reviewer praised the crew for arriving on time for an in-home service visit.'
      },
      {
        id: 'hs-2',
        x: 62,
        y: 50,
        title: 'Efficient Work',
        description: 'Customer feedback describes the team getting started promptly and working efficiently.'
      },
      {
        id: 'hs-3',
        x: 78,
        y: 38,
        title: 'Atlanta Location',
        description: 'Day & Night Plumbing Services is listed in Atlanta, Georgia 30303.'
      },
      {
        id: 'hs-4',
        x: 48,
        y: 72,
        title: 'Ask About Availability',
        description: 'Call the team to discuss your plumbing concern and confirm current service availability.'
      }
    ]
  },
  'RESPECTFUL CARE': {
    image: './images/emergency_pipe_repair_1790751588697.jpg',
    hotspots: [
      {
        id: 'hs-sys-1',
        x: 35,
        y: 45,
        title: 'Respectful Service',
        description: 'A customer review praised the crew for being courteous, respectful, and professional.'
      },
      {
        id: 'hs-sys-2',
        x: 65,
        y: 50,
        title: 'Friendly Team',
        description: 'One reviewer described a friendly, professional interaction during a service visit.'
      },
      {
        id: 'hs-sys-3',
        x: 52,
        y: 70,
        title: 'Fair Pricing',
        description: 'A Google reviewer described the service as reasonably priced.'
      }
    ]
  },
  'CAREFUL WORK': {
    image: './images/master_plumber_team_1790751575252.jpg',
    hotspots: [
      {
        id: 'hs-fam-1',
        x: 34,
        y: 36,
        title: 'Clean Work Area',
        description: 'A customer noted that the crew left the home clean and orderly after the work.'
      },
      {
        id: 'hs-fam-2',
        x: 58,
        y: 52,
        title: 'Focused Troubleshooting',
        description: 'A reviewer reported getting help with a persistent plumbing problem.'
      },
      {
        id: 'hs-fam-3',
        x: 76,
        y: 42,
        title: 'Call to Discuss Your Job',
        description: 'Contact Day & Night Plumbing Services to explain your issue and ask about next steps.'
      }
    ]
  }
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'case-1',
    title: 'PUNCTUAL IN-HOME SERVICE',
    location: 'Atlanta, GA',
    year: 'Google review',
    description: 'A Google reviewer praised the crew for arriving on time and working efficiently and respectfully during an in-home visit.',
    specs: {
      area: 'In-home visit',
      buildTime: 'On schedule',
      energyRating: 'Respectful crew'
    },
    mainImage: './images/hero_plumbing_service_1790751534991.jpg',
    secondaryImage: './images/emergency_pipe_repair_1790751588697.jpg'
  },
  {
    id: 'case-2',
    title: 'CAREFUL, ORDERLY WORK',
    location: 'Atlanta, GA',
    year: 'Google review',
    description: 'A customer review noted efficient work, respectful service, and a clean, orderly home afterward.',
    specs: {
      area: 'Clean work area',
      buildTime: 'Efficient visit',
      energyRating: 'Courteous team'
    },
    mainImage: './images/emergency_pipe_repair_1790751588697.jpg',
    secondaryImage: './images/hero_plumbing_service_1790751534991.jpg'
  },
  {
    id: 'case-3',
    title: 'PERSISTENT PLUMBING ISSUE',
    location: 'Atlanta, GA',
    year: 'Google review',
    description: 'One reviewer said a plumbing problem they had been dealing with for a long time was resolved during a short visit.',
    specs: {
      area: 'Troubleshooting',
      buildTime: 'Brief visit',
      energyRating: 'Customer-reported'
    },
    mainImage: './images/emergency_pipe_repair_1790751588697.jpg',
    secondaryImage: './images/master_plumber_team_1790751575252.jpg'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'service-1',
    title: 'GENERAL PLUMBING REPAIRS',
    subtitle: 'Call to describe the issue and confirm current availability.',
    description: 'Day & Night Plumbing Services is listed as a plumber in Atlanta. Call to discuss your repair and ask whether the team can help.',
    duration: 'Call for availability',
    idealFor: 'Customers with a plumbing concern in Atlanta.',
    features: ['Discuss your plumbing issue', 'Ask about scheduling', 'Confirm service availability'],
    image: './images/hero_plumbing_service_1790751534991.jpg'
  },
  {
    id: 'service-2',
    title: 'IN-HOME PLUMBING SERVICE',
    subtitle: 'Customer reviews mention in-home visits and courteous service.',
    description: 'Google reviewers have described timely arrivals, respectful technicians, and efficient in-home work. Call to confirm your location and availability.',
    duration: 'Call to schedule',
    idealFor: 'Atlanta customers looking for in-home plumbing help.',
    features: ['Punctual service noted in reviews', 'Respectful customer care', 'Clean work areas noted in reviews'],
    image: './images/master_plumber_team_1790751575252.jpg'
  },
  {
    id: 'service-3',
    title: 'PLUMBING TROUBLESHOOTING',
    subtitle: 'Talk with the team about a persistent plumbing problem.',
    description: 'A Google reviewer reported getting help with a long-standing plumbing issue. Contact the business to discuss your specific concern.',
    duration: 'Call for availability',
    idealFor: 'Customers who need help discussing a plumbing issue.',
    features: ['Explain the symptoms', 'Ask about next steps', 'Confirm service details by phone'],
    image: './images/emergency_pipe_repair_1790751588697.jpg'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote: 'A reviewer praised the team for arriving on time and working efficiently and respectfully during an in-home visit.',
    author: 'Marsha Raeber',
    role: 'Google review · 5 stars',
    rating: 5
  },
  {
    id: 't-2',
    quote: 'A reviewer said the team resolved a plumbing problem they had been dealing with for about a year during a short visit.',
    author: 'Suga Plum',
    role: 'Google review · 5 stars',
    rating: 5
  },
  {
    id: 't-3',
    quote: 'Customers have also praised the team’s professional, friendly service and reasonable pricing.',
    author: 'Heather Stennis',
    role: 'Google review · 5 stars',
    rating: 5
  }
];
