export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  role: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}