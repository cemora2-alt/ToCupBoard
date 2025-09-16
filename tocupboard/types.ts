export type Page = 'home' | 'products' | 'about' | 'contact';

// FIX: Add Section type for the technical report sidebar navigation.
export type Section = 'introduction' | 'wordpress' | 'api' | 'payment' | 'devsecops' | 'github';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}