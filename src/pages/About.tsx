import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Zap } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Smart Fabrics',
      description: 'Advanced materials that adapt to your environment and needs.'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Neural Integration',
      description: 'Seamless connection between fashion and technology.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Energy Efficient',
      description: 'Self-sustaining systems that power smart features.'
    }
  ];

  return (
    <div className="pl-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-cinzel mb-6">About LUXE</h1>
          <p className="text-gray-300 text-lg">
            Pioneering the future of fashion through innovative technology and timeless design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-dark rounded-lg border border-white/10"
            >
              <div className="mb-4 text-white/80">{feature.icon}</div>
              <h3 className="text-xl font-cinzel mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="aspect-video relative overflow-hidden rounded-lg mb-16"
        >
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
            alt="Studio"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl font-cinzel mb-4">Our Vision</h2>
          <p className="text-gray-300">
            We believe in a future where technology enhances not just the functionality of our clothing,
            but the very way we experience fashion. Every piece in our collection is a testament to this
            vision, combining cutting-edge innovation with timeless elegance.
          </p>
        </motion.div>
      </div>
    </div>
  );
}