'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [showChoice, setShowChoice] = useState(false);

  // Check for prefers-reduced-motion
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // Skip intro if reduced motion is preferred
    if (prefersReducedMotion) {
      setShowIntro(false);
      setShowChoice(true);
      return;
    }

    // Auto-advance after 3 seconds (or show immediately if skipped)
    const timer = setTimeout(() => {
      if (showIntro) {
        setShowIntro(false);
        setTimeout(() => setShowChoice(true), 300);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [showIntro, prefersReducedMotion]);

  const skipIntro = () => {
    setShowIntro(false);
    setTimeout(() => setShowChoice(true), 300);
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-gray-100">
      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center cursor-pointer"
            onClick={skipIntro}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-center text-white"
            >
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Garrett Meyer
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Producer • Designer
              </motion.p>
            </motion.div>
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                skipIntro();
              }}
              className="absolute bottom-8 right-8 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Skip
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Split Choice Screen */}
      <AnimatePresence>
        {showChoice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full flex flex-col md:flex-row"
          >
            {/* Producer Panel */}
            <Link href="/producer" className="flex-1 relative overflow-hidden group cursor-pointer">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
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
                  Producer
                </motion.h2>
                <p className="text-lg sm:text-xl text-gray-100">
                  Music production, engineering & songwriting
                </p>
              </motion.div>
            </Link>

            {/* Designer Panel */}
            <Link href="/designer" className="flex-1 relative overflow-hidden group cursor-pointer">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-white z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.h2
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Designer
                </motion.h2>
                <p className="text-lg sm:text-xl text-gray-100">
                  Album art, branding & visual identity
                </p>
              </motion.div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
