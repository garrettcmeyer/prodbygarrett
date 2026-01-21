'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { DesignProject, MediaBlock, CarouselBlock } from '@/lib/designProjects';
import { useState, useEffect, useRef } from 'react';

interface DesignProjectModalProps {
  project: DesignProject | null;
  isOpen: boolean;
  onClose: () => void;
}

interface CarouselProps {
  carousel: CarouselBlock;
}

function Carousel({ carousel }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const totalSlides = carousel.slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Use object-contain to ensure images always fit the carousel view (not cropped)
  return (
    <div className="relative w-full h-[48vh] sm:h-[56vh] md:h-[64vh] lg:h-[80vh] flex flex-col">
      <div
        className="relative overflow-hidden flex-1 h-full"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out h-full w-full"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: shouldReduceMotion ? 'none' : undefined
          }}
        >
          {carousel.slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 flex items-center justify-center relative"
              style={{ aspectRatio: '1/1' }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-contain rounded-xl bg-white"
                style={{ minHeight: 0, minWidth: 0, maxHeight: '100%', maxWidth: '100%' }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
            aria-label="Next slide"
          >
            <FaChevronRight size={16} />
          </button>

          
        </>
      )}

      
    </div>
  );
}

export default function DesignProjectModal({ project, isOpen, onClose }: DesignProjectModalProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!project) return null;
  const shouldScrollMedia =
    project.media.length > 1 && project.media.some(b => b.type !== 'carousel');

  const renderMediaBlock = (block: MediaBlock, index: number) => {
    switch (block.type) {
      case 'image':
        return (
          <div key={index} className="mb-6 last:mb-0 h-full w-full flex items-center justify-center">
            <img
              src={block.src}
              alt={block.alt}
              className="max-h-[80vh] max-w-full h-auto w-auto object-contain rounded-xl bg-white"
              style={{ display: 'block', margin: '0 auto' }}
            />
            
          </div>
        );
      case 'video':
        return (
          <div key={index} className="mb-6 last:mb-0">
            <video
              src={block.src}
              poster={block.poster}
              controls
              muted
              className="w-full max-h-[80vh] object-contain rounded-xl bg-black"
              playsInline
            />
            
          </div>
        );

      case 'carousel':
        return (
          <div key={index} className="mb-6 last:mb-0 h-full w-full flex items-center justify-center">
            <Carousel carousel={block} />
          </div>
        );

      default:
        return null;
    }
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
            aria-label="Close modal"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9, y: shouldReduceMotion ? 0 : 20 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            className="fixed inset-2 sm:inset-4 lg:inset-6 z-50 bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[96vh]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>

            {/* Content */}
            <div className="flex flex-col lg:flex-row h-full overflow-hidden">
              {/* Media Section */}
              <div className="flex-1 bg-gray-100 overflow-hidden p-3 sm:p-6">
                <div
                  className={`h-full w-full ${
                    shouldScrollMedia ? 'overflow-y-auto pr-2' : 'overflow-hidden'
                  }`}
                >
                  {project.media.map((block, index) => renderMediaBlock(block, index))}
                </div>
              </div>

              {/* Project Info Sidebar */}
              <div className="lg:w-96 p-6 lg:p-8 overflow-y-auto bg-white border-t lg:border-t-0 lg:border-l border-gray-200">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full uppercase">
                    {project.category}
                  </span>
                  {project.year && (
                    <span className="ml-2 text-sm text-gray-500">{project.year}</span>
                  )}
                </div>

                <h2 id="modal-title" className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h2>

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
