export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  sizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}