import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Menu } from './components/Menu';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';
import { Home } from './pages/Home';
import { Collection } from './pages/Collection';
import { About } from './pages/About';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Navigation 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen}
            setIsCartOpen={setIsCartOpen}
          />
          <Menu isOpen={isMenuOpen} />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;