import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface MenuProps {
  isOpen: boolean;
}

export function Menu({ isOpen }: MenuProps) {
  const location = useLocation();
  
  const menuVariants = {
    closed: { x: '-100%' },
    open: { x: 0 }
  };

  const links = [
    { path: '/', label: 'HOME' },
    { path: '/collection', label: 'COLLECTION' },
    { path: '/about', label: 'ABOUT' }
  ];

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={menuVariants}
      className="fixed inset-y-0 left-20 w-96 bg-dark z-40 border-r border-white/10"
    >
      <div className="h-full flex flex-col justify-center p-12">
        {links.map((link, index) => (
          <motion.div
            key={link.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={link.path}
              className={`text-3xl font-cinzel py-4 block hover:text-gray-300 transition-colors ${
                location.pathname === link.path ? 'text-white' : 'text-gray-400'
              }`}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}