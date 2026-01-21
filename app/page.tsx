'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen w-full overflow-hidden bg-gray-100">
      {/* Split Choice Screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
        className="min-h-screen w-full flex flex-col md:flex-row"
      >
            {/* Producer Panel */}
            <Link href="/producer" className="flex-1 relative overflow-hidden group cursor-pointer">
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/banner.jpg" 
                  alt="Studio" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-white z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.h2
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Productions
                </motion.h2>
                <p className="text-lg sm:text-xl text-gray-100">
                  Music production, engineering & songwriting
                </p>
              </motion.div>
            </Link>

            {/* Designer Panel */}
            <Link 
              href="/designer" 
              className="flex-1 relative overflow-hidden group cursor-pointer bg-[#FAFAFA] border-t md:border-t-0 md:border-l border-gray-200"
            >
              {/* CSS Grid Background */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
                  backgroundSize: '64px 64px'
                }}
              />
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
                  backgroundSize: '64px 64px'
                }}
              />
              
              {/* Large Watermark */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0.02 }}
                whileHover={shouldReduceMotion ? {} : { opacity: 0.04 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-[20rem] sm:text-[24rem] lg:text-[30rem] font-light text-gray-400 select-none leading-none" style={{ fontFamily: "system-ui, -apple-system" }}>
                  DESIGN
                </span>
              </motion.div>


              {/* Focus Effect - Subtle Shadow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                   style={{ 
                     boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.05)'
                   }}
              />

              {/* Foreground Content */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center z-10"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.4, duration: shouldReduceMotion ? 0 : 0.6 }}
              >
                <motion.h2
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-gray-900"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Designs
                </motion.h2>
                <p className="text-lg sm:text-xl text-gray-600">
                  Videos, graphics, covers
                </p>
              </motion.div>
            </Link>
          </motion.div>
    </main>
  );
}
