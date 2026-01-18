'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { designProjects, DesignProject } from '@/lib/designProjects';
import DesignProjectModal from './DesignProjectModal';

export default function DesignPortfolio() {
  const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: DesignProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Design Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Album art, branding & visual identity work
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6">
          {designProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 sm:mb-6 break-inside-avoid cursor-pointer group"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.year} • {project.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <DesignProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  );
}

