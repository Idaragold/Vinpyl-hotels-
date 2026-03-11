export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
}

export interface SpaService {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
}

export interface Booking {
  id: string;
  type: 'room' | 'spa';
  serviceId: string;
  customerName: string;
  email: string;
  date: string;
  guests: number;
}
