'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { designProjects, DesignProject, MediaType } from '@/lib/designProjects';
import DesignProjectModal from './DesignProjectModal';

const filters: { value: MediaType | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'photos', label: 'Photos' },
  { value: 'videos', label: 'Videos' },
];

export default function DesignPortfolio() {
  const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<MediaType | 'all'>('all');
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return designProjects;
    }
    return designProjects.filter(project => project.mediaType === activeFilter);
  }, [activeFilter]);
  const orderedProjects = useMemo(() => {
    const list = [...filteredProjects];
    list.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
    return list;
  }, [filteredProjects]);

  const handleProjectClick = (project: DesignProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Design Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Visual identity, branding & creative work
          </p>
        </motion.div>

        {/* Media Type Filters */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.2 }}
          className="mb-8 sm:mb-12 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-colors ${
                activeFilter === filter.value
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {orderedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: index * 0.1 }}
              className="cursor-pointer group"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                <img
                    src={
                      project.cover.type === 'image'
                        ? project.cover.src
                        : project.cover.poster
                    }
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                    />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              <div className="mt-2 sm:mt-3">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                {project.year && (
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{project.year}</p>
                )}
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
