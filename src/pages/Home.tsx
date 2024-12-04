import React from 'react';
import { ProductDisplay } from '../components/ProductDisplay';
import { products } from '../data/products';

export function Home() {
  return (
    <div className="pl-20">
      <ProductDisplay products={products} />
    </div>
  );
}