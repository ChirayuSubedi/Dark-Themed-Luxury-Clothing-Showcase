import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface ProductDisplayProps {
  products: Product[];
}

export function ProductDisplay({ products }: ProductDisplayProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    setSelectedSize('');
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] aspect-[3/4]">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="absolute inset-0"
            initial={false}
            animate={{
              scale: index === activeIndex ? 1 : 0.8,
              opacity: index === activeIndex ? 1 : 0.3,
              x: `${(index - activeIndex) * 50}%`,
              zIndex: products.length - Math.abs(index - activeIndex)
            }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveIndex(index)}
          >
            <div className="relative w-full h-full">
              <div className="halo" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {index === activeIndex && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent"
                >
                  <h3 className="text-2xl font-cinzel mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-2">{product.description}</p>
                  <p className="text-xl font-cinzel">£{product.price.toLocaleString()}</p>
                  
                  <div className="flex gap-2 mt-4">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1 border ${
                          selectedSize === size
                            ? 'border-white bg-white text-black'
                            : 'border-white/50 hover:border-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!selectedSize}
                    className={`mt-4 px-6 py-2 w-full ${
                      selectedSize
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-white/20 text-white/50 cursor-not-allowed'
                    } transition-colors font-cinzel`}
                  >
                    Add to Cart
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-white' : 'bg-white/30'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}