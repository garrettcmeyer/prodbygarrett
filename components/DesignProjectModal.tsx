'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { DesignProject } from '@/lib/designProjects';
import { useState } from 'react';

interface DesignProjectModalProps {
  project: DesignProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DesignProjectModal({ project, isOpen, onClose }: DesignProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-20 z-50 bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <FaTimes size={20} />
            </button>

            {/* Content */}
            <div className="flex flex-col lg:flex-row h-full overflow-hidden">
              {/* Image Gallery */}
              <div className="relative flex-1 bg-gray-100 overflow-hidden">
                {project.images.length > 0 && (
                  <>
                    <img
                      src={project.images[currentImageIndex]}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Image Navigation */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                        >
                          ←
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                        >
                          →
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`h-2 rounded-full transition-all ${
                                index === currentImageIndex
                                  ? 'w-8 bg-white'
                                  : 'w-2 bg-white/50 hover:bg-white/75'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>

              {/* Project Info */}
              <div className="lg:w-96 p-6 lg:p-8 overflow-y-auto bg-white">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full uppercase">
                    {project.category}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">{project.year}</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                {project.role && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Role</h3>
                    <p className="text-gray-600">{project.role}</p>
                  </div>
                )}

                {project.tools && project.tools.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

