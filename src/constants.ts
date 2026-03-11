import { Room, SpaService } from './types';

export const ROOMS: Room[] = [
  {
    id: 'standard-deluxe',
    name: 'Standard Deluxe',
    description: 'A cozy and elegant room perfect for solo travelers or couples.',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Smart TV', 'Mini Bar']
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    description: 'Spacious suite with a separate living area and premium city views.',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    amenities: ['King Size Bed', 'City View', 'Work Desk', 'Breakfast Included']
  },
  {
    id: 'presidential-villa',
    name: 'Presidential Villa',
    description: 'The ultimate luxury experience with private balcony and personalized service.',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    amenities: ['Private Balcony', 'Jacuzzi', 'Butler Service', 'Airport Pickup']
  }
];

export const SPA_SERVICES: SpaService[] = [
  {
    id: 'swedish-massage',
    name: 'Swedish Massage',
    description: 'A full-body therapeutic massage designed to relax the muscles.',
    price: 15000,
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'aromatherapy',
    name: 'Aromatherapy',
    description: 'Essential oils combined with gentle massage for emotional and physical well-being.',
    price: 18000,
    duration: '90 mins',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'facial-rejuvenation',
    name: 'Facial Rejuvenation',
    description: 'Deep cleansing and hydration to bring back your natural glow.',
    price: 12000,
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  }
];
