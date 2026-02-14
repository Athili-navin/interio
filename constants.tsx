import { 
  Home, 
  Utensils, 
  Armchair, 
  Ruler, 
  Hammer, 
  DollarSign, 
  Award, 
  Clock, 
  Palette 
} from 'lucide-react';
import { NavItem, ServiceItem, PortfolioItem, FeatureItem, TestimonialItem, StatItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Residential Interior Design',
    description: 'Complete home interiors designed with elegance and precision for modern living.',
    icon: Home,
  },
  {
    title: 'Modular Kitchen Design',
    description: 'Smart, stylish kitchens built for efficiency without compromising on aesthetics.',
    icon: Utensils,
  },
  {
    title: 'Living Room Styling',
    description: 'Create inviting living spaces that become the heart of your home.',
    icon: Armchair,
  },
  {
    title: 'Space Planning',
    description: 'Optimize every square foot with intelligent layouts that maximize functionality.',
    icon: Ruler,
  },
  {
    title: 'Renovation & Remodeling',
    description: 'Breathe new life into existing spaces with expert renovation services.',
    icon: Hammer,
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Modern Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Luxury Living Room',
    category: 'Living',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Serene Bedroom',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Elegant Bathroom',
    category: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Dining Area',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'Home Office',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
  },
];

export const FEATURES: FeatureItem[] = [
  {
    title: 'Affordable Pricing',
    description: 'Premium quality interiors at competitive prices that suit every budget.',
    icon: DollarSign,
  },
  {
    title: 'Premium Materials',
    description: 'We source only the finest materials for lasting beauty and durability.',
    icon: Award,
  },
  {
    title: 'On-Time Delivery',
    description: 'Strict project timelines ensure your dream space is ready when promised.',
    icon: Clock,
  },
  {
    title: 'Personalized Designs',
    description: 'Every design is a unique reflection of your style and lifestyle.',
    icon: Palette,
  },
];

export const STATS: StatItem[] = [
  { label: 'Years Experience', value: '15', suffix: '+' },
  { label: 'Projects Completed', value: '500', suffix: '+' },
  { label: 'Happy Clients', value: '450', suffix: '+' },
  { label: 'Awards Won', value: '25', suffix: '' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'JSV Interiors transformed our outdated living room into a modern masterpiece. The attention to detail was incredible!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    content: 'Professional, creative, and on time. They understood our brand vision perfectly and delivered beyond expectations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Apartment Owner',
    content: 'The best investment I made for my new apartment. They maximized the space beautifully. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
];