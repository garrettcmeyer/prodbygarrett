'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-center">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 text-center">
            Let's work together on your next project
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
            <div className="space-y-8">
              <motion.a
                href="mailto:garrettcmeyer@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                whileHover={{ scale: 1.02, x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <FaEnvelope className="text-2xl sm:text-3xl text-gray-700 group-hover:text-blue-600 transition-colors" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">garrettcmeyer@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/garrettmeyermusic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                whileHover={{ scale: 1.02, x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <FaInstagram className="text-2xl sm:text-3xl text-gray-700 group-hover:text-pink-500 transition-colors" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Instagram</h3>
                  <p className="text-gray-600">@garrettmeyermusic</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.youtube.com/@prodbygarrettm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                whileHover={{ scale: 1.02, x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <FaYoutube className="text-2xl sm:text-3xl text-gray-700 group-hover:text-red-500 transition-colors" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">YouTube</h3>
                  <p className="text-gray-600">@prodbygarrettm</p>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

