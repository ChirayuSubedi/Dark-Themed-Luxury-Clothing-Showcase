import React from 'react';
import { Menu, Search, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  setIsCartOpen: (isOpen: boolean) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen, setIsCartOpen }: NavigationProps) {
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-20 h-screen bg-black/90 backdrop-blur-sm z-50 border-r border-white/10">
      <div className="h-full flex flex-col items-center justify-between py-8">
        <h1 className="text-2xl font-cinzel font-bold writing-mode-vertical transform -rotate-180"
            style={{ writingMode: 'vertical-rl' }}>
          LUXE
        </h1>
        
        <div className="flex flex-col items-center space-y-8">
          <button className="p-2 hover:text-gray-300 transition-colors">
            <Search size={20} />
          </button>
          <button 
            className="p-2 hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <button 
            className="p-2 hover:text-gray-300 transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-black text-xs rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        <div className="text-sm font-cinzel writing-mode-vertical transform -rotate-180"
             style={{ writingMode: 'vertical-rl' }}>
          LUXE
        </div>
      </div>
    </nav>
  );
}