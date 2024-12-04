import React from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'tween' }}
      className="fixed inset-y-0 right-0 w-96 bg-dark z-50 border-l border-white/10"
    >
      <div className="h-full flex flex-col p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} />
            <h2 className="text-xl font-cinzel">Cart</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:text-gray-300">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          {items.map(item => (
            <div key={`${item.id}-${item.selectedSize}`} className="mb-4 p-4 bg-black/50 rounded-lg">
              <div className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-cinzel">{item.name}</h3>
                  <p className="text-sm text-gray-400">Size: {item.selectedSize}</p>
                  <p className="text-sm">£{item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-white/10 rounded"
                    >
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-white/10 rounded"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-red-400 hover:text-red-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-4 mt-4">
          <div className="flex justify-between mb-4">
            <span className="font-cinzel">Total</span>
            <span className="font-cinzel">£{total.toLocaleString()}</span>
          </div>
          <button className="w-full py-3 bg-white text-black font-cinzel hover:bg-gray-200 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </motion.div>
  );
}